"use client";

import { useEffect, useRef, useState } from "react";
import LogoCV from "./LogoCV";

const LINKS = [
  { href: "#horarios", texto: "Horarios" },
  { href: "#reuniones", texto: "Reuniones" },
  { href: "#nosotros", texto: "Nosotros" },
  { href: "#como-llegar", texto: "Cómo llegar" },
  { href: "#app", texto: "App" },
];

// Barra sobre el hero, alineada a la derecha. Cuando el hero sale de debajo de ella pasa a material.
// En celular los links se esconden detrás de un menú hamburguesa que se despliega debajo de la barra.
export default function Nav() {
  const [solida, setSolida] = useState(false);
  const [abierto, setAbierto] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const botonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const hero = document.getElementById("inicio");
    if (!hero || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entradas) => setSolida(!entradas[entradas.length - 1].isIntersecting),
      { rootMargin: "-84px 0px 0px 0px", threshold: 0 },
    );
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  // Con el menú abierto: Escape o un toque afuera lo cierran.
  useEffect(() => {
    if (!abierto) return;
    const tecla = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setAbierto(false);
        botonRef.current?.focus();
      }
    };
    const afuera = (e: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setAbierto(false);
    };
    document.addEventListener("keydown", tecla);
    document.addEventListener("pointerdown", afuera);
    return () => {
      document.removeEventListener("keydown", tecla);
      document.removeEventListener("pointerdown", afuera);
    };
  }, [abierto]);

  return (
    <div className="v2-nav-wrap">
      <nav
        ref={navRef}
        className={"v2-nav" + (solida || abierto ? " solida" : "") + (abierto ? " abierta" : "")}
        aria-label="Principal"
      >
        <a className="marca" href="#inicio" aria-label="Cristo Viviente, inicio">
          <LogoCV />
          <span>Cristo Viviente</span>
        </a>
        <div className="v2-nav__der">
          <ul className="v2-nav__links">
            {LINKS.map((l) => (
              <li key={l.href}><a href={l.href}>{l.texto}</a></li>
            ))}
          </ul>
          <button
            ref={botonRef}
            type="button"
            className="v2-nav__hamburguesa"
            aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={abierto}
            aria-controls="menu-celular"
            onClick={() => setAbierto((a) => !a)}
          >
            <span></span>
            <span></span>
          </button>
        </div>
        <div id="menu-celular" className="v2-nav__menu" inert={!abierto}>
          <ul>
            {LINKS.map((l, i) => (
              <li key={l.href} style={{ "--i": i } as React.CSSProperties}>
                <a href={l.href} onClick={() => setAbierto(false)}>{l.texto}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}
