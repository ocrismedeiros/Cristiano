# Qualidade

## Comandos

| Comando | O que prova |
|---|---|
| `pnpm lint` | Presets Next/TypeScript e limite de 350 linhas |
| `pnpm typecheck` | `next typegen` e `tsc --noEmit` sem erros |
| `pnpm lint:typed` | `no-floating-promises` e `no-misused-promises` como erro em `src/` |
| `pnpm lint:rules` | As regras locais de `eslint-rules/` funcionam |
| `pnpm test` | Testes Vitest (hoje só o utilitário `cn`) |
| `pnpm build` | Build de produção estático |
| `pnpm check` | Todos acima em sequência; não conecta a serviços |

## Regras base

TypeScript estrito, presets oficiais, limite de 350 linhas, sem acesso a dados na apresentação. Regras de Drizzle não se aplicam (sem ORM).

## Estratégia de testes

Testar lógica e regressões reais. Quando existirem dados de contato, testar que cada empresa tem link `wa.me` válido e que nenhum campo obrigatório está vazio. Não há suíte E2E nem cobertura medida.

## Revisão após implementação

Escopo por risco e diff real. Registrar alvo, achados e riscos residuais.

## Revisão de segurança

Fonte versionada: `docs/prompts/13-security-review.md` do toolkit `soumatheusgomes/vibe-coding-toolkit`, revisão `790a895304e0c08b70a5b215c9d334f1c86b816c`. Uso: copiar o bloco Prompt para o agente, em modo somente leitura, com relatórios privados e sem publicar achados. Atualizar relendo o arquivo na revisão desejada. Ainda não executada neste projeto.

## Método de melhoria do harness

Prompt 15 do toolkit (`docs/prompts/15-harness-improvement.md`, mesma revisão), adaptação nativa inspirada no Harness2. Só usar com falha observada e critérios de aceite definidos antes; limite de uma comparação de candidato. Nenhuma falha observada no setup, então nenhuma comparação foi feita.

## Dependências

`pnpm audit` (completo e `--prod`) em 2026-10-25: sem vulnerabilidades conhecidas. Lint e build verdes não substituem a auditoria.
