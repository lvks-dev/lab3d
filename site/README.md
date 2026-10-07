# Lab3D — Site institucional (Fase A)

Página única para dentistas e consultórios. Escopo e limites: `../../.lvks/decisions/008-lab3d-fases.md`.
Tokens de marca: `../../.lvks/products/lab3d-brand.md` (replicados em `src/styles/globals.css`).

## Comandos

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # tsc -b && vite build → dist/
npm run preview
npm run og         # regenera public/og-image.png a partir de scripts/og-image.html (requer Chrome local)
```

## Deploy (Cloudflare Pages)

- Root directory: `site`
- Build command: `npm run build`
- Output directory: `dist`

Página única sem roteamento no cliente: não há fallback `404.html` nem `_redirects`.

## Pendências

- Domínio definitivo: atualizar `index.html` (canonical, `og:url`, `og:image`) e `SITE.url` em
  `src/lib/constants.ts`. Hoje apontam para `lab3d.pages.dev` (provisório).
- Textos de serviços são propositalmente genéricos até o levantamento de escopo com Ana Beatriz.
