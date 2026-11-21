import { useEffect } from "react";
import { prefersReducedMotion } from "./useInView.js";

/**
 * Rolagem suave com inércia para mouse/trackpad (a roda do mouse "desliza" até
 * o destino em vez de pular) e deslize suave nos links âncora (#secao).
 *
 * - Celulares/tablets (toque) e "reduzir movimento" usam a rolagem nativa.
 * - Áreas com rolagem própria (ex.: carrossel) continuam normais.
 * - Barra de rolagem, teclado e zoom (Ctrl + roda) não são afetados.
 */
export default function useSmoothScroll({ wheelEase = 0.085, anchorEase = 0.07 } = {}) {
  useEffect(() => {
    if (prefersReducedMotion()) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const maxScroll = () => document.documentElement.scrollHeight - window.innerHeight;
    const clamp = (v) => Math.max(0, Math.min(maxScroll(), v));

    let current = window.scrollY;
    let target = current;
    let ease = wheelEase;
    let raf = 0;
    let last = 0;

    const step = (now) => {
      const dt = Math.min(now - last, 50) || 16.67;
      last = now;
      // suavização independente da taxa de quadros
      const k = 1 - Math.pow(1 - ease, dt / 16.67);
      current += (target - current) * k;
      if (Math.abs(target - current) < 0.4) {
        current = target;
        window.scrollTo(0, current);
        raf = 0;
        return;
      }
      window.scrollTo(0, current);
      raf = requestAnimationFrame(step);
    };
    const run = () => {
      if (!raf) {
        last = performance.now();
        raf = requestAnimationFrame(step);
      }
    };

    const scrollableAncestor = (el) => {
      while (el && el !== document.body && el !== document.documentElement) {
        const s = getComputedStyle(el);
        if (/(auto|scroll)/.test(s.overflowY) && el.scrollHeight > el.clientHeight + 1) return true;
        el = el.parentElement;
      }
      return false;
    };

    const onWheel = (e) => {
      if (e.ctrlKey || e.defaultPrevented) return;
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
      if (scrollableAncestor(e.target)) return;
      let dy = e.deltaY;
      if (e.deltaMode === 1) dy *= 16;
      else if (e.deltaMode === 2) dy *= window.innerHeight;
      const next = clamp((raf ? target : window.scrollY) + dy);
      // nas pontas, deixa o navegador cuidar
      if (next === target && !raf && (window.scrollY <= 0 || window.scrollY >= maxScroll())) return;
      e.preventDefault();
      if (!raf) current = window.scrollY;
      target = next;
      ease = wheelEase;
      run();
    };

    // se a rolagem mudou por outro meio (barra, teclado), sincroniza
    const onScroll = () => {
      if (!raf && Math.abs(window.scrollY - current) > 1) {
        current = target = window.scrollY;
      }
    };

    const onClick = (e) => {
      const a = e.target.closest && e.target.closest('a[href^="#"]');
      if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey) return;
      const id = a.getAttribute("href");
      if (id.length < 2) return;
      const el = document.getElementById(decodeURIComponent(id.slice(1)));
      if (!el) return;
      e.preventDefault();
      const header = document.querySelector(".header");
      const offset = header ? header.offsetHeight - 1 : 0;
      if (!raf) current = window.scrollY;
      target = clamp(el.getBoundingClientRect().top + window.scrollY - offset);
      ease = anchorEase;
      run();
      history.replaceState(null, "", id);
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("click", onClick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", onClick);
    };
  }, [wheelEase, anchorEase]);
}
