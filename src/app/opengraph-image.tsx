import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const runtime = "edge";

export const alt =
  "Emmanuel Adewumi, SCCSMARTCODE, Inkriv Founding AI Engineer portfolio preview";
export const size = {
  width: 1200,
  height: 630,
};

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          color: "#f8fafc",
          background:
            "radial-gradient(circle at top left, rgba(0,212,255,0.34), transparent 30%), linear-gradient(135deg, #050507 0%, #0f172a 48%, #111827 100%)",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              fontSize: 32,
              fontWeight: 700,
            }}
          >
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: 20,
                background: "linear-gradient(135deg, #00d4ff, #7c3aed)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#020617",
              }}
            >
            SCC
          </div>
          <span>{siteConfig.shortName}</span>
        </div>
        <div style={{ fontSize: 18, color: "#94a3b8" }}>
          Inkriv engineer profile
        </div>
      </div>

      <div style={{ maxWidth: 920, display: "flex", flexDirection: "column", gap: 24 }}>
        <div style={{ fontSize: 74, lineHeight: 1.02, fontWeight: 800 }}>
          Inkriv Founding AI Engineer & ML Researcher.
        </div>
        <div style={{ fontSize: 30, lineHeight: 1.4, color: "#cbd5e1", maxWidth: 820 }}>
          Emmanuel Adewumi, known as SCCSMARTCODE, builds AI writing systems, agentic orchestration, and production-ready intelligent architectures.
          <div style={{ fontSize: 18, color: "#64748b" }}>SEO-ready deployment</div>
        </div>
      </div>
      </div>
    ),
    { ...size }
  );
}
