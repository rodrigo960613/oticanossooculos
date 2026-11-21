// Dados da loja — edite aqui e todo o site se atualiza.
const ADDRESS_LINE = "Rua José Hipólito, 152";
const NEIGHBORHOOD = "Messejana";
const CITY = "Fortaleza/CE";
const CEP = "60871-170";

// Ponto exato da loja no Google Maps (do link compartilhado pela loja)
const LAT = -3.8328069;
const LNG = -38.4939136;
const MAPS_SHORT_LINK = "https://maps.app.goo.gl/PyMAqP4hxtx2bWxy8";

export const STORE = {
  name: "Nosso Óculos",
  whatsapp: "5585996949845",
  whatsappLabel: "(85) 99694-9845",
  instagramUser: "usenossooculos",
  instagramUrl: "https://www.instagram.com/usenossooculos/",
  address: { line: ADDRESS_LINE, neighborhood: NEIGHBORHOOD, city: CITY, cep: CEP },
  addressFull: `${ADDRESS_LINE} — ${NEIGHBORHOOD}, ${CITY}, CEP ${CEP}`,
  mapsEmbed: `https://maps.google.com/maps?q=${LAT},${LNG}&z=17&hl=pt-BR&output=embed`,
  mapsLink: MAPS_SHORT_LINK,
};

export const waLink = (msg = "Olá! Vim pelo site do Nosso Óculos e gostaria de mais informações.") =>
  `https://wa.me/${STORE.whatsapp}?text=${encodeURIComponent(msg)}`;
