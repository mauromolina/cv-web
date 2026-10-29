/* eslint-disable @next/next/no-img-element -- logos chicos y SVG; las fotos grandes usan next/image */
import Image from "next/image";
import Link from "next/link";
import "@/styles/landing.css";
import Nav from "@/components/landing/Nav";
import HeroVideo from "@/components/landing/HeroVideo";
import Horarios from "@/components/landing/Horarios";
import Movimiento from "@/components/landing/Movimiento";
import LogoCV from "@/components/landing/LogoCV";
import { APP_DEVOCIONALES, APP_HOME } from "@/components/landing/appScreens";
import { Flecha, Instagram, Mail, Pin, Play, WhatsApp } from "@/components/landing/Iconos";
import {
  APP_STORE, FACEBOOK, GOOGLE_PLAY, IG_IGLESIA, IG_JOVENES, MAIL, MAPS, TELEFONO,
  WHATSAPP, YOUTUBE, YOUTUBE_VIVOS,
} from "@/components/landing/datos";
import { datosCanal, ultimaReunion } from "@/components/landing/youtube";

// La página se arma de nuevo como máximo una vez por hora: así la última reunión de YouTube,
// los números del canal y el año del footer se actualizan solos, sin volver a publicar.
export const revalidate = 3600;

// Posts de @jovenes_cv: dos filas de 8, duplicadas para que el carrusel no tenga corte.
const POSTS = Array.from({ length: 16 }, (_, i) => `/landing/jovenes/${String(i + 1).padStart(2, "0")}.jpg`);
const fila = (desde: number) => {
  const base = POSTS.slice(desde, desde + 8);
  return [...base, ...base];
};

