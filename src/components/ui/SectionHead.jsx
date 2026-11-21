import React from "react";
import Reveal from "./Reveal.jsx";
import "./SectionHead.css";

/** Cabeçalho padrão de seção: sobretítulo, título e subtítulo opcional. */
export default function SectionHead({ eyebrow, title, sub, light = false, className = "" }) {
  return (
    <Reveal as="header" className={`section-head ${light ? "section-head--light" : ""} ${className}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {sub && <p className="section-head__sub">{sub}</p>}
    </Reveal>
  );
}
