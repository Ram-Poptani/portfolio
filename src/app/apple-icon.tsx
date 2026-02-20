import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #d97706, #f59e0b)",
          borderRadius: 40,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <span
          style={{
            fontSize: 96,
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1,
          }}
        >
          RP
        </span>
      </div>
    ),
    { ...size }
  );
}
