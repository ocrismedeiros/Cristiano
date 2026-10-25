# Cristiano Medeiros — site pessoal e vitrine de negócios

## Problema e objetivo

Empresários, síndicos, donos e gestores de administradoras de condomínios precisam organizar a operação, abrir novos canais de venda e usar tecnologia, mas não sabem qual solução procurar. O site apresenta Cristiano Medeiros (empresário e economista), ajuda o visitante a identificar a solução adequada e o leva ao WhatsApp da empresa certa: Valore Condomínios, Átrio Licitações, Oxigênio Educação ou Stravo IA. A Átrio é a prioridade comercial.

## Público e perfis

Empresários, síndicos, donos e gestores de administradoras de condomínios. Uso principal pelo celular. Não há perfis com acesso diferenciado.

## Fluxos da primeira versão

1. Conhecer Cristiano: visitante lê a apresentação pessoal e entende quem ele é e o que faz.
2. Identificar a solução: visitante vê uma seção por negócio e reconhece qual atende sua necessidade; a Átrio aparece em destaque.
3. Explorar serviços: visitante lê os serviços de Valore, Átrio, Oxigênio e Stravo IA.
4. Entrar em contato: visitante toca no botão de WhatsApp da empresa escolhida e abre a conversa.

## MVP (por prioridade)

1. Apresentação pessoal.
2. Seção da Átrio Licitações com destaque comercial e contato.
3. Seções da Valore Condomínios, Oxigênio Educação e Stravo IA, cada uma com serviços e contato.
4. Área de contatos com o WhatsApp de cada empresa.
5. Navegação simples, adaptada ao celular, em português do Brasil.

## Fora do escopo

Login, pagamentos, resultados inventados e depoimentos inventados. Também fora: blog, CRM, formulários com armazenamento de dados.

## Requisitos

- Interface em português do Brasil, visual profissional, mobile first.
- Acessibilidade: HTML semântico, foco visível, contraste adequado, respeito a movimento reduzido.
- Conteúdo apenas com fatos fornecidos ou confirmados por Cristiano. Nenhum número, caso de cliente ou depoimento sem fonte.
- Links de WhatsApp no formato `https://wa.me/<número>`, sem coletar dados do visitante.

## Restrições e decisões técnicas

- Next.js (App Router), TypeScript estrito, Tailwind, pnpm. Versões em `docs/setup.md`.
- Sem persistência: o MVP é conteúdo estático e links externos. Por isso Drizzle, PostgreSQL, Zod, Pino e `server-only` não foram instalados (desvio do padrão do toolkit, justificado aqui). Reavaliar quando houver formulário, painel ou armazenamento de leads.
- Sem login, pagamentos ou serviços externos.

## Premissas e decisões pendentes

| Item | Tipo | Impacto / próximo passo |
|---|---|---|
| Números de WhatsApp de cada empresa | Pendente (externa) | Sem eles os botões de contato não podem ser ligados. Cristiano informa os quatro números. |
| Lista real de serviços de cada empresa | Pendente (externa) | Texto das seções depende dela. Não inventar. |
| Texto da apresentação pessoal e foto | Pendente (externa) | Cristiano fornece ou valida o rascunho. |
| Logos e identidade visual de cada marca | Pendente (externa) | Sem logos, usar apenas nome em texto. |
| Domínio e hospedagem | Pendente (externa) | Publicação exige autorização separada. |
| Ordem das seções: Átrio primeiro após a apresentação | Premissa reversível | Reflete a prioridade comercial. |
| Paleta sóbria e profissional, uma cor de destaque para a Átrio | Premissa reversível | Ajustável em `src/app/globals.css`. |

## Critérios de aceite

- Em tela de 375 px, sem rolagem horizontal, todas as seções legíveis e botões tocáveis.
- Cada uma das quatro empresas tem seção própria e um link de WhatsApp funcional.
- A Átrio é visualmente a primeira e mais destacada entre as empresas.
- Nenhum resultado, número ou depoimento sem fonte aparece na página.
- Navegação por teclado completa e foco visível.
- `pnpm check` passa.

## Próxima entrega

Página inicial com apresentação pessoal e seção da Átrio Licitações, usando o texto confirmado por Cristiano e o botão de WhatsApp da Átrio (com o número pendente indicado). Depende de: número de WhatsApp e serviços da Átrio.

## Manutenção

Atualize este documento quando objetivo, escopo, restrições ou critérios mudarem. Decisões técnicas e evidências ficam em `docs/architecture.md` e `docs/setup.md`.
