import React from "react";
import SectionHead from "../ui/SectionHead.jsx";
import Reveal from "../ui/Reveal.jsx";
import Button from "../ui/Button.jsx";
import Icon from "../ui/Icon.jsx";
import { STORE, waLink } from "../../data/store.js";
import "./Location.css";

export default function Location() {
  const { line, neighborhood, city, cep } = STORE.address;
  return (
    <section className="section location" id="localizacao">
      <div className="container location__grid">
        <div className="location__main">
          <SectionHead eyebrow="Visite a loja" title="Venha provar o seu próximo óculos" />

          <Reveal className="location__map">
            <address className="map-label">
              <span className="map-label__icon"><Icon name="pin" size={20} /></span>
              <span>
                <strong>{line}</strong>
                <small>{neighborhood} · {city} · CEP {cep}</small>
              </span>
            </address>
            <iframe
              title="Mapa — Nosso Óculos, Rua José Hipólito 152, Messejana, Fortaleza"
              src={STORE.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <Button className="map-open" size="sm" variant="sage" icon="pin" iconAfter="arrow" href={STORE.mapsLink}>Ver no Google Maps</Button>
          </Reveal>
        </div>

        <Reveal as="aside" className="location__card">
          <h3>Fale com a gente</h3>
          <ul className="contact-list">
            <li>
              <a href={waLink()} target="_blank" rel="noopener noreferrer">
                <span className="contact-list__icon"><Icon name="whatsapp" size={22} /></span>
                <span><small>WhatsApp</small>{STORE.whatsappLabel}</span>
              </a>
            </li>
            <li>
              <a href={STORE.instagramUrl} target="_blank" rel="noopener noreferrer">
                <span className="contact-list__icon"><Icon name="instagram" size={22} /></span>
                <span><small>Instagram</small>@{STORE.instagramUser}</span>
              </a>
            </li>
          </ul>
          <Button size="lg" icon="whatsapp" href={waLink("Olá! Quero agendar meu exame de vista.")}>
            Agendar exame grátis
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
