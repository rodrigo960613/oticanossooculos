# Nosso Óculos — Landing page

React + HTML + CSS + JavaScript, empacotado com esbuild.

## Como rodar
```
npm install
npm run dev      # http://localhost:8000, recompila ao salvar
npm run build    # gera a pasta public/ (é a que vai para o ar)
```

## Estrutura
```
index.html                 página base (copiada para public/ no build)
scripts/build.js           build: junta o código e copia index.html e assets/ para public/
assets/
  brand/                   logo (logo-176.webp) e favicons
  img/                     fotos do site (webp) — img/feed/ = fotos pequenas de óculos
  video/                   vídeos .mp4 + capa (poster) .webp de cada um
src/
  main.jsx · App.jsx       entrada e composição das seções
  data/store.js            WhatsApp, Instagram, endereço, mapa  ← edite aqui
  data/content.js          ofertas, passo a passo, FAQ, vídeos
  hooks/                   useInView, useScrolled, useSmoothScroll
  styles/                  tokens.css (paleta e velocidade das animações) e base.css
  components/              uma pasta por seção (.jsx + .css) e ui/ com os blocos reutilizáveis
vercel.json                cabeçalhos de cache
```

## Publicar (Vercel)
A Vercel roda `npm run build` e publica a pasta `public/` automaticamente a cada `git push`.
`public/` não vai para o git (está no `.gitignore`).

## Desempenho
- Fotos em WebP (≈ 60% menores) com largura/altura definidas e carregamento sob demanda (`loading="lazy"`)
- Foto principal com pré-carregamento (`preload` + `fetchpriority="high"`)
- Vídeos só baixam quando aparecem na tela (`preload="none"`) e pausam ao sair dela
- Cache de uma semana para `assets/` (vercel.json)

## Paleta
Sálvia `#8fa584` · Dourado `#c9a468` · Creme `#f4eee5` · Grafite `#4a4743` · Rosado `#f3e2d8`
