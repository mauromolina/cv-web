import { ImageResponse } from "next/og";

export const revalidate = 60;
export const alt = "Evento - Cristo Viviente";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const API_URL =
  process.env.API_URL || "https://api.staging.cristoviviente.com/api";

type Event = {
  title: string;
  startDate: string;
  location?: string;
  category?: { name: string };
};

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

export default async function Image({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  let title = "Evento";
  let dateInfo = "";
  let location = "";
  let category = "";

  try {
    const res = await fetch(`${API_URL}/events/${id}`);
    if (res.ok) {
      const data: Event = await res.json();
      title = data.title || title;
      if (data.startDate) {
        dateInfo = `${formatDate(data.startDate)} - ${formatTime(data.startDate)}`;
      }
      location = data.location || "";
      category = data.category?.name || "";
    }
  } catch {
    /* fallback to defaults */
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #043a40 0%, #064c53 100%)",
          color: "white",
          padding: "60px 80px",
        }}
      >
        <div
          style={{
            fontSize: 22,
            fontWeight: 700,
            color: "#009dad",
            textTransform: "uppercase",
            letterSpacing: "6px",
            marginBottom: 24,
          }}
        >
          Iglesia Cristo Viviente
        </div>
        {category && (
          <div
            style={{
              fontSize: 18,
              fontWeight: 600,
              color: "#009dad",
              textTransform: "uppercase",
              letterSpacing: "3px",
              marginBottom: 24,
              padding: "6px 20px",
              border: "2px solid #009dad",
              borderRadius: 100,
            }}
          >
            {category}
          </div>
        )}
        <div
          style={{
            fontSize: title.length > 60 ? 40 : 52,
            fontWeight: 700,
            textAlign: "center",
            lineHeight: 1.3,
            maxWidth: 900,
            marginBottom: 32,
          }}
        >
          {title.length > 100 ? title.slice(0, 100) + "..." : title}
        </div>
        {dateInfo && (
          <div
            style={{
              fontSize: 22,
              color: "rgba(255, 255, 255, 0.7)",
            }}
          >
            {dateInfo}
          </div>
        )}
        {location && (
          <div
            style={{
              fontSize: 20,
              color: "rgba(255, 255, 255, 0.5)",
              marginTop: 12,
            }}
          >
            {location}
          </div>
        )}
      </div>
    ),
    { ...size },
  );
}
