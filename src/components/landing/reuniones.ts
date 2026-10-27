// Horarios de la iglesia y cálculo de la próxima reunión.
// Todo en hora de Argentina (UTC−3, sin horario de verano), sin importar dónde esté quien mira.

export type Reunion = {
  id: string;
  dia: number; // 0 = domingo … 6 = sábado
  inicio: string;
  fin: string;
  nombre: string;
  grupo?: "sabado" | "jovenes";
};

export const REUNIONES: Reunion[] = [
  { id: "manana", dia: 0, inicio: "10:30", fin: "12:30", nombre: "Servicio de Mañana" },
  { id: "tarde", dia: 0, inicio: "19:00", fin: "21:00", nombre: "Servicio de Tarde" },
  { id: "oracion", dia: 4, inicio: "19:00", fin: "21:00", nombre: "Reunión de Oración" },
  { id: "escuela", dia: 6, inicio: "16:00", fin: "17:30", nombre: "Escuela Bíblica", grupo: "sabado" },
  { id: "mujeres", dia: 6, inicio: "16:00", fin: "17:30", nombre: "Mujeres", grupo: "sabado" },
  { id: "varones", dia: 6, inicio: "16:00", fin: "17:30", nombre: "Varones", grupo: "sabado" },
  { id: "jovenes", dia: 6, inicio: "18:30", fin: "21:00", nombre: "Jóvenes CV", grupo: "jovenes" },
];

// Una tarjeta por día en la sección de horarios.
export const DIAS = [
  {
    dia: 0,
    nombre: "Domingos",
    items: [
      { hora: "10:30", nombre: "Servicio de Mañana" },
      { hora: "19:00", nombre: "Servicio de Tarde" },
    ],
  },
  { dia: 4, nombre: "Jueves", items: [{ hora: "19:00", nombre: "Reunión de Oración" }] },
  {
    dia: 6,
    nombre: "Sábados",
    items: [
      { hora: "16:00", nombre: "Escuela Bíblica · Mujeres · Varones" },
      { hora: "18:30", nombre: "Jóvenes CV" },
    ],
  },
];

export type Proxima = {
  reunion: Reunion;
  ahora: boolean;
  falta: string; // "en 3 h", "en 2 días", "" (mañana), "hasta las 21:00"
};

const minutos = (hhmm: string) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};

// Las reuniones de los sábados (grupos) no cuentan como "próxima reunión".
export function proxima(fecha: Date = new Date()): Proxima {
  const ar = new Date(fecha.getTime() - 3 * 3600000);
  const dia = ar.getUTCDay();
  const ahoraSem = dia * 1440 + ar.getUTCHours() * 60 + ar.getUTCMinutes();

  let mejor: { r: Reunion; enCurso: boolean; falta: number } | null = null;
  for (const r of REUNIONES) {
    if (r.grupo) continue;
    const ini = r.dia * 1440 + minutos(r.inicio);
    const fin = r.dia * 1440 + minutos(r.fin);
    if (ahoraSem >= ini && ahoraSem < fin) {
      mejor = { r, enCurso: true, falta: 0 };
      break;
    }
    let falta = ini - ahoraSem;
    if (falta < 0) falta += 7 * 1440;
    if (!mejor || falta < mejor.falta) mejor = { r, enCurso: false, falta };
  }
  const m = mejor!;
  if (m.enCurso) return { reunion: m.r, ahora: true, falta: "hasta las " + m.r.fin };

  let dias = (m.r.dia - dia + 7) % 7;
  if (dias === 0 && m.falta > 1440) dias = 7;

  let falta: string;
  if (dias === 0 && m.falta < 60) falta = "en " + Math.max(1, m.falta) + " min";
  else if (dias === 0 || m.falta < 720) {
    const h = Math.floor(m.falta / 60);
    const resto = m.falta % 60;
    falta = "en " + h + " h" + (resto && h < 3 ? " " + resto + " min" : "");
  } else if (dias === 1) falta = "";
  else falta = "en " + dias + " días";

  return { reunion: m.r, ahora: false, falta };
}
