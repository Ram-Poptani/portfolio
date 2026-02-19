import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Ram Poptani — Full Stack Java Developer Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #110f0b 0%, #1c1814 50%, #110f0b 100%)",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background accents */}
        <div
          style={{
            position: "absolute",
            top: -100,
            left: -100,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "rgba(245, 158, 11, 0.08)",
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -100,
            right: -100,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(239, 68, 68, 0.06)",
            filter: "blur(80px)",
          }}
        />

        {/* Top accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "linear-gradient(90deg, #d97706, #f59e0b, #ef4444, #f59e0b, #d97706)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
            zIndex: 1,
          }}
        >
          {/* Initials badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 80,
              height: 80,
              borderRadius: 20,
              border: "2px solid rgba(245, 158, 11, 0.3)",
              background: "rgba(245, 158, 11, 0.1)",
              fontSize: 36,
              fontWeight: 800,
              color: "#f59e0b",
              marginBottom: 8,
            }}
          >
            RP
          </div>

          {/* Name */}
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              letterSpacing: -2,
              color: "#f5e6d3",
              lineHeight: 1,
            }}
          >
            Ram Poptani
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: 28,
              fontWeight: 600,
              color: "#f59e0b",
              lineHeight: 1,
              marginTop: 4,
            }}
          >
            Full Stack Java Developer
          </div>

          {/* Description */}
          <div
            style={{
              fontSize: 18,
              color: "#a8a29e",
              maxWidth: 700,
              textAlign: "center",
              lineHeight: 1.5,
              marginTop: 8,
            }}
          >
            Building scalable microservices & REST APIs with Java, Spring Boot, and cloud-native technologies
          </div>

          {/* Tech pills */}
          <div
            style={{
              display: "flex",
              gap: 12,
              marginTop: 16,
            }}
          >
            {["Java", "Spring Boot", "Kafka", "Docker", "Azure", "React"].map(
              (tech) => (
                <div
                  key={tech}
                  style={{
                    padding: "8px 20px",
                    borderRadius: 12,
                    background: "rgba(245, 158, 11, 0.08)",
                    border: "1px solid rgba(245, 158, 11, 0.2)",
                    color: "#fbbf24",
                    fontSize: 15,
                    fontWeight: 600,
                  }}
                >
                  {tech}
                </div>
              )
            )}
          </div>
        </div>

        {/* Bottom URL */}
        <div
          style={{
            position: "absolute",
            bottom: 28,
            fontSize: 16,
            color: "#78716c",
            fontWeight: 500,
          }}
        >
          rampoptani.dev
        </div>
      </div>
    ),
    { ...size }
  );
}
