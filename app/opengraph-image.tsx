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
          // el mismo fondo de la página: noche azul con un brillo azul arriba a la izquierda
          background: "radial-gradient(900px 600px at 10% 0%, rgba(47,91,255,0.45), #060a1a 70%)",
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
              width: 104,
              height: 104,
              borderRadius: 28,
              background: "linear-gradient(135deg, #2f5bff, #1a2f99)",
              color: "#ffffff",
              fontSize: 44,
              fontWeight: 800,
            }}
          >
            {site.initials}
          </div>
          <div style={{ fontSize: 34, fontWeight: 700, color: "#a6b1d1" }}>{hero.kicker}</div>
        </div>
        <div style={{ marginTop: 44, fontSize: 60, fontWeight: 800, color: "#a6b1d1" }}>{hero.greeting}</div>
        <div style={{ fontSize: 190, fontWeight: 800, lineHeight: 0.9 }}>{site.shortName}</div>
        <div style={{ marginTop: 34, fontSize: 44, fontWeight: 800, color: "#8aa6ff" }}>{`${site.role} junior`}</div>
      </div>
    ),
    { ...size, fonts: [{ name: "Hubot", data: hubot, weight: 800, style: "normal" }] },
  );
}
