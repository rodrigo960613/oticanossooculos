import React from "react";
import "./Logo.css";

/**
 * Logo NossoÓculos: o selo redondo (óculos + sorriso) seguido do nome.
 * `stacked` empilha o selo sobre o nome.
 */
export function LogoMark({ size = 52, className = "" }) {
  return (
    <img
      className={`logo__mark ${className}`}
      src="assets/brand/logo-256.png"
      width={size}
      height={size}
      alt="Logo NossoÓculos"
      decoding="async"
    />
  );
}

export default function Logo({ stacked = false, size = 52, className = "" }) {
  return (
    <span className={`logo ${stacked ? "logo--stacked" : ""} ${className}`}>
      <LogoMark size={size} />
      <span className="logo__word" aria-hidden="true">NossoÓculos</span>
    </span>
  );
}
