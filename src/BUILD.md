Regenerar `neural.bundle.js` (só se mudar src/neural.js):

    npm i onnxruntime-web@1.18.0 esbuild
    npx esbuild src/neural.js --bundle --format=esm --minify --platform=browser \
      --alias:fs=./src/stub.js --alias:path=./src/stub.js --alias:os=./src/stub.js \
      --alias:worker_threads=./src/stub.js --alias:crypto=./src/stub.js --outfile=neural.bundle.js

`src/piper.js` é o fonemizador do Piper (MIT), copiado de @diffusionstudio/vits-web 1.0.3.
