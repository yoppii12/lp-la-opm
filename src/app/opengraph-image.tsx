import { ImageResponse } from "next/og";
import { SITE } from "@/lib/constants";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#1a3a5c",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px 96px",
          fontFamily: "sans-serif",
        }}
      >
        {/* アクセントライン */}
        <div
          style={{
            width: 64,
            height: 6,
            background: "#f97316",
            borderRadius: 3,
            marginBottom: 40,
          }}
        />

        {/* サービス名 */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 900,
            color: "#ffffff",
            lineHeight: 1.1,
            marginBottom: 32,
            maxWidth: 900,
          }}
        >
          {SITE.name}
        </div>

        {/* 説明文（先頭60字） */}
        <div
          style={{
            fontSize: 32,
            color: "rgba(255,255,255,0.75)",
            lineHeight: 1.6,
            maxWidth: 860,
          }}
        >
          {SITE.description.slice(0, 60)}
        </div>

        {/* ドメイン */}
        <div
          style={{
            position: "absolute",
            bottom: 56,
            right: 96,
            fontSize: 24,
            color: "#f97316",
          }}
        >
          {SITE.baseUrl.replace("https://", "")}
        </div>
      </div>
    ),
    size
  );
}
