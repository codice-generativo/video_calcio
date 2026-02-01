import React from "react";
import { interpolate, useCurrentFrame, Easing } from "remotion";

interface BulletPointProps {
  text: string;
  delay?: number;
  fontSize?: number;
  color?: string;
  bulletColor?: string;
  maxWidth?: number;
}

export const BulletPoint: React.FC<BulletPointProps> = ({
  text,
  delay = 0,
  fontSize = 26,
  color = "#ccccdd",
  bulletColor = "#00d4ff",
  maxWidth = 1100,
}) => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [delay, delay + 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  const translateX = interpolate(frame, [delay, delay + 15], [-30, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  return (
    <div
      style={{
        opacity,
        transform: `translateX(${translateX}px)`,
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        gap: 16,
        maxWidth,
      }}
    >
      <span
        style={{
          color: bulletColor,
          fontSize: fontSize + 4,
          lineHeight: 1.4,
          flexShrink: 0,
        }}
      >
        ●
      </span>
      <span
        style={{
          color,
          fontSize,
          lineHeight: 1.4,
          fontFamily: "Inter, Noto Sans, Segoe UI, Roboto, Arial, sans-serif",
        }}
      >
        {text}
      </span>
    </div>
  );
};
