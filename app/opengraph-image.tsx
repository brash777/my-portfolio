import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { hero } from "@/data/hero";
import { site } from "@/data/site";

// Imagen que se ve al compartir el enlace (WhatsApp, LinkedIn…). Se genera al hacer el build.
export const alt = `${site.shortName}, ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Hubot Sans angosta y gruesa (licencia OFL), la misma letra de los títulos de la página
const hubot = await readFile(join(process.cwd(), "assets/fonts/HubotSans-CondensedExtraBold.ttf"));

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "70px 80px",
          background: "#1a43d9",
          color: "#ffffff",
          fontFamily: "Hubot",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 110,
              height: 110,
              borderRadius: 999,
              background: "#ffd100",
              border: "6px solid #000",
              boxShadow: "8px 8px 0 #000",
              color: "#000",
              fontSize: 46,
              fontWeight: 800,
            }}
          >
            {site.initials}
          </div>
          <div style={{ fontSize: 34, fontWeight: 700 }}>{hero.kicker}</div>
        </div>
        <div style={{ marginTop: 40, fontSize: 64, fontWeight: 800 }}>{hero.greeting}</div>
        <div style={{ fontSize: 210, fontWeight: 800, lineHeight: 0.85 }}>{site.name}</div>
        <div style={{ display: "flex", marginTop: 40 }}>
          <div
            style={{
              display: "flex",
              padding: "14px 30px",
              borderRadius: 999,
              background: "#d7261e",
              border: "5px solid #000",
              boxShadow: "6px 6px 0 #000",
              fontSize: 40,
              fontWeight: 800,
              transform: "rotate(-3deg)",
            }}
          >
            {site.role}
          </div>
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: "Hubot", data: hubot, weight: 800, style: "normal" }] },
  );
}
