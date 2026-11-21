// Textos e listas das seções.

// Ofertas
export const OFFERS = [
  { icon: "glasses", title: "Armações", lead: "a partir de", price: "R$ 190", note: "Modelos em metal, acetato, solares e mais." },
  { icon: "check", title: "Óculos de grau completo", lead: "a partir de", price: "R$ 285", note: "Armação + lentes com receita, pronto para usar." },
  { icon: "eye", title: "Exame de vista", lead: "grátis", price: "R$ 0", note: "Na compra do seu óculos." },
];

export const STEPS = [
  { n: "01", title: "Escolha sua armação", text: "Experimente à vontade nas bancadas com espelho. Nossa equipe ajuda a achar o formato ideal." },
  { n: "02", title: "Faça o exame de vista", text: "Grátis na compra do seu óculos, feito na própria loja." },
  { n: "03", title: "Escolha as lentes", text: "Indicamos a lente certa para a sua receita e para a sua rotina." },
  { n: "04", title: "Retire e use", text: "Montamos, ajustamos ao seu rosto e você sai enxergando bem — e com estilo." },
];

export const FAQ = [
  { q: "O exame de vista é mesmo grátis?", a: "Sim. O exame de vista é gratuito na compra do seu óculos." },
  { q: "Quanto custa um óculos de grau completo?", a: "Óculos de grau completo (armação + lentes) a partir de R$ 285. Armações a partir de R$ 190. O valor final varia conforme a receita e o tipo de lente." },
  { q: "Posso levar minha receita?", a: "Pode! Se você já tem receita, é só trazer. Se não tiver, fazemos o exame de vista na loja." },
  { q: "Onde fica a loja?", a: "Na seção Localização deste site você vê o mapa com o endereço completo e pode abrir a rota no Google Maps." },
];

// Seção Coleção: os dois vídeos de produto
export const COLLECTION_VIDEOS = [
  { id: "grau", title: "Óculos de grau", text: "Armações leves, para usar o dia todo.", src: "assets/video/armacoes.mp4", poster: "assets/video/armacoes.jpg" },
  { id: "sol", title: "Óculos de sol", text: "Formatos, cores e lentes para o dia a dia.", src: "assets/video/solares.mp4", poster: "assets/video/solares.jpg" },
];

// Seção "Conheça a loja": passeio pela fachada
export const TOUR_VIDEO = { src: "assets/video/tour-loja.mp4", poster: "assets/video/tour-loja.jpg", label: "Um passeio pela loja" };

const feed = (n) => `assets/img/feed/${n}.jpg`;
