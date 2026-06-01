import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 512,
  height: 512,
};

export const contentType = "image/png";

export default function Icon() {
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
          color: "#00d4ff",
          fontSize: 220,
          fontWeight: 800,
          border: "24px solid #00d4ff",
          borderRadius: 96,
        }}
      >
        SCC
      </div>
    ),
    size,
  );
}