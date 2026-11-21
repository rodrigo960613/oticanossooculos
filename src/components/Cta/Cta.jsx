import React from "react";
import Logo from "../ui/Logo.jsx";
import Button from "../ui/Button.jsx";
import Reveal from "../ui/Reveal.jsx";
import { waLink } from "../../data/store.js";
import "./Cta.css";

export default function Cta() {
  return (
    <section className="cta">
      <Reveal className="container cta__inner">
        <Logo stacked size={96} />
        <div>
          <h2>Seu exame de vista é por nossa conta</h2>
          <p>Compre seu óculos no NossoÓculos e faça o exame sem pagar nada por ele.</p>
        </div>
        <Button size="lg" icon="whatsapp" href={waLink("Olá! Quero agendar meu exame de vista grátis.")}>
          Agendar agora
        </Button>
      </Reveal>
    </section>
  );
}
