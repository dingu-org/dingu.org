import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "dingu.org — an index of projects";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#f8f7f4",
          padding: "96px",
          fontFamily: "monospace",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 96,
            height: 96,
            borderRadius: "50%",
            background: "#171717",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 40,
          }}
        >
          <span style={{ color: "#ffffff", fontSize: 48, fontWeight: 600 }}>
            d<span style={{ color: "#00e676" }}>.</span>
          </span>
        </div>
        <div style={{ display: "flex", fontSize: 64, fontWeight: 600, color: "#000000" }}>
          dingu.org
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 20,
            fontSize: 28,
            color: "#57534e",
            maxWidth: 820,
          }}
        >
          An index of projects, some grown into tools.
        </div>
      </div>
    ),
    { ...size },
  );
}
