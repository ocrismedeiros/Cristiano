# Cristiano Medeiros

## Produto e stack

- Produto e escopo: `PRODUCT.md`.
- Stack: Next.js 16.4.3 (App Router, Turbopack), React 19.3, TypeScript 5.9 estrito, Tailwind 4, pnpm 10.28, Node 22. Sem banco de dados.
- Setup e validações: `docs/setup.md`.

## Comandos

- Instalar: `pnpm install`
- Desenvolver: `pnpm dev`
- Lint: `pnpm lint` (tipado: `pnpm lint:typed`)
- Tipos: `pnpm typecheck`
- Regras locais de lint: `pnpm lint:rules`
- Testes: `pnpm test`
- Build: `pnpm build`
- Verificar tudo: `pnpm check`

## Acordos de trabalho

- Leia o código e as instruções antes de editar. Declare premissas que afetam comportamento ou escopo.
- Faça a menor mudança suficiente. Reutilize padrões e dependências existentes.
- Não invente fatos do negócio: números, resultados, depoimentos, serviços ou contatos. Item sem fonte vira pendência em `PRODUCT.md`.
- Interface em português do Brasil, mobile first, acessível.
- Sem login, pagamentos ou coleta de dados no MVP.
- Rode as verificações adequadas antes de concluir. Não declare checagem que não rodou.
- Publicar, enviar mensagens a terceiros, custos e ações destrutivas exigem autorização explícita.
- Decisão ou comando que mude: atualize o documento responsável na mesma mudança (`PRODUCT.md` escopo, `docs/architecture.md` estrutura, `docs/design.md` interface, `docs/quality.md` verificações, `docs/setup.md` evidências).

## Padrões

- Limite de 350 linhas por arquivo (regra `quality/max-lines`).
- Conteúdo dos negócios em arquivos de dados tipados em `src/content/` quando existirem, não espalhado em JSX.
- Consulte documentação oficial atual (Context7 se disponível) antes de usar APIs do Next.js; esta versão difere do conhecimento prévio.
- Se surgir persistência, usar Drizzle + PostgreSQL conforme o toolkit e registrar em `PRODUCT.md` e `docs/architecture.md`.

## Skills instaladas (`.claude/skills/`, ver `skills-lock.json`)

`vercel-react-best-practices`, `vercel-composition-patterns`, `web-design-guidelines` (revisar UI), `writing-guidelines` (revisar textos), `vercel-react-view-transitions`, `vercel-optimize`, `deploy-to-vercel`, `vercel-cli-with-tokens`, `find-skills`, `next-dev-loop`, `next-bundle-optimizer`. Instalar uma skill não autoriza publicar ou mudar a arquitetura.

## Git

Sem hooks, bloqueios em `main` ou exigência de branch por padrão.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
