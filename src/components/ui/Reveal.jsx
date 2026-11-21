import React from "react";
import useInView from "../../hooks/useInView.js";
import "./Reveal.css";

/** Faz o conteúdo surgir suavemente quando entra na tela. */
export default function Reveal({ as: Tag = "div", delay = 0, className = "", style, children, ...rest }) {
  const [ref, seen] = useInView();
  return (
    <Tag
      ref={ref}
      className={`reveal ${seen ? "is-in" : ""} ${className}`}
      style={{ "--d": `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
