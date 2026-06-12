import { ImageResponse } from "next/og";

export const revalidate = 60;

const API_URL = process.env.API_URL || "https://api.cristoviviente.com/api";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Event = {
  title: string;
  startDate: string;
  location?: string;
  coverImage?: string;
  category?: { name: string };
};

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("es-AR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    timeZone: "America/Argentina/Buenos_Aires",
  });
}

export default async function Image({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const event: Event | null = await fetch(`${API_URL}/events/${id}`, {
    next: { revalidate: 60 },
  })
    .then((r) => (r.ok ? r.json() : null))
    .catch(() => null);

  const title = event?.title || "Evento";
  const date = event?.startDate ? formatDate(event.startDate) : "";
  const location = event?.location || "";
  const coverImage = event?.coverImage;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "#043a40",
        }}
      >
        {coverImage && (
          <img
            src={coverImage}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        )}

        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            background:
              "linear-gradient(to top, rgba(4,58,64,0.95) 0%, rgba(4,58,64,0.7) 40%, rgba(4,58,64,0.2) 100%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            padding: "48px 60px",
          }}
        >
          {event?.category && (
            <span
              style={{
                fontSize: 20,
                fontWeight: 600,
                color: "#00c4d6",
                textTransform: "uppercase",
                letterSpacing: 3,
                marginBottom: 12,
              }}
            >
              {event.category.name}
            </span>
          )}

          <span
            style={{
              fontSize: title.length > 30 ? 52 : 64,
              fontWeight: 700,
              color: "white",
              lineHeight: 1.15,
              marginBottom: 16,
            }}
          >
            {title}
          </span>

          {(date || location) && (
            <span
              style={{
                fontSize: 24,
                color: "rgba(255,255,255,0.75)",
              }}
            >
              {[date, location].filter(Boolean).join("  ·  ")}
            </span>
          )}
        </div>

        <div
          style={{
            position: "absolute",
            top: 32,
            right: 48,
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <span
            style={{
              fontSize: 22,
              fontWeight: 600,
              color: "rgba(255,255,255,0.6)",
            }}
          >
            Cristo Viviente
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
