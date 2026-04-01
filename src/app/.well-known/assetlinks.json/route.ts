import { NextResponse } from "next/server";

const PACKAGE_NAME = "com.cristoviviente.app";

// Los SHA256 fingerprints son valores públicos (hash del certificado público)
// Se pueden configurar por env vars para facilitar el mantenimiento
const SHA256_DEBUG = process.env.ANDROID_SHA256_DEBUG || "";
const SHA256_RELEASE = process.env.ANDROID_SHA256_RELEASE || "";

export async function GET() {
  const fingerprints = [SHA256_DEBUG, SHA256_RELEASE].filter(Boolean);

  const assetLinks = [
    {
      relation: ["delegate_permission/common.handle_all_urls"],
      target: {
        namespace: "android_app",
        package_name: PACKAGE_NAME,
        sha256_cert_fingerprints: fingerprints,
      },
    },
  ];

  return NextResponse.json(assetLinks, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
