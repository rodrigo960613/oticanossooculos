import React, { useEffect, useRef, useState } from "react";
import Icon from "./Icon.jsx";
import { prefersReducedMotion } from "../../hooks/useInView.js";
import "./ReelVideo.css";

/**
 * Vídeo vertical em moldura de arco: toca sozinho (mudo, em loop) quando
 * aparece na tela e pausa quando sai. Toque para pausar/continuar.
 * Com "reduzir movimento" ativo no aparelho, não toca sozinho.
 */
export default function ReelVideo({ src, poster, label, gold = false, square = false }) {
  const ref = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video || prefersReducedMotion() || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.45 }
    );
    io.observe(video);
    return () => io.disconnect();
  }, []);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    v.paused ? v.play().catch(() => {}) : v.pause();
  };

  return (
    <div className={`arch vframe ${gold ? "vframe--gold" : ""} ${square ? "vframe--square" : ""}`}>
      <button
        className={`vframe__btn ${playing ? "is-playing" : ""}`}
        onClick={toggle}
        aria-label={`${playing ? "Pausar" : "Reproduzir"} vídeo: ${label}`}
      >
        <video
          ref={ref}
          src={src}
          poster={poster}
          muted
          loop
          playsInline
          preload="none"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        />
        <span className="vframe__play"><Icon name="play" size={26} strokeWidth={1.5} /></span>
      </button>
    </div>
  );
}
