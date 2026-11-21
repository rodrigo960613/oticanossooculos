import React, { useEffect, useState } from "react";
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
  const [active, setActive] = useState("#topo");

  useEffect(() => {
    const sections = LINKS.map(([href]) => document.querySelector(href)).filter(Boolean);
    sections.push(document.querySelector("#topo"));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-35% 0px -55%", threshold: [0, 0.1, 0.3] }
    );

    sections.forEach((section) => observer.observe(section));
    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      observer.disconnect();
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  return (
    <header className={`header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container header__inner">
        <a href="#topo" className="header__logo" aria-label="Nosso Óculos — início">
          <Logo size={44} />
        </a>

        <nav id="main-navigation" className={`nav ${open ? "is-open" : ""}`} aria-label="Principal">
          {LINKS.map(([href, label]) => (
            <a key={href} href={href} className={active === href ? "is-active" : ""} aria-current={active === href ? "page" : undefined} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <Button className="nav__cta" href={waLink()} icon="whatsapp">Fale conosco</Button>
        </nav>

        <button
          className={`burger ${open ? "is-open" : ""}`}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
