import * as ort from 'onnxruntime-web';
import { createPiperPhonemize } from './piper.js';

const HF = 'https://huggingface.co/diffusionstudio/piper-voices/resolve/main';
const PHON = 'https://cdn.jsdelivr.net/npm/@diffusionstudio/piper-wasm@1.0.0/build/piper_phonemize';
const ORT_WASM = 'https://cdnjs.cloudflare.com/ajax/libs/onnxruntime-web/1.18.0/';

export const VOICES = {
  'pt_BR-faber-medium': { path: 'pt/pt_BR/faber/medium/pt_BR-faber-medium.onnx', label: 'Faber (masculina, melhor qualidade)', mb: 63 },
  'pt_BR-edresson-low': { path: 'pt/pt_BR/edresson/low/pt_BR-edresson-low.onnx', label: 'Edresson (masculina, mais leve)', mb: 63 }
};

ort.env.wasm.wasmPaths = ORT_WASM;
ort.env.wasm.numThreads = 1;
ort.env.wasm.proxy = false;

// Cache API funciona no Safari/iOS (o OPFS com escrita não funciona)
async function cached(url, onProgress) {
  const cache = self.caches ? await caches.open('lpm-models') : null;
  const res = cache && await cache.match(url);
  if (res) return res.arrayBuffer();
  const r = await fetch(url);
  if (!r.ok) throw new Error('Falha ao baixar ' + r.status);
  const total = +r.headers.get('Content-Length') || 0;
  const reader = r.body.getReader(); const parts = []; let got = 0;
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    parts.push(value); got += value.length;
    if (onProgress && total) onProgress(got / total);
  }
  const buf = await new Blob(parts).arrayBuffer();
  try { if (cache) await cache.put(url, new Response(buf.slice(0), { headers: { 'Content-Type': 'application/octet-stream' } })); } catch (e) {}
  return buf;
}

export async function isDownloaded(id) {
  try { return !!(await (await self.caches.open('lpm-models')).match(`${HF}/${VOICES[id].path}`)); } catch { return false; }
}

const engines = {};
export async function load(id, onProgress) {
  if (engines[id]) return engines[id];
  const v = VOICES[id];
  const cfg = JSON.parse(new TextDecoder().decode(await cached(`${HF}/${v.path}.json`)));
  const model = await cached(`${HF}/${v.path}`, onProgress);
  const session = await ort.InferenceSession.create(model, { executionProviders: ['wasm'] });
  return (engines[id] = { id, cfg, session });
}

// converte vários textos de uma vez (um único carregamento do fonemizador)
export async function phonemize(engine, texts) {
  const input = JSON.stringify(texts.map(t => ({ text: t })));
  const out = [];
  await new Promise(async (resolve, reject) => {
    try {
      const m = await createPiperPhonemize({
        print: l => { try { out.push(JSON.parse(l).phoneme_ids); } catch (e) { out.push([]); } if (out.length >= texts.length) resolve(); },
        printErr: () => {},
        locateFile: f => f.endsWith('.wasm') ? PHON + '.wasm' : f.endsWith('.data') ? PHON + '.data' : f
      });
      m.callMain(['-l', engine.cfg.espeak.voice, '--input', input, '--espeak_data', '/espeak-ng-data']);
      setTimeout(resolve, 0);
    } catch (e) { reject(e); }
  });
  return out;
}

export async function synth(engine, ids) {
  const { cfg, session } = engine;
  const inf = cfg.inference;
  const feeds = {
    input: new ort.Tensor('int64', BigInt64Array.from(ids.map(BigInt)), [1, ids.length]),
    input_lengths: new ort.Tensor('int64', BigInt64Array.from([BigInt(ids.length)]), [1]),
    scales: new ort.Tensor('float32', Float32Array.from([inf.noise_scale, inf.length_scale, inf.noise_w]), [3])
  };
  if (Object.keys(cfg.speaker_id_map || {}).length) feeds.sid = new ort.Tensor('int64', BigInt64Array.from([0n]), [1]);
  const { output } = await session.run(feeds);
  return wav(output.data, cfg.audio.sample_rate);
}

function wav(f32, sr) {
  const n = f32.length, dv = new DataView(new ArrayBuffer(44 + n * 2));
  const w = (o, s) => [...s].forEach((c, i) => dv.setUint8(o + i, c.charCodeAt(0)));
  w(0, 'RIFF'); dv.setUint32(4, 36 + n * 2, true); w(8, 'WAVE'); w(12, 'fmt ');
  dv.setUint32(16, 16, true); dv.setUint16(20, 1, true); dv.setUint16(22, 1, true);
  dv.setUint32(24, sr, true); dv.setUint32(28, sr * 2, true); dv.setUint16(32, 2, true); dv.setUint16(34, 16, true);
  w(36, 'data'); dv.setUint32(40, n * 2, true);
  for (let i = 0; i < n; i++) { const s = Math.max(-1, Math.min(1, f32[i])); dv.setInt16(44 + i * 2, s < 0 ? s * 32768 : s * 32767, true); }
  return new Blob([dv], { type: 'audio/wav' });
}
