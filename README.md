# Grupo JSO — site em Next.js

Novo site do Grupo JSO (conteúdo em espanhol), construído com **Next.js 16 (App Router) + React 19 + TypeScript**, rodando em Node.js.
Todo o texto, logos e fotos foram extraídos do site atual (grupojso.com, feito em Wix).

## Como rodar

```bash
npm install
npm run dev          # http://localhost:3000
```

Produção:

```bash
npm run build
npm start
```

Requer Node 20.9 ou superior.

## Estrutura

| Caminho | O que é |
|---|---|
| `lib/data.ts` | **Todo o conteúdo do site**: textos, endereço, e-mail, as 3 linhas de fabricação e os 12 projetos com suas fotos. Editar aqui atualiza o site inteiro. |
| `app/page.tsx` | Home: hero com slideshow, Nosotros, Fabricación, Números, Proyectos e Contacto |
| `app/proyectos/page.tsx` | Grade com todas as categorias de projeto |
| `app/proyectos/[slug]/page.tsx` | Galeria de cada projeto, com lightbox (teclado ← → Esc) |
| `app/api/contacto/route.ts` | Endpoint do formulário de contato (validação + anti-spam + envio SMTP) |
| `app/globals.css` | Todo o design (tokens de cor e tipografia no topo) |
| `components/` | Header, Hero, Galeria, Formulário, Footer etc. |

## Imagens

Por padrão as imagens são carregadas do CDN do Wix (`static.wixstatic.com`) e otimizadas pelo `next/image` (AVIF/WebP, tamanhos responsivos).

Para não depender mais do Wix (recomendado antes de desligar o site antigo):

```bash
npm run descargar-imagenes
```

O script baixa todas as imagens para `public/img/` e troca automaticamente a origem em `lib/data.ts`.

## Formulário de contato

Copie `.env.example` para `.env.local` e preencha os dados SMTP. Sem SMTP configurado, as mensagens aparecem no log do servidor (útil para testar).

## SEO e migração

- Redirecionamentos 301 das URLs antigas do Wix (`/proyecto-1`, `/montajes-comerciales`, `/cocinas`…) para as novas (`/proyectos/muro-cortina`, `/proyectos/retail`…), configurados em `next.config.ts`.
- `sitemap.xml`, `robots.txt`, Open Graph e dados estruturados (`LocalBusiness`) gerados automaticamente.

## Deploy

Funciona direto na Vercel, ou em qualquer servidor Node (`npm run build && npm start`, de preferência atrás de PM2/Nginx).

## Pendências de conteúdo

- **Números JSO**: o site antigo mostra os números reais como imagem (infográfico). Na nova seção eles continuam como imagem, e os 4 cartões usam apenas dados verificáveis do próprio site. Se a empresa passar os números (anos, obras, países, funcionários), basta trocá-los em `app/page.tsx` para ficarem em texto.
- **Telefone**: o site atual não exibe telefone; dá para incluir em `lib/data.ts`.
- **Textos dos projetos**: as descrições curtas de cada categoria foram redigidas para o novo site; vale uma revisão do cliente.
