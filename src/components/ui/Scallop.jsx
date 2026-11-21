import React from "react";
import "./Scallop.css";

/** Borda ondulada — referência ao toldo da fachada. `position`: bottom | top */
export default function Scallop({ color = "var(--cream)", position = "bottom" }) {
  return <div className={`scallop scallop--${position}`} style={{ "--scallop": color }} aria-hidden="true" />;
}
