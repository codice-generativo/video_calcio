import React from "react";
import { interpolate, useCurrentFrame, Easing } from "remotion";

interface AnimatedTextProps {
  text: string;
  delay?: number;
  fontSize?: number;
  color?: string;
  fontWeight?: string | number;
  textAlign?: "left" | "center" | "right";
  maxWidth?: number;
  lineHeight?: number;
  fontStyle?: "normal" | "italic";
  fontFamily?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  delay = 0,
  fontSize = 28,
  color = "#e0e0e0",
  fontWeight = "normal",
  textAlign = "center",
  maxWidth = 1200,
  lineHeight = 1.5,
  fontStyle = "normal",
  fontFamily = "Inter, Noto Sans, Segoe UI, Roboto, Arial, sans-serif",
}) => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [delay, delay + 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  const translateY = interpolate(frame, [delay, delay + 20], [20, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  return (
    <div
      style={{
        opacity,
        transform: `translateY(${translateY}px)`,
        fontSize,
        color,
        fontWeight,
        textAlign,
        maxWidth,
        lineHeight,
        fontStyle,
        fontFamily,
      }}
    >
      {text}
    </div>
  );
};
