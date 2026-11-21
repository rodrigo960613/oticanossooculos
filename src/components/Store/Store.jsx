import React from "react";
import Button from "../ui/Button.jsx";
import Reveal from "../ui/Reveal.jsx";
import Scallop from "../ui/Scallop.jsx";
import "./Store.css";

const POINTS = [
  "Experimente quantos modelos quiser",
  "Atendimento próximo e sem pressa",
  "Ajuste e entrega com cuidado",
];

export default function Store() {
  return (
    <section className="section store" id="loja">
      <Scallop color="var(--charcoal)" position="top" />
      <div className="container store__grid">
        <Reveal className="store__photos">
          <div className="arch store__main">
            <img src="assets/img/salao.webp" alt="Interior da loja com bancadas, espelhos e balões" width="552" height="366" loading="lazy" decoding="async" />
          </div>
          <div className="arch store__side">
            <img src="assets/img/feed/cliente-parede.webp" alt="Cliente olhando a parede de óculos de sol" width="266" height="306" loading="lazy" decoding="async" />
          </div>
        </Reveal>

        <div className="store__copy">
          <Reveal as="p" className="eyebrow">A nossa casa</Reveal>
          <Reveal as="h2">Uma loja pensada para você se sentir à vontade</Reveal>
          <Reveal as="p">
            Bancadas amplas, espelhos, prateleiras iluminadas e uma equipe que escuta antes de indicar.
            Aqui você prova com calma, compara e escolhe o óculos que realmente combina com o seu dia a dia.
          </Reveal>
          <Reveal as="ul" className="store__points">
            {POINTS.map((t) => <li key={t}>{t}</li>)}
          </Reveal>
          <Reveal>
            <Button variant="cream" iconAfter="arrow" href="#localizacao">Como chegar</Button>
          </Reveal>
        </div>
      </div>
      <Scallop color="var(--cream)" />
    </section>
  );
}
