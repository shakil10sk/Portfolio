import { ImageResponse } from "next/og";
import { profile } from "@/lib/data";

const size = { width: 1200, height: 630 };

export function generateOGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #09090b 0%, #18181b 55%, #1e1b4b 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 26,
            color: "#a5b4fc",
            marginBottom: 28,
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#34d399",
            }}
          />
          {profile.availability}
        </div>
        <div style={{ display: "flex", fontSize: 72, fontWeight: 700, lineHeight: 1.1 }}>
          {profile.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 40,
            fontWeight: 600,
            marginTop: 18,
            background: "linear-gradient(90deg, #818cf8, #c084fc, #f0abfc)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {profile.role}
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#a1a1aa", marginTop: 28 }}>
          Laravel · Node.js · React · Next.js · Vue · Claude · LangChain · RAG
        </div>
      </div>
    ),
    { ...size },
  );
}
