# Código e arquitetura

## Stack real

Next.js 16.4.3 (App Router, Turbopack, Cache Components e Partial Prefetching ativados pelo scaffold), React 19.3, TypeScript 5.9 estrito, Tailwind 4.3, pnpm 10.28. Utilitário `cn` (clsx + tailwind-merge). Testes com Vitest 5 em Node. Sem banco, ORM ou autenticação. Versões exatas em `pnpm-lock.yaml`.

## Mapa do código

```text
src/app/          layout.tsx (lang pt-BR, metadados), page.tsx (página inicial), globals.css
src/lib/          utils.ts (cn) e teste
eslint-rules/     regras locais e baseline do toolkit
scripts/          verify-quality-rules.mjs (autoverificação das regras)
.claude/skills/   skills locais; skills-lock.json registra origem
```

A página inicial é um marcador mínimo; as seções do MVP ainda não foram implementadas.

## Fronteiras e fluxo

Conteúdo estático renderizado no servidor, sem entrada de usuário nem estado remoto. Contatos serão links externos `wa.me`. Ao surgir conteúdo dos negócios, ele ficará em dados tipados em `src/content/` (plano, não implementado).

## Dados e migrações

Sem persistência. Drizzle/PostgreSQL, Zod, Pino e `server-only` do padrão do toolkit foram omitidos porque o MVP não tem dados nem lógica de servidor. Reavaliar com formulário de contato, captura de leads ou painel.

## Decisões

| Decisão | Motivo | Revisitar quando |
|---|---|---|
| Sem banco/ORM | MVP estático (PRODUCT.md) | Houver coleta ou armazenamento de dados |
| Perfil de lint leve do toolkit | Sem ORM/logger | Surgir Drizzle ou logger de servidor |
| Cache Components do scaffold mantido | Build estático funciona; padrão do create-next-app 16.4.3 (2026-10-25) | Causar atrito com páginas dinâmicas |
| Skills só para Claude Code | Cliente em uso | Outro cliente for adotado |

## Manutenção

Atualize ao mudar diretórios, dependências relevantes, contratos ou fronteiras.
