"use client";

import { useEffect, useState } from "react";
import { DIAS, proxima, type Proxima } from "./reuniones";

// Una tarjeta por día. La del próximo encuentro se marca recién en el navegador,
// con la hora de quien mira, y se actualiza cada minuto.
export default function Horarios() {
  const [prox, setProx] = useState<Proxima | null>(null);

  useEffect(() => {
    const actualizar = () => setProx(proxima());
    actualizar();
    const t = setInterval(actualizar, 60000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="horarios" className="v3-hor" aria-labelledby="h-horarios">
      <div className="wrap">
        <h2 id="h-horarios" className="t-2">
          Te esperamos en el próximo encuentro<span className="pt">.</span>
        </h2>
        <div className="v3-hor__grid">
          {DIAS.map((d) => {
            const es = prox !== null && prox.reunion.dia === d.dia;
            return (
              <article key={d.dia} className={"v3-card" + (es ? " v3-card--prox" : "")}>
                <div className="v3-card__cab">
                  <h3 className="v3-card__dia">{d.nombre}</h3>
                  {es && (
                    <span className="v3-prox">
                      <span className={"dot" + (prox.ahora ? " dot--vivo" : "")}></span>
                      {prox.ahora ? "Ahora · " + prox.falta : "Próximo" + (prox.falta ? " · " + prox.falta : "")}
                    </span>
                  )}
                </div>
                {d.items.map((it) => (
                  <div className="v3-item" key={it.hora + it.nombre}>
                    <p className="v3-item__hora">{it.hora}</p>
                    <p className="v3-item__nombre">{it.nombre}</p>
                  </div>
                ))}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
