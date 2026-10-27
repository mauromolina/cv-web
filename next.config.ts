import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Solo en desarrollo: deja abrir `npm run dev` desde un celular en la misma red WiFi.
  // Si la IP de la compu cambia, actualizarla acá (System Settings > Wi-Fi > Detalles).
  allowedDevOrigins: ["192.168.1.102"],
};

export default nextConfig;
