import { ImageResponse } from "next/og";

export const alt = "SHAI SHALOM · Wedding Stories";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const bg =
    "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "#0a0a0a",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={bg}
          alt=""
          width={1200}
          height={630}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "grayscale(100%) brightness(0.55)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.85) 100%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "72px 88px",
            color: "white",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 18,
              letterSpacing: "0.5em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.7)",
            }}
          >
            WEDDING PHOTOGRAPHY · EST 2013
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: 32,
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.7)",
                marginBottom: 18,
              }}
            >
              Wedding Stories
            </div>
            <div
              style={{
                fontFamily: "serif",
                fontSize: 168,
                fontStyle: "italic",
                lineHeight: 1,
                letterSpacing: "-0.02em",
              }}
            >
              Shai Shalom
            </div>
            <div
              style={{
                marginTop: 28,
                fontSize: 28,
                color: "rgba(255,255,255,0.75)",
                letterSpacing: "0.05em",
              }}
            >
              Wedding photography — the story behind every glance
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: 18,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.6)",
            }}
          >
            <span>SHAISHALOM.PHOTO</span>
            <span>BASED IN TEL AVIV</span>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
