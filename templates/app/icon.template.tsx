import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1A2942",
          borderRadius: 8,
        }}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="#F5B819"
          stroke="#1A2942"
          strokeWidth="0.8"
          strokeLinejoin="round"
        >
          <path d="M14 2 L7 13 H11 L9.5 22 L17 11 H13 L14 2 Z" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
