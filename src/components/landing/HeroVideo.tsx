"use client";

import { useEffect, useRef } from "react";

// Video del hero: sin sonido, en loop y a pantalla completa detrás del título.
// En celular baja una versión recortada en vertical (más liviana); mientras carga se ve el póster.
// iOS solo reproduce solo un video si está silenciado, y React no siempre escribe el atributo
// `muted` en el HTML: por eso se fuerza acá antes de darle play.
// Con "reducir movimiento" activado queda quieto en el primer cuadro.
export default function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const aplicar = () => {
      if (reduce.matches) v.pause();
      else v.play().catch(() => {});
    };
    aplicar();
    reduce.addEventListener("change", aplicar);
    return () => reduce.removeEventListener("change", aplicar);
  }, []);

  return (
    <video
      ref={ref}
      className="v2-hero__video"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster="/landing/video/hero-poster.jpg"
      aria-hidden="true"
    >
      <source src="/landing/video/hero-celular.mp4" type="video/mp4" media="(max-width: 599px)" />
      <source src="/landing/video/hero-1080.mp4" type="video/mp4" />
    </video>
  );
}
