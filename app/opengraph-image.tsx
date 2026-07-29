import { ImageResponse } from "next/og";
export const runtime = "edge";
export const alt = "NexusNova Studio — AI Automation for Healthcare";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background:
          "radial-gradient(circle at 74% 18%, #1a3d3a 0%, #0A0D14 39%), #0A0D14",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontFamily: "Arial",
      }}
    >
      <div style={{ padding: 70 }}>
        <div
          style={{
            fontSize: 32,
            color: "#14B8A6",
            letterSpacing: 2,
            fontWeight: 600,
          }}
        >
          NEXUSNOVA STUDIO
        </div>
        <div
          style={{
            fontSize: 76,
            fontWeight: 700,
            lineHeight: 1.05,
            marginTop: 20,
          }}
        >
          AI Automation
          <br /> for Healthcare
        </div>
        <div style={{ fontSize: 28, color: "#94A3B8", marginTop: 30 }}>
          No-show reduction | Lead CRM | Patient automation
        </div>
      </div>
    </div>,
    size,
  );
}
