# Preparação local

## Pré-requisitos

Node.js 22 ou superior (validado com 22.22.0) e pnpm 10 (validado com 10.28.0). Git.

## Primeira execução

```bash
pnpm install
pnpm dev
```

Abra http://localhost:3000. Não há variáveis obrigatórias; `.env.example` só documenta isso.

## Banco de dados

Não se aplica: o MVP não tem persistência.

## Verificar

`pnpm check` roda lint, tipos, lint tipado, autoverificação das regras, testes e build. Não precisa de credenciais nem rede além da instalação de pacotes e do download da fonte Geist no build.

## Agentes

Leia [AGENTS.md](../AGENTS.md); [CLAUDE.md](../CLAUDE.md) importa o mesmo conteúdo. Skills e integrações em [setup.md](setup.md).

## Problemas conhecidos

Nenhum observado.
