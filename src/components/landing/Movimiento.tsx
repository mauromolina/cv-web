"use client";

import { useEffect } from "react";

/* Movimiento: una entrada suave, una vez por carga, siempre desde un estado visible.
   - [data-entra]: sube 12px y pasa de 0.6 a 1, con 40ms entre hermanos.
   Lo que ya está en pantalla al cargar no espera nada.
   (El punto final de los títulos queda quieto: sin animación de caída.) */
export default function Movimiento() {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const vh = window.innerHeight || 800;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const abajo = (el: Element) => el.getBoundingClientRect().top > vh * 0.9;

    const entradas = Array.from(document.querySelectorAll<HTMLElement>(".cvl [data-entra]"));
    entradas.forEach((el) => abajo(el) && el.classList.add("entra", "pre"));

    const io = new IntersectionObserver(
      (lista) => {
        let n = 0;
        lista.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          io.unobserve(el);
          el.style.transitionDelay = reduce ? "0ms" : n++ * 40 + "ms";
          el.classList.remove("pre");
        });
      },
      { rootMargin: "0px 0px -18% 0px", threshold: 0 },
    );
    entradas.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  return null;
}
