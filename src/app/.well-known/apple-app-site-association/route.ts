import { NextResponse } from "next/server";

const APPLE_TEAM_ID = process.env.APPLE_TEAM_ID || "XXXXXXXXXX";
const BUNDLE_ID = "com.cristoviviente.app";
const APP_ID = `${APPLE_TEAM_ID}.${BUNDLE_ID}`;

export async function GET() {
  const association = {
    applinks: {
      apps: [],
      details: [
        {
          appID: APP_ID,
          paths: [
            "/api/auth/reset-password-redirect*",
            "/devotional/*",
          ],
        },
      ],
    },
    webcredentials: {
      apps: [APP_ID],
    },
  };

  return NextResponse.json(association, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
