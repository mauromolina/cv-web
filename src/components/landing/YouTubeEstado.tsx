"use client";

import { useEffect, useState } from "react";
import { proxima } from "./reuniones";

// Subtítulo de YouTube en /links: avisa cuando hay una reunión en vivo.
export default function YouTubeEstado() {
  const [texto, setTexto] = useState("@cristo.viviente");

  useEffect(() => {
    const actualizar = () => {
      const p = proxima();
      setTexto(p.ahora ? "En vivo ahora · " + p.reunion.nombre : "@cristo.viviente");
    };
    actualizar();
    const t = setInterval(actualizar, 60000);
    return () => clearInterval(t);
  }, []);

  return <small>{texto}</small>;
}
