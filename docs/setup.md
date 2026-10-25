# Setup e evidências

## Origem e contexto

Data: 2026-10-25. Toolkit `soumatheusgomes/vibe-coding-toolkit`, revisão `790a895304e0c08b70a5b215c9d334f1c86b816c`, prompt 11. Cliente: Claude Code (sessão em nuvem), Linux, Node 22.22.0, npm 10.9.4, pnpm 10.28.0. Cliente, modelo e autenticação preservados; sem delegação a subagentes.

## Decisões e fontes

- Scaffold: `create-next-app@latest` (Next 16.4.3) com TypeScript, Tailwind, ESLint, App Router, `src/`, alias `@/*`, pnpm, sem React Compiler. Feito em diretório temporário e incorporado ao destino (que tinha só `.git` vazio). Padrões `cacheComponents` e `partialPrefetching` do scaffold foram mantidos.
- Núcleo reduzido: instalados `clsx`, `tailwind-merge`, `vitest`, `typescript-eslint`, `@types/node@24`. Omitidos Drizzle, pg, Zod, Pino, `server-only` e templates `templates/next/src/db` e `lib/env|logger`, porque o produto não tem persistência (PRODUCT.md). Perfil de lint leve (`next.config.mjs.example`) com perfil tipado.
- `@types/node@24` pode divergir do runtime 22; sem conflito observado com Vitest ou Next. Revisitar se aparecer erro de tipos.
- Não consultei Context7 (sem conexão nesta sessão); usei os docs do pacote `node_modules/next/dist/docs` e o toolkit.

## Componentes

| Componente | Ação e motivo | Escopo | Estado e evidência |
|---|---|---|---|
| Skills vercel-labs/agent-skills (8) | Instaladas conforme catálogo | Projeto, `.claude/skills/` (cópia), `skills-lock.json` | Instaladas; `skills list` as lista. Descoberta por sessão nova não testada |
| `find-skills` (vercel-labs/skills) | Instalada | Projeto | Idem |
| `next-dev-loop`, `next-bundle-optimizer` | Instaladas (Next 16.4.3 compatível) | Projeto | Instaladas. Pré-requisitos de runtime (agent-browser, analisador) não verificados |
| `vercel-react-native-skills` | Não aplicável (sem mobile nativo) | — | — |
| `supabase-postgres-best-practices` | Não aplicável (sem PostgreSQL) | — | — |
| `gh-fix-ci` | Não selecionada (fluxo Codex/GitHub Actions; sem CI) | — | Pendente |
| `differential-review` | Não instalada; prompt de segurança registrado em quality.md | — | Configurado sem execução |
| `shadcn` | Não aplicável (sem shadcn/ui) | — | — |
| Sentry MCP | Não selecionado (sem serviço escolhido) | — | Pendente |
| Context7 | Sem conexão ativa; `templates/project/mcp.json.example` não aplicado | — | Pendente: adicionar `.mcp.json` se Cristiano quiser |
| Graphify | CLI não encontrada; `.graphifyignore` copiado | Projeto | Grafo não gerado (pendente) |
| RTK, Ponytail, Caveman, Superpowers | Não verificáveis nesta sessão; acordos escritos em AGENTS.md só no que se aplica | — | Pendente: confirmar plugins instalados |
| Harness2 (adaptação nativa) | Método registrado em quality.md | Projeto | Smoke de harness não executado (ver abaixo) |

## Documentação criada

PRODUCT.md, README.md, AGENTS.md (com bloco gerado pelo Next preservado), CLAUDE.md (`@AGENTS.md`), docs/architecture.md, design.md, onboarding.md, quality.md, setup.md com conteúdo do projeto. Diretório de destino não tinha arquivos anteriores.

## Verificações

| Item | Estado | Evidência |
|---|---|---|
| `pnpm lint` | Validado | Sem erros |
| `pnpm typecheck` | Validado | Sem erros |
| `pnpm lint:typed` | Validado | Sem erros; custo não medido |
| `pnpm lint:rules` | Validado | Passou |
| `pnpm test` | Validado | 2 testes passaram |
| `pnpm build` | Validado | Next 16.4.3, `/` e `/_not-found` estáticos |
| `pnpm audit` e `--prod` | Validado | Sem vulnerabilidades conhecidas |
| Servidor em porta livre | Validado | `pnpm start` na porta 3457; HTML com `lang="pt-BR"` e `<h1>Cristiano Medeiros</h1>`; processo encerrado |
| Grafo Graphify | Pendente | CLI ausente |
| Query real ao Context7 | Pendente | Sem conexão |
| Descoberta de skills em sessão nova | Pendente | Só presença em disco comprovada |
| Casos de smoke do harness / revisão de segurança | Não executado | Sem instruções ou memória alteradas além do setup; nenhuma falha observada |

Recursos temporários: scaffold e clone do toolkit ficaram no diretório scratchpad da sessão, fora do projeto.

## Memória

Sem memória nativa configurada. Índice canônico: AGENTS.md aponta para PRODUCT.md e docs/*; Claude Code carrega via CLAUDE.md (`@AGENTS.md`). Verificação em contexto limpo: não executada. Invalidar o índice quando documentos mudarem de responsabilidade.

## Pendências e próxima entrega

Pendências externas em PRODUCT.md (WhatsApps, serviços, texto, logos, domínio). Nada foi publicado, enviado ou comprado. Próxima entrega: apresentação pessoal e seção da Átrio. Comando de desenvolvimento: `pnpm dev`.
