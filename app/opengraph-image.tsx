import { ImageResponse } from "next/og";
export const runtime = "edge";
export const alt = "NexusNova Studio - Premium AI Agency in Nagpur";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background:
          "radial-gradient(circle at 74% 18%, #402185 0%, #0A0D14 39%), #0A0D14",
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
        <div style={{ fontSize: 32, color: "#A78BFA", letterSpacing: 2 }}>
          NEXUSNOVA STUDIO / NAGPUR
        </div>
        <div
          style={{
            fontSize: 76,
            fontWeight: 700,
            lineHeight: 1.05,
            marginTop: 20,
          }}
        >
          Premium AI Agency
          <br /> & Digital Systems
        </div>
        <div style={{ fontSize: 28, color: "#b7b7c5", marginTop: 30 }}>
          Website development | AI automation | CRM solutions
        </div>
      </div>
    </div>,
    size,
  );
}
