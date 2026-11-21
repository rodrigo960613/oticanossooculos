import React from "react";
import SectionHead from "../ui/SectionHead.jsx";
import Reveal from "../ui/Reveal.jsx";
import { STEPS } from "../../data/content.js";
import "./Steps.css";

export default function Steps() {
  return (
    <section className="section steps" id="como-funciona">
      <div className="container">
        <SectionHead eyebrow="Passo a passo" title="Do exame ao óculos novo, num só lugar" />
        <ol className="steps__list">
          {STEPS.map((s, i) => (
            <Reveal as="li" key={s.n} className="step" delay={i * 90}>
              <span className="step__n">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
