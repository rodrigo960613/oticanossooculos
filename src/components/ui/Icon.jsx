import React from "react";

/**
 * Conjunto de ícones próprio — todos na mesma grade de 24×24, traço de 1.75,
 * pontas e junções arredondadas, para ter o mesmo peso visual em qualquer tamanho.
 */
const PATHS = {
  glasses: (
    <>
      <circle cx="6" cy="15" r="4" />
      <circle cx="18" cy="15" r="4" />
      <path d="M14 15a2 2 0 0 0-4 0" />
      <path d="M2.5 13 5 7c.7-1.3 1.4-2 3-2" />
      <path d="M21.5 13 19 7c-.7-1.3-1.5-2-3-2" />
    </>
  ),
  check: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  eye: (
    <>
      <path d="M2.06 12.35a1 1 0 0 1 0-.7 10.75 10.75 0 0 1 19.88 0 1 1 0 0 1 0 .7 10.75 10.75 0 0 1-19.88 0" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  pin: (
    <>
      <path d="M20 10c0 5-5.54 10.19-7.4 11.8a1 1 0 0 1-1.2 0C9.54 20.19 4 15 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  instagram: (
    <>
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <path d="M17.6 6.4h.01" strokeWidth="2.6" />
    </>
  ),
  whatsapp: (
    <g transform="translate(2 2) scale(1.25)">
      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.601 2.326ZM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.501C1.409 4.291 4.370 1.331 8.009 1.331a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.003 3.635-2.966 6.599-6.603 6.599Zm3.625-4.95c-.198-.099-1.173-.578-1.355-.645-.182-.066-.315-.099-.446.1-.132.198-.511.645-.626.777-.115.132-.23.148-.428.05-.198-.099-.837-.309-1.595-.986-.59-.526-.988-1.175-1.104-1.374-.115-.198-.012-.305.087-.403.089-.088.198-.23.297-.345.099-.115.132-.198.198-.33.066-.132.033-.248-.017-.347-.05-.099-.447-1.077-.612-1.474-.16-.386-.324-.334-.446-.34-.115-.007-.248-.007-.38-.007a.729.729 0 0 0-.528.248c-.181.198-.69.675-.69 1.644 0 .97.707 1.907.806 2.039.099.132 1.391 2.123 3.369 2.977.471.203.839.324 1.125.415.473.15.903.129 1.243.078.379-.057 1.173-.479 1.338-.942.165-.463.165-.86.115-.942-.05-.083-.182-.132-.379-.231Z" />
    </g>
  ),
  arrow: (
    <>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </>
  ),
  up: (
    <>
      <path d="M12 19V5" />
      <path d="m5 12 7-7 7 7" />
    </>
  ),
  plus: (
    <>
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </>
  ),
  play: <path d="M7 4.5v15a1 1 0 0 0 1.5.86l12-7.5a1 1 0 0 0 0-1.72l-12-7.5A1 1 0 0 0 7 4.5Z" />,
};

export default function Icon({ name, size = 24, strokeWidth = 1.75, className = "", title }) {
  return (
    <svg
      className={`icon ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={name === "whatsapp" ? "currentColor" : "none"}
      stroke={name === "whatsapp" ? "none" : "currentColor"}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      {PATHS[name]}
    </svg>
  );
}
