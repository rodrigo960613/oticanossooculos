import React, { useState } from "react";
import SectionHead from "../ui/SectionHead.jsx";
import Reveal from "../ui/Reveal.jsx";
import Icon from "../ui/Icon.jsx";
import { FAQ } from "../../data/content.js";
import "./Faq.css";

function FaqItem({ item, open, onToggle, delay, id }) {
  return (
    <Reveal className={`faq__item ${open ? "is-open" : ""}`} delay={delay}>
      <button aria-expanded={open} aria-controls={id} onClick={onToggle}>
        {item.q}
        <Icon name="plus" size={22} />
      </button>
      <div className="faq__a" id={id} role="region"><p>{item.a}</p></div>
    </Reveal>
  );
}

export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section faq" id="duvidas">
      <div className="container faq__grid">
        <SectionHead eyebrow="Dúvidas frequentes" title="Ficou com alguma pergunta?" sub="Se não encontrou aqui, é só chamar no WhatsApp." />
        <div className="faq__list">
          {FAQ.map((f, i) => (
            <FaqItem key={f.q} item={f} open={open === i} delay={i * 60} id={`faq-answer-${i}`} onToggle={() => setOpen(open === i ? -1 : i)} />
          ))}
        </div>
      </div>
    </section>
  );
}
