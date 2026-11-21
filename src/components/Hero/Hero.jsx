import React from "react";
import Button from "../ui/Button.jsx";
import Icon from "../ui/Icon.jsx";
import Reveal from "../ui/Reveal.jsx";
import Scallop from "../ui/Scallop.jsx";
import { STORE, waLink } from "../../data/store.js";
import "./Hero.css";

const FACTS = [
  { icon: "pin", text: `${STORE.address.neighborhood}, Fortaleza` },
  { icon: "instagram", text: `@${STORE.instagramUser}` },
  { icon: "glasses", text: "Prove à vontade na loja" },
];

export default function Hero() {
  return (
    <section className="hero" id="topo">
      <div className="container hero__grid">
        <div className="hero__copy">
          <Reveal as="p" className="eyebrow">Ótica · Armações · Lentes · Exame de vista</Reveal>
          <Reveal as="h1">
            Enxergue bem,<br />
            <em>com a cara</em> que é sua.
          </Reveal>
          <Reveal as="p" className="hero__lead">
            Armações a partir de <strong>R$ 190</strong>, óculos de grau completo a partir de{" "}
            <strong>R$ 285</strong> e <strong>exame de vista grátis</strong> na compra do seu óculos.
          </Reveal>
          <Reveal className="hero__actions">
            <Button size="lg" href={waLink("Olá! Quero agendar meu exame de vista.")} icon="whatsapp">
              Agendar exame grátis
            </Button>
            <Button size="lg" variant="ghost" href="#colecao">Ver coleção</Button>
          </Reveal>
          <Reveal as="ul" className="hero__facts">
            {FACTS.map((f) => (
              <li key={f.text}><Icon name={f.icon} size={20} /> {f.text}</li>
            ))}
          </Reveal>
        </div>

        <Reveal className="hero__visual">
          <div className="arch hero__main">
            <img src="assets/img/fachada.webp" alt="Fachada da loja Nosso Óculos, verde-sálvia com letreiro dourado" width="760" height="1219" fetchpriority="high" decoding="async" style={{ objectPosition: "50% 22%" }} />
          </div>
          <div className="arch hero__small">
            <img src="assets/img/feed/solar-podio.webp" alt="Óculos de sol geométrico sobre pódio rosado" width="269" height="294" decoding="async" />
          </div>
          <div className="hero__badge">
            <span>Exame de vista</span>
            <strong>grátis</strong>
            <small>na compra do seu óculos</small>
          </div>
        </Reveal>
      </div>
      <Scallop color="var(--cream)" />
    </section>
  );
}
