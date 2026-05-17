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
          background: "#E8DCC4",
          borderRadius: 16,
        }}
      >
        <span
          style={{
            fontSize: 16,
            fontWeight: 600,
            color: "#B8956A",
            letterSpacing: 0,
            fontFamily: "Georgia, serif",
          }}
        >
          L
        </span>
      </div>
    ),
    { ...size },
  );
}
