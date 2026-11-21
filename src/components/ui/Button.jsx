import React from "react";
import Icon from "./Icon.jsx";
import "./Button.css";

/**
 * Botão/link padronizado.
 * variant: gold | ghost | cream | sage      size: md | lg
 * Com `href` vira <a> (links http abrem em nova aba); sem `href`, <button>.
 */
export default function Button({
  href, variant = "gold", size = "md", icon, iconAfter, children, className = "", ...rest
}) {
  const cls = `btn btn--${variant} btn--${size} ${className}`;
  const content = (
    <>
      {icon && <Icon name={icon} size={size === "lg" ? 22 : 20} />}
      <span>{children}</span>
      {iconAfter && <Icon name={iconAfter} size={18} className="btn__after" />}
    </>
  );
  if (href) {
    const external = /^https?:/.test(href);
    return (
      <a
        className={cls}
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...rest}
      >
        {content}
      </a>
    );
  }
  return <button className={cls} type="button" {...rest}>{content}</button>;
}
