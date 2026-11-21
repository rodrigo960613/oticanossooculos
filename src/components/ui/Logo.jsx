import React from "react";
import "./Logo.css";

/**
 * Logo Nosso Óculos: o selo redondo (óculos + sorriso) seguido do nome.
 * `stacked` empilha o selo sobre o nome.
 */
export function LogoMark({ size = 52, className = "" }) {
  return (
    <img
      className={`logo__mark ${className}`}
      src="assets/brand/logo-176.webp"
      width={size}
      height={size}
      alt="Logo Nosso Óculos"
      decoding="async"
    />
  );
}

export default function Logo({ stacked = false, size = 52, className = "" }) {
  return (
    <span className={`logo ${stacked ? "logo--stacked" : ""} ${className}`}>
      <LogoMark size={size} />
      <span className="logo__word" aria-hidden="true">Nosso Óculos</span>
    </span>
  );
}
