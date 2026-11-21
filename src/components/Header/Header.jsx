import React, { useState } from "react";
import Logo from "../ui/Logo.jsx";
import Button from "../ui/Button.jsx";
import useScrolled from "../../hooks/useScrolled.js";
import { waLink } from "../../data/store.js";
import "./Header.css";

const LINKS = [
  ["#ofertas", "Ofertas"],
  ["#colecao", "Coleção"],
  ["#conheca", "Conheça a loja"],
  ["#duvidas", "Dúvidas"],
  ["#localizacao", "Localização"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled();

  return (
    <header className={`header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container header__inner">
        <a href="#topo" className="header__logo" aria-label="Nosso Óculos — início">
          <Logo size={44} />
        </a>

        <nav className={`nav ${open ? "is-open" : ""}`} aria-label="Principal">
          {LINKS.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <Button className="nav__cta" href={waLink()} icon="whatsapp">Fale conosco</Button>
        </nav>

        <button
          className={`burger ${open ? "is-open" : ""}`}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
