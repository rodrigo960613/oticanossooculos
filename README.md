# NossoÓculos — Landing page

React + HTML + CSS + JavaScript. Abra `index.html` no navegador (o `dist/` já vem compilado).

## Estrutura
```
index.html                 página base (carrega dist/app.css e dist/app.js)
assets/                    brand/ (logo e favicons), img/, img/feed/, video/
                           extras/ = fotos de óculos do feed (fora do site, guardadas)
dist/                      gerado por `npm run build`
src/
  main.jsx · App.jsx       entrada e composição das seções
  data/
    store.js               WhatsApp, Instagram, endereço, mapa  ← edite aqui
    content.js             ofertas, passo a passo, FAQ, vídeos da coleção e da loja, fotos
  hooks/                   useInView (animação de entrada), useScrolled (header)
  styles/                  tokens.css (paleta) e base.css
  components/
    ui/                    Button, Icon, Logo, ReelVideo, Reveal, Scallop, SectionHead
    Header/ Hero/ Offers/ Collection/ Tour/ People/ Store/
    Steps/ Cta/ Faq/ Location/ Footer/ FloatingWhatsApp/
                           (cada pasta tem seu .jsx e seu .css)
```

## Como editar
- **Contatos e endereço:** `src/data/store.js`
- **Vídeos da coleção (sol e grau):** troque os arquivos em `assets/video/` ou edite `COLLECTION_VIDEOS` (`src/data/content.js`)
- **Vídeo da loja:** `TOUR_VIDEO` no mesmo arquivo
- **Logo e favicon:** `assets/brand/` (mesma imagem, gerada a partir da logo original)

## Recompilar após mexer em `src/`
```
npm install
npm run build
```
Para desenvolver com recarga automática: `npm run dev`.

## Paleta
Sálvia `#8fa584` · Dourado `#c9a468` · Creme `#f4eee5` · Grafite `#4a4743` · Rosado `#f3e2d8`
