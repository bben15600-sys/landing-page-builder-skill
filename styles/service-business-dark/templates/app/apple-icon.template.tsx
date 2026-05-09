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
          background: "linear-gradient(135deg, #1A2942 0%, #0F1D35 100%)",
          borderRadius: 36,
        }}
      >
        <svg
          width="120"
          height="120"
          viewBox="0 0 24 24"
          fill="#F5B819"
          stroke="#1A2942"
          strokeWidth="0.6"
          strokeLinejoin="round"
        >
          <path d="M14 2 L7 13 H11 L9.5 22 L17 11 H13 L14 2 Z" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
