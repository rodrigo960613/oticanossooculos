import React from "react";
import Icon from "../ui/Icon.jsx";
import useScrolled from "../../hooks/useScrolled.js";
import { waLink } from "../../data/store.js";
import "./FloatingWhatsApp.css";

/** Botões flutuantes: seta "voltar ao início" (aparece ao rolar) acima do WhatsApp. */
export default function FloatingWhatsApp() {
  const scrolled = useScrolled(400);
  return (
    <div className="fab-stack">
      <a className={`totop${scrolled ? " is-visible" : ""}`} href="#topo" aria-label="Voltar ao início da página" tabIndex={scrolled ? 0 : -1}>
        <Icon name="up" size={22} strokeWidth={2.2} />
      </a>
      <a className="fab" href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="Falar no WhatsApp">
        <Icon name="whatsapp" size={30} strokeWidth={1.7} />
      </a>
    </div>
  );
}
