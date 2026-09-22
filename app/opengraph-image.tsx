import { ImageResponse } from "next/og";
import { home, identity } from "@/content/profile";

export const dynamic = "force-static";
export const alt = `${identity.name} — ${home.display}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          color: "#16130f",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 30, fontWeight: 600 }}>{identity.name}</div>

        <div
          style={{
            fontSize: 62,
            lineHeight: 1.15,
            letterSpacing: "-0.025em",
            maxWidth: 940,
          }}
        >
          {home.display}
        </div>

        <div style={{ display: "flex", gap: "28px", fontSize: 24, color: "#767068" }}>
          <span>{identity.location}</span>
          <span>·</span>
          <span>{identity.email}</span>
        </div>
      </div>
    ),
    size,
  );
}
