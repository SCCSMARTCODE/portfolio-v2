import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #050507 0%, #0f172a 100%)",
          color: "#f8fafc",
          fontSize: 72,
          fontWeight: 800,
          borderRadius: 40,
          border: "10px solid #00d4ff",
        }}
      >
        SCC
      </div>
    ),
    size,
  );
}