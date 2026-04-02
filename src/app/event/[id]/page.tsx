import type { Metadata } from "next";

const API_URL =
  process.env.API_URL || "https://api.staging.cristoviviente.com/api";
const SITE_URL = "https://cristoviviente.com";

type Event = {
  id: string;
  title: string;
  description: string | null;
  startDate: string;
  endDate: string | null;
  coverImage?: string;
  location?: string;
  adress?: string;
  category?: {
    name: string;
  };
};

async function getEvent(id: string): Promise<Event | null> {
  try {
    const res = await fetch(`${API_URL}/events/${id}`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

function stripHtml(html: string): string {
  return html
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + "...";
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("es-AR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "America/Argentina/Buenos_Aires",
  });
}

function formatTime(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleTimeString("es-AR", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "America/Argentina/Buenos_Aires",
  });
}

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const event = await getEvent(id);

  const ogTitle = event?.title || "Evento - Cristo Viviente";

  let ogDescription = "Evento de Iglesia Cristo Viviente";
  if (event) {
    const parts: string[] = [];
    parts.push(formatDate(event.startDate));
    if (event.location) parts.push(event.location);
    if (event.description) {
      parts.push(truncate(stripHtml(event.description), 100));
    }
    ogDescription = parts.join(" | ");
  }

  return {
    title: ogTitle,
    description: ogDescription,
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: `${SITE_URL}/event/${id}`,
      siteName: "Iglesia Cristo Viviente",
      type: "article",
      locale: "es_AR",
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
    },
  };
}

export default async function EventPage({ params }: Props) {
  const { id } = await params;
  const event = await getEvent(id);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 24px",
        background: "linear-gradient(135deg, #043a40, #064c53)",
        color: "white",
        textAlign: "center",
        fontFamily: "var(--font-body)",
      }}
    >
      <img
        src="/images/cv.png"
        alt="Cristo Viviente"
        style={{ width: 80, height: 80, marginBottom: 24 }}
      />
      {event?.category && (
        <span
          style={{
            fontSize: "0.85rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: 2,
            color: "#009dad",
            marginBottom: 12,
          }}
        >
          {event.category.name}
        </span>
      )}
      <h1
        style={{
          fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
          fontWeight: 700,
          marginBottom: 16,
          maxWidth: 600,
        }}
      >
        {event?.title || "Evento"}
      </h1>
      {event && (
        <p
          style={{
            fontSize: "1.1rem",
            color: "rgba(255,255,255,0.8)",
            marginBottom: 8,
          }}
        >
          {formatDate(event.startDate)} - {formatTime(event.startDate)}
          {event.endDate && ` a ${formatTime(event.endDate)}`}
        </p>
      )}
      {event?.location && (
        <p
          style={{
            fontSize: "1rem",
            color: "rgba(255,255,255,0.6)",
            marginBottom: 8,
          }}
        >
          {event.location}
        </p>
      )}
      {event?.adress && (
        <p
          style={{
            fontSize: "0.9rem",
            color: "rgba(255,255,255,0.5)",
            marginBottom: 32,
          }}
        >
          {event.adress}
        </p>
      )}
      {event?.description && (
        <p
          style={{
            fontSize: "1rem",
            color: "rgba(255,255,255,0.7)",
            maxWidth: 500,
            lineHeight: 1.7,
            marginBottom: 32,
          }}
        >
          {truncate(stripHtml(event.description), 200)}
        </p>
      )}
      <p
        style={{
          fontSize: "1rem",
          color: "rgba(255,255,255,0.6)",
          marginBottom: 32,
        }}
      >
        Mirá este evento en la app de Cristo Viviente
      </p>
      <a
        href={`cristoviviente://event/${id}`}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
          padding: "16px 32px",
          background: "#009dad",
          color: "white",
          borderRadius: 100,
          fontWeight: 600,
          fontSize: "1rem",
          textDecoration: "none",
          marginBottom: 16,
        }}
      >
        Abrir en la app
      </a>
      <a
        href="/"
        style={{
          color: "rgba(255,255,255,0.6)",
          fontSize: "0.9rem",
          textDecoration: "underline",
        }}
      >
        Ir al sitio web
      </a>
    </div>
  );
}
