import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
  Easing,
} from "remotion";

const DURATION = 210;

export const Scene8CTA: React.FC = () => {
  const frame = useCurrentFrame();

  // Background pulse
  const bgPulse = interpolate(
    frame % 40,
    [0, 20, 40],
    [0.95, 1, 0.95],
    { extrapolateRight: "clamp" }
  );

  // Main text entrance
  const textScale = interpolate(frame, [5, 35], [0.3, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.back(1.7)),
  });

  const textOpacity = interpolate(frame, [5, 25], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Button animation
  const buttonOpacity = interpolate(frame, [40, 60], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const buttonScale = interpolate(frame, [40, 60], [0.8, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.back(1.5)),
  });

  // Pulsing glow on button
  const glowIntensity = interpolate(
    frame % 50,
    [0, 25, 50],
    [0.4, 0.8, 0.4],
    { extrapolateRight: "clamp" }
  );

  // Arrow bounce
  const arrowY = interpolate(
    frame % 30,
    [0, 15, 30],
    [0, -8, 0],
    { extrapolateRight: "clamp" }
  );

  // Fade out at the very end
  const fadeOut = interpolate(
    frame,
    [DURATION - 15, DURATION],
    [1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(ellipse at center, #1a0a2e ${bgPulse * 30}%, #0a0a1a 100%)`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 60,
        fontFamily: "Inter, Noto Sans, Segoe UI, Roboto, Arial, sans-serif",
        opacity: fadeOut,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 40,
        }}
      >
        {/* Thank you text */}
        <div
          style={{
            opacity: textOpacity,
            transform: `scale(${textScale})`,
            color: "#ffffff",
            fontSize: 38,
            fontWeight: 500,
            textAlign: "center",
          }}
        >
          Ti è piaciuto il video?
        </div>

        {/* Main CTA */}
        <div
          style={{
            opacity: buttonOpacity,
            transform: `scale(${buttonScale})`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 24,
          }}
        >
          {/* Arrow pointing down */}
          <div
            style={{
              transform: `translateY(${arrowY}px)`,
              color: "#ff4444",
              fontSize: 48,
            }}
          >
            {"▼"}
          </div>

          {/* Subscribe button */}
          <div
            style={{
              backgroundColor: "#ff0000",
              color: "#ffffff",
              fontSize: 52,
              fontWeight: "bold",
              padding: "24px 64px",
              borderRadius: 12,
              letterSpacing: 3,
              boxShadow: `0 0 ${glowIntensity * 60}px ${glowIntensity * 30}px rgba(255, 0, 0, ${glowIntensity * 0.4})`,
              textAlign: "center",
            }}
          >
            ISCRIVITI AL CANALE
          </div>

          {/* Bell icon (SVG) */}
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            style={{ opacity: buttonOpacity }}
          >
            {/* Bell body */}
            <path
              d="M30 8 C30 8, 12 18, 12 32 C12 40, 12 44, 8 48 L52 48 C48 44, 48 40, 48 32 C48 18, 30 8, 30 8Z"
              fill="#ffd700"
              stroke="#daa520"
              strokeWidth="1.5"
            />
            {/* Clapper */}
            <circle cx="30" cy="52" r="5" fill="#ffd700" stroke="#daa520" strokeWidth="1" />
            {/* Top knob */}
            <circle cx="30" cy="8" r="3" fill="#ffd700" />
          </svg>
        </div>
      </div>
    </AbsoluteFill>
  );
};
