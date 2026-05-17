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
          background: "linear-gradient(135deg, #F0E5D2 0%, #DCC8AA 100%)",
          borderRadius: 36,
        }}
      >
        <span
          style={{
            fontSize: 92,
            fontWeight: 500,
            color: "#B8956A",
            letterSpacing: 4,
            fontFamily: "Georgia, serif",
            fontStyle: "italic",
          }}
        >
          L
        </span>
      </div>
    ),
    { ...size },
  );
}
