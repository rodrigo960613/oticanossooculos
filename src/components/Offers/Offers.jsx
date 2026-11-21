import React from "react";
import Icon from "../ui/Icon.jsx";
import Reveal from "../ui/Reveal.jsx";
import SectionHead from "../ui/SectionHead.jsx";
import { OFFERS } from "../../data/content.js";
import "./Offers.css";

function OfferCard({ offer, delay }) {
  return (
    <Reveal as="article" className="offer" delay={delay}>
      <div className="offer__icon"><Icon name={offer.icon} size={30} strokeWidth={1.6} /></div>
      <h3>{offer.title}</h3>
      <p className="offer__price">
        <small>{offer.lead}</small>
        <span>{offer.price}</span>
      </p>
      <p className="offer__note">{offer.note}</p>
    </Reveal>
  );
}

export default function Offers() {
  return (
    <section className="section offers" id="ofertas">
      <div className="container">
        <SectionHead eyebrow="Preço justo, sem enrolação" title="Tudo o que você precisa para enxergar melhor" />
        <div className="offers__grid">
          {OFFERS.map((o, i) => <OfferCard key={o.title} offer={o} delay={i * 90} />)}
        </div>
      </div>
    </section>
  );
}
