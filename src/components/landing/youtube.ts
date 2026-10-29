// Datos del canal de YouTube para la sección "Nuestras reuniones recientes".
// Se leen de las páginas públicas del canal (sin clave ni cuenta) y Next las guarda una hora.
// YouTube no tiene un formato estable para esto: si algo falla o cambia, se usa la última
// reunión guardada en datos.ts y se esconden los números del canal. La página nunca se rompe.

import { ULTIMA_REUNION } from "./datos";

const CANAL = "https://www.youtube.com/@cristo.viviente";
const UNA_HORA = 3600;

export type Reunion = { id: string; titulo: string; thumb: string };
export type Canal = { suscriptores: string | null; videos: string | null };

async function pagina(ruta: string): Promise<string | null> {
  try {
    const res = await fetch(`${CANAL}${ruta}?hl=es-419&gl=AR`, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36",
        "Accept-Language": "es-AR,es;q=0.9",
        Cookie: "CONSENT=YES+",
      },
      next: { revalidate: UNA_HORA },
      signal: AbortSignal.timeout(8000),
    });
    return res.ok ? await res.text() : null;
  } catch {
    return null;
  }
}

function datosIniciales(html: string): unknown {
  const m = html.match(/var ytInitialData = (\{[\s\S]*?\});<\/script>/);
  if (!m) return null;
  try {
    return JSON.parse(m[1]);
  } catch {
    return null;
  }
}

// Recorre el JSON de la página y junta los videos en el orden en que aparecen.
function videos(nodo: unknown, lista: { id: string; titulo: string; programado: boolean }[] = []) {
  if (Array.isArray(nodo)) nodo.forEach((n) => videos(n, lista));
  else if (nodo && typeof nodo === "object") {
    const o = nodo as Record<string, unknown>;
    const lockup = o.lockupViewModel as
      | { contentId?: string; metadata?: { lockupMetadataViewModel?: { title?: { content?: unknown } } } }
      | undefined;
    if (lockup?.contentId) {
      const titulo = lockup.metadata?.lockupMetadataViewModel?.title?.content;
      // Un vivo programado todavía no tiene video para mirar.
      const programado = /UPCOMING|Programado para|Scheduled for|Próximamente|Se transmitirá/i.test(JSON.stringify(lockup));
      if (typeof titulo === "string") lista.push({ id: lockup.contentId, titulo, programado });
    }
    Object.values(o).forEach((v) => videos(v, lista));
  }
  return lista;
}

// La última reunión transmitida (la primera de la pestaña "En vivo" que ya se puede ver).
export async function ultimaReunion(): Promise<Reunion> {
  const html = await pagina("/streams");
  const datos = html && datosIniciales(html);
  const v = datos ? videos(datos).find((x) => !x.programado) : undefined;
  if (!v) return ULTIMA_REUNION;
  return { id: v.id, titulo: v.titulo, thumb: await miniatura(v.id) };
}

// La miniatura grande (1280×720) no existe en todos los videos: si no está, se usa la chica
// (480×360, siempre existe; sus franjas negras quedan afuera porque se recorta a 16:9).
async function miniatura(id: string): Promise<string> {
  const grande = `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;
  try {
    const res = await fetch(grande, { method: "HEAD", next: { revalidate: UNA_HORA }, signal: AbortSignal.timeout(5000) });
    if (res.ok) return grande;
  } catch {}
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
}

// "1.1 K suscriptores" → "1,1 K"; "1K videos" → "1 K". null si no se pudo leer.
function numero(texto: string | undefined): string | null {
  const m = texto?.match(/([\d.,]+)\s*(K|M|mil|millones)?/i);
  if (!m) return null;
  const sufijo = m[2] ? " " + m[2].replace(/mil/i, "K").replace(/millones/i, "M").toUpperCase() : "";
  return m[1].replace(".", ",") + sufijo;
}

export async function datosCanal(): Promise<Canal> {
  const html = await pagina("");
  if (!html) return { suscriptores: null, videos: null };
  const sus = html.match(/"content":"([^"]*(?:suscriptor|subscriber)[^"]*)"/i)?.[1];
  const vid = html.match(/"content":"([\d.,]+\s*(?:K|M|mil)?\s*videos?)"/i)?.[1];
  return { suscriptores: numero(sus), videos: numero(vid) };
}
