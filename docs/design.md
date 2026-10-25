# Design e acessibilidade

## Direção

Público: empresários, síndicos e gestores de administradoras, majoritariamente no celular. Português do Brasil. Tom profissional e sóbrio, com pouca decoração e uma cor de destaque reservada à Átrio (prioridade comercial). Isto é direção; ainda não implementada além do marcador inicial.

## Sistema existente

Tailwind 4 com tokens `--background` e `--foreground` e tema claro/escuro em `src/app/globals.css`. Fonte Geist via `next/font`. Sem biblioteca de componentes. Fonte de verdade das cores: `globals.css`.

## Interação

Use HTML semântico, navegação por teclado, foco visível e contraste adequado. Rotule controles. Botões de WhatsApp com texto claro e alvo de toque confortável. Respeite `prefers-reduced-motion`.

## Layout e revisão

Mobile first; validar em 375 px sem rolagem horizontal e em desktop. Estados vazios, de erro e de carregamento não se aplicam ao MVP estático. Nenhuma revisão de interface foi feita ainda; use `web-design-guidelines` quando as seções existirem.

## Manutenção

Mudanças visuais atualizam o token/componente e esta orientação quando uma regra mudar.
