import React from "react";
import SectionHead from "../ui/SectionHead.jsx";
import Reveal from "../ui/Reveal.jsx";
import Button from "../ui/Button.jsx";
import ReelVideo from "../ui/ReelVideo.jsx";
import { STORE } from "../../data/store.js";
import { TOUR_VIDEO } from "../../data/content.js";
import "./Tour.css";

/** "Conheça a loja": passeio em vídeo pela fachada e pelo interior. */
export default function Tour() {
  return (
    <section className="section tour" id="conheca">
      <div className="container tour__grid">
        <div className="tour__copy">
          <SectionHead
            light
            eyebrow="Conheça a loja"
            title="Dá uma olhada por dentro"
            sub="Um passeio pela fachada, pelas bancadas e pelas prateleiras do NossoÓculos, em Messejana."
          />
          <Reveal className="tour__actions">
            <Button icon="instagram" href={STORE.instagramUrl}>Ver nosso Instagram</Button>
          </Reveal>
        </div>
        <Reveal className="tour__video">
          <ReelVideo gold square src={TOUR_VIDEO.src} poster={TOUR_VIDEO.poster} label={TOUR_VIDEO.label} />
        </Reveal>
      </div>
    </section>
  );
}
