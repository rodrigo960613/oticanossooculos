import React from "react";
import Logo from "../ui/Logo.jsx";
import Icon from "../ui/Icon.jsx";
import Scallop from "../ui/Scallop.jsx";
import { STORE } from "../../data/store.js";
import "./Footer.css";

const LINKS = [
  ["#ofertas", "Ofertas"],
  ["#colecao", "Coleção"],
  ["#conheca", "Conheça a loja"],
  ["#duvidas", "Dúvidas"],
  ["#localizacao", "Localização"],
];

export default function Footer() {
  return (
    <footer className="footer">
      <Scallop color="var(--cream)" position="top" />
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo stacked size={88} />
          <p>Ótica com atendimento próximo, preço justo e muito estilo.</p>
        </div>
        <nav aria-label="Rodapé">
          <h3>Navegue</h3>
          <ul>{LINKS.map(([href, label]) => <li key={href}><a className="footer__link" href={href}>{label}</a></li>)}</ul>
        </nav>
        <div>
          <h3>Onde estamos</h3>
          <ul>
            <li>
              <a className="footer__link footer__link--address" href={STORE.mapsLink} target="_blank" rel="noopener noreferrer">
                <Icon name="pin" size={20} />
                <span>
                  {STORE.address.line}
                  <small>{STORE.address.neighborhood} · {STORE.address.city} · CEP {STORE.address.cep}</small>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="container footer__copy">© {new Date().getFullYear()} Nosso Óculos. Todos os direitos reservados.</p>
    </footer>
  );
}
