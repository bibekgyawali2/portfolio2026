import { ImageResponse } from "next/og";
import { identity } from "@/content/profile";

export const dynamic = "force-static";
export const alt = `${identity.name} | Electronics Engineer, Kathmandu`;
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
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{ fontSize: 32, fontWeight: 700, letterSpacing: "-0.02em" }}>
            {identity.name}
          </div>
          <div
            style={{
              fontSize: 16,
              fontFamily: "monospace",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              color: "#767068",
              border: "1px solid #e5e2dc",
              padding: "6px 14px",
              borderRadius: 999,
            }}
          >
            Portfolio & CV
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <div
            style={{
              fontSize: 54,
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              color: "#16130f",
              maxWidth: 980,
            }}
          >
            Electronics and Communication Engineer
          </div>
          <div
            style={{
              fontSize: 24,
              lineHeight: 1.45,
              color: "#544e45",
              maxWidth: 920,
            }}
          >
            Embedded control systems, biomedical instrumentation, signal processing, and machine learning.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            fontSize: 20,
            fontFamily: "monospace",
            color: "#767068",
            borderTop: "1px solid #eae7e1",
            paddingTop: "24px",
          }}
        >
          <span>{identity.location}</span>
          <span>·</span>
          <span>{identity.email}</span>
          <span>·</span>
          <span style={{ color: "#b45309" }}>bibekgyawali.com.np</span>
        </div>
      </div>
    ),
    size,
  );
}

