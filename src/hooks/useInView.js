import { useEffect, useRef, useState } from "react";

export const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Devolve [ref, visto]. `visto` vira true uma única vez, quando o elemento
 * entra na tela. Sem IntersectionObserver ou com "reduzir movimento", já nasce true.
 */
export default function useInView({ threshold = 0.12, rootMargin = "0px 0px -6% 0px" } = {}) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(() => prefersReducedMotion() || !("IntersectionObserver" in window));

  useEffect(() => {
    if (seen || !ref.current) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [seen, threshold, rootMargin]);

  return [ref, seen];
}
