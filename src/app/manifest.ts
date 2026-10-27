import type { MetadataRoute } from "next";

// Ícono de la web en Android ("Agregar a la pantalla de inicio"): el mismo favicon de public/favicon/.
// Sin theme_color: Safari en iOS 26 lo usaba para pintar la barra de estado de petróleo liso
// sobre la foto del hero. Sin él, toma el color de la página.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Iglesia Cristo Viviente",
    short_name: "Cristo Viviente",
    start_url: "/",
    display: "browser",
    background_color: "#F8F9FA",
    icons: [
      { src: "/favicon/favicon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/favicon/favicon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
