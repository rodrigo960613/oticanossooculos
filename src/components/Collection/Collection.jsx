import React from "react";
import SectionHead from "../ui/SectionHead.jsx";
import Reveal from "../ui/Reveal.jsx";
import Button from "../ui/Button.jsx";
import ReelVideo from "../ui/ReelVideo.jsx";
import { COLLECTION_VIDEOS } from "../../data/content.js";
import { waLink } from "../../data/store.js";
import "./Collection.css";

/** Coleção: um vídeo de óculos de sol e um de óculos de grau. */
export default function Collection() {
  return (
    <section className="section collection" id="colecao">
      <div className="container">
        <SectionHead
          eyebrow="Nossa coleção"
          title="Um estilo para cada olhar"
          sub="Veja de perto os óculos de sol e de grau da nossa vitrine e chame no WhatsApp para saber os modelos disponíveis."
        />

        <div className="collection__videos">
          {COLLECTION_VIDEOS.map((v, i) => (
            <Reveal key={v.id} as="article" delay={i * 110} className="collection__item">
              <ReelVideo square src={v.src} poster={v.poster} label={v.title} />
              <h3>{v.title}</h3>
              <p>{v.text}</p>
              <Button
                variant="sage"
                icon="whatsapp"
                href={waLink(`Olá! Vi os ${v.title.toLowerCase()} no site e quero saber os modelos disponíveis.`)}
              >
                Ver modelos
              </Button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
