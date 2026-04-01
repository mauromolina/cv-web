import { NextResponse } from "next/server";

export async function GET() {
  const association = {
    applinks: {
      apps: [],
      details: [
        {
          // TODO: Reemplazar XXXXXXXXXX con tu Team ID de Apple Developer
          appID: "XXXXXXXXXX.com.cristoviviente.app",
          paths: [
              "/api/auth/reset-password-redirect*",
              "/devocional/*",
            ],
        },
      ],
    },
    webcredentials: {
      apps: ["XXXXXXXXXX.com.cristoviviente.app"],
    },
  };

  return NextResponse.json(association, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