export default async function Home() {
  const [reunion, canal] = await Promise.all([ultimaReunion(), datosCanal()]);
  const numerosCanal = [canal.suscriptores && `${canal.suscriptores} suscriptores`, canal.videos && `${canal.videos} videos`].filter(Boolean);

  return (
    <div className="cvl">
      <Movimiento />
      <Nav />

      {/* Hero: el nombre de la iglesia sobre el video de la iglesia */}
      <header id="inicio" className="v2-hero sobre-foto">
        <HeroVideo />
        <div className="v2-hero__velo"></div>
        <div className="v2-hero__cont">
          <h1>
            Iglesia
            <br />
            Cristo Viviente<span className="pt">.</span>
          </h1>
          <div className="v2-hero__pie">
            <p className="lead">Una comunidad de fe donde cada persona encuentra propósito, amor y esperanza en Cristo.</p>
            <div className="acciones hero-acc">
              <a className="btn btn--lg btn--blanco" href="#nosotros">
                Conocenos
                <Flecha />
              </a>
            </div>
          </div>
        </div>
      </header>

      <Horarios />

      {/* Reuniones: el canal y la última reunión */}
      <section id="reuniones" className="blk band" aria-labelledby="h-reuniones">
        <div className="wrap sec">
          <div className="g" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))", gap: "40px 64px", alignItems: "center" }}>
            <div className="stack" style={{ gap: 22, minWidth: 0 }}>
              <h2 id="h-reuniones" className="t-1">
                Nuestras reuniones recientes<span className="pt">.</span>
              </h2>
              <p className="lead muted" style={{ maxWidth: "32ch" }}>
                Todas las reuniones quedan en nuestro canal. Suscribite y te avisa cuando empezamos.
              </p>
              <div className="acciones">
                <a className="btn btn--glow btn--lg" href={`${YOUTUBE}?sub_confirmation=1`} target="_blank" rel="noopener">
                  Suscribite al canal
                </a>
                <a className="btn btn--ghost btn--lg" href={YOUTUBE_VIVOS} target="_blank" rel="noopener">
                  Ver todas en YouTube
                </a>
              </div>
            </div>
            <a
              href={`https://www.youtube.com/watch?v=${reunion.id}`}
              target="_blank"
              rel="noopener"
              style={{ display: "flex", flexDirection: "column", gap: 20, padding: 28, borderRadius: 24, background: "rgba(255,255,255,0.06)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.10)", color: "#fff", textDecoration: "none", minWidth: 0 }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
                <img src="/landing/yt-avatar.jpg" alt="" width={84} height={84} style={{ width: 84, height: 84, borderRadius: "50%", background: "#fff" }} />
                <div style={{ minWidth: 0 }}>
                  <p style={{ font: "800 1.75rem/1 var(--display)", letterSpacing: "-0.035em" }}>Iglesia Cristo Viviente</p>
                  <p style={{ marginTop: 8, color: "#A9C4C6", fontSize: "0.9375rem" }}>{["@cristo.viviente", ...numerosCanal].join(" · ")}</p>
                </div>
              </div>
              <div className="yt-video">
                <div className="yt-thumb" style={{ borderRadius: 16 }}>
                  <Image src={reunion.thumb} alt="" width={960} height={540} sizes="(min-width: 900px) 560px, 100vw" />
                  <span className="yt-play">
                    <Play />
                  </span>
                </div>
                <div>
                  <p className="yt-video__tit">{reunion.titulo}</p>
                  <p className="yt-video__meta">La última reunión</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Nosotros: título y texto a la izquierda, foto con el versículo encima a la derecha */}
      <section id="nosotros" className="blk blk--niebla" aria-labelledby="h-nosotros">
        <div className="wrap sec">
          <div className="v3-nos">
            <div className="v3-nos__texto">
              <span className="eyebrow">
                <span className="dot"></span>Nosotros
              </span>
              <h2 id="h-nosotros" className="t-1" style={{ maxWidth: "12ch" }}>
                Una iglesia que es familia<span className="pt">.</span>
              </h2>
              <p className="lead" style={{ maxWidth: "36ch" }}>
                Somos una comunidad cristiana en Quilmes Oeste. Nos reunimos para adorar a Dios, aprender de la Biblia y acompañarnos en la vida de todos los días. Las puertas están abiertas: vení como estés.
              </p>
            </div>
            <figure className="v3-nos__foto">
              <Image
                src="/landing/nosotros.jpg"
                alt="El salón lleno, la congregación de pie aplaude mientras la banda y los pastores están adelante, en el escenario."
                width={1800}
                height={1199}
                sizes="(min-width: 900px) 50vw, 100vw"
              />
              <blockquote className="versiculo">
                <p>Porque donde están dos o tres congregados en mi nombre, allí estoy yo en medio de ellos.</p>
                <cite>Mateo 18:20 · Reina-Valera 1960</cite>
              </blockquote>
            </figure>
          </div>
        </div>
      </section>

      {/* Jóvenes CV: carrusel de borde a borde y el texto centrado encima */}
      <section id="jovenes" className="jcv jcv--negro" aria-labelledby="h-jovenes">
        <div className="jcv__riel" aria-hidden="true">
          {[fila(0), fila(8)].map((posts, n) => (
            <div key={n} className={"jcv__fila" + (n ? " jcv__fila--der" : "")}>
              {posts.map((src, i) => (
                <a key={i} href={IG_JOVENES} tabIndex={-1}>
                  <Image src={src} alt="" width={570} height={760} sizes="232px" />
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="jcv__velo"></div>
        <div className="jcv__cab">
          <h2 id="h-jovenes" className="jcv__tit">
            <img className="jcv__logo" src="/landing/jcv-logo.png" alt="" width={84} height={84} />
            <span>
              Jóvenes CV<span className="pt">.</span>
            </span>
          </h2>
          <p className="lead">Un lugar para conocer a Jesús, hacer amigos y crecer juntos.</p>
          <a className="btn btn--glow btn--lg" href={IG_JOVENES} target="_blank" rel="noopener">
            <Instagram />
            Seguí a @jovenes_cv
          </a>
        </div>
      </section>

      {/* La app: pantallas reconstruidas desde cv-mobile */}
      <section id="app" className="blk" aria-labelledby="h-app">
        <div className="wrap sec">
          <div className="g" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 440px), 1fr))", gap: "56px 72px", alignItems: "center" }}>
            <div className="stack" style={{ gap: 24 }}>
              <div className="app-ficha">
                <img className="app-ficha__icono" src="/landing/app-icon-store.png" alt="" width={72} height={72} />
                <span>
                  <b>Cristo Viviente</b>
                  <span className="muted small">La app de la iglesia</span>
                </span>
              </div>
              <h2 id="h-app" className="t-1">
                Tu devocional de cada día<span className="pt">.</span>
              </h2>
              <p className="lead muted" style={{ maxWidth: "34ch" }}>
                Gratis en App Store y Google Play. La iglesia, en tu bolsillo entre domingo y domingo.
              </p>
              <ul className="lista-app">
                <li>
                  <svg className="ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M2 4h6a4 4 0 0 1 4 4v13a3 3 0 0 0-3-3H2Z" /><path d="M22 4h-6a4 4 0 0 0-4 4v13a3 3 0 0 1 3-3h7Z" /></svg>
                  <span><b>Devocional diario</b><span className="muted small">Con rachas de lectura para no cortar el hábito.</span></span>
                </li>
                <li>
                  <svg className="ic" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /><path d="m9 16 2 2 4-4" /></svg>
                  <span><b>Eventos con inscripción</b><span className="muted small">Anotate desde el celular.</span></span>
                </li>
                <li>
                  <svg className="ic" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                  <span><b>Las reuniones</b><span className="muted small">Días, horarios y las últimas reuniones.</span></span>
                </li>
                <li>
                  <svg className="ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" /></svg>
                  <span><b>Notas personales</b><span className="muted small">Lo que te habló Dios, guardado.</span></span>
                </li>
              </ul>
              <div className="acciones">
                <a className="tienda" href={APP_STORE} target="_blank" rel="noopener">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16.37 12.6c.03 3.03 2.66 4.04 2.69 4.05-.02.07-.42 1.44-1.39 2.85-.84 1.22-1.71 2.43-3.08 2.46-1.35.03-1.78-.8-3.32-.8-1.54 0-2.02.77-3.3.83-1.32.05-2.33-1.32-3.18-2.53-1.73-2.5-3.05-7.06-1.28-10.14.88-1.53 2.45-2.5 4.15-2.52 1.3-.03 2.52.87 3.31.87.79 0 2.28-1.08 3.84-.92.65.03 2.49.26 3.67 1.99-.1.06-2.19 1.28-2.17 3.81M13.85 3.18c.7-.85 1.17-2.03 1.04-3.2-1.01.04-2.23.67-2.95 1.52-.65.75-1.22 1.95-1.06 3.1 1.12.09 2.27-.57 2.97-1.42" /></svg>
                  <span><small>Descargala en</small><b>App Store</b></span>
                </a>
                <a className="tienda" href={GOOGLE_PLAY} target="_blank" rel="noopener">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 2.6v18.8c0 .5.5.8.9.6l16.3-9.4c.4-.3.4-.9 0-1.2L4.9 2c-.4-.2-.9.1-.9.6Z" /></svg>
                  <span><small>Disponible en</small><b>Google Play</b></span>
                </a>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-end", gap: 0 }} data-entra="">
              <div className="v2-tel" role="img" aria-label="La pantalla de inicio de la app Cristo Viviente" style={{ zIndex: 2 }}>
                <span className="v2-tel__isla"></span>
                <div className="v2-tel__pant">
                  <div className="v2-tel__escala" dangerouslySetInnerHTML={{ __html: APP_HOME }} />
                </div>
              </div>
              <div
                className="v2-tel"
                role="img"
                aria-label="La pantalla de devocionales con la racha de lectura en la app Cristo Viviente"
                style={{ marginLeft: -64, marginBottom: 48, transform: "rotate(3deg)", zIndex: 1 }}
              >
                <span className="v2-tel__isla"></span>
                <div className="v2-tel__pant">
                  <div className="v2-tel__escala" dangerouslySetInnerHTML={{ __html: APP_DEVOCIONALES }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo llegar: el texto alineado con el mapa, el botón debajo del mapa */}
      <section id="como-llegar" className="blk blk--niebla" aria-labelledby="h-llegar">
        <div className="wrap sec">
          <div className="v3-llegar">
            <div className="v3-llegar__texto">
              <span className="eyebrow">
                <span className="dot"></span>Cómo llegar
              </span>
              <div className="stack" style={{ gap: 20 }}>
                <h2 id="h-llegar" className="t-1">
                  Vení a visitarnos<span className="pt">.</span>
                </h2>
                <div>
                  <p className="t-2" style={{ color: "#064C53", fontWeight: 800 }}>Triunvirato 2765</p>
                  <p className="lead muted" style={{ marginTop: 6 }}>Quilmes Oeste, Buenos Aires</p>
                </div>
              </div>
            </div>
            <a className="mapa" href={MAPS} target="_blank" rel="noopener" aria-label="Ver Triunvirato 2765 en Google Maps">
              <Image src="/landing/mapa.jpg" alt="Mapa de Quilmes Oeste con el pin en Triunvirato 2765." width={2200} height={1240} sizes="(min-width: 900px) 60vw, 100vw" />
            </a>
            <div className="v3-llegar__btns">
              <a className="btn btn--lg" href={MAPS} target="_blank" rel="noopener">
                <Pin />
                Cómo llegar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Queremos conocerte */}
      <section id="contacto" className="blk band" aria-labelledby="h-conocerte">
        <div className="wrap sec">
          <div className="g" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))", gap: "40px 64px", alignItems: "center" }}>
            <div className="stack" style={{ gap: 20 }}>
              <h2 id="h-conocerte" className="t-1">
                Queremos conocerte<span className="pt">.</span>
              </h2>
              <p className="lead muted" style={{ maxWidth: "30ch" }}>
                Si tenés una pregunta o querés que oremos por vos, escribinos.
              </p>
            </div>
            <div className="stack" style={{ gap: 12, minWidth: 0 }}>
              <a className="ig ig--chico" href={WHATSAPP} target="_blank" rel="noopener">
                <span className="ig__avatar">
                  <WhatsApp style={{ fill: "currentColor" }} />
                </span>
                <span className="ig__label">Escribinos por WhatsApp</span>
                <Flecha />
              </a>
              <a className="ig ig--chico" href={`mailto:${MAIL}`}>
                <span className="ig__avatar">
                  <Mail style={{ fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }} />
                </span>
                <span className="ig__label">{MAIL}</span>
                <Flecha />
              </a>
              <a className="ig" href={IG_IGLESIA} target="_blank" rel="noopener">
                <span className="ig__avatar" style={{ background: "#fff", padding: 2, boxShadow: "0 0 0 2px #4DD4E1" }}>
                  <img src="/landing/ig-iglesia.png" alt="" width={56} height={56} />
                </span>
                <span style={{ minWidth: 0, flex: 1 }}>
                  <span className="cap muted" style={{ display: "block" }}>Seguinos en Instagram</span>
                  <span className="ig__usuario">@iglesiacristoviviente</span>
                </span>
                <Flecha className="ic ic--lg" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer sin bloque de color */}
      <footer className="pie pie--abierto" style={{ width: "calc(100% - 16px)", margin: "0 auto" }}>
        <div className="wrap" style={{ paddingTop: 56, paddingBottom: 24 }}>
          <div className="pie__grid">
            <nav className="pie__nav" aria-label="Pie">
              <div>
                <h3>Reuniones</h3>
                <ul>
                  <li><a href="#horarios">Horarios</a></li>
                  <li><a href="#reuniones">Reuniones recientes</a></li>
                  <li><a href={YOUTUBE_VIVOS}>Mirá en vivo</a></li>
                  <li><a href="#como-llegar">Cómo llegar</a></li>
                </ul>
              </div>
              <div>
                <h3>Comunidad</h3>
                <ul>
                  <li><a href="#nosotros">Nosotros</a></li>
                  <li><a href="#jovenes">Jóvenes CV</a></li>
                  <li><a href="#app">La app</a></li>
                  <li><Link href="/links">Todos los links</Link></li>
                </ul>
              </div>
              <div>
                <h3>Seguinos</h3>
                <ul>
                  <li><a href={IG_IGLESIA}>Instagram</a></li>
                  <li><a href={IG_JOVENES}>@jovenes_cv</a></li>
                  <li><a href={YOUTUBE}>YouTube</a></li>
                  <li><a href={FACEBOOK}>Facebook</a></li>
                </ul>
              </div>
            </nav>
            <div className="stack" style={{ gap: 16 }}>
              <a className="marca" href="#inicio">
                <LogoCV className="marca__logo marca__logo--pie" />
                <span style={{ fontSize: "1.25rem" }}>Cristo Viviente</span>
              </a>
              <p className="small pie__dato">
                Triunvirato 2765
                <br />
                Quilmes Oeste, Buenos Aires
              </p>
              <p className="small pie__dato">
                <a href={TELEFONO.href}>{TELEFONO.texto}</a>
                <br />
                <a href={`mailto:${MAIL}`} style={{ overflowWrap: "anywhere" }}>{MAIL}</a>
              </p>
              <p className="small pie__dato">
                La app: <a href={APP_STORE}>App Store</a> · <a href={GOOGLE_PLAY}>Google Play</a>
              </p>
            </div>
          </div>
          <div className="pie__legal">
            <span>© {new Date().getFullYear()} Iglesia Cristo Viviente</span>
            <Link href="/privacy">Privacidad</Link>
            <Link href="/terms">Términos</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
