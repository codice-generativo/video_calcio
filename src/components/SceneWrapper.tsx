import React from "react";
import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  Easing,
} from "remotion";

interface SceneWrapperProps {
  children: React.ReactNode;
  backgroundColor?: string;
  durationInFrames: number;
}

export const SceneWrapper: React.FC<SceneWrapperProps> = ({
  children,
  backgroundColor = "#0a0a1a",
  durationInFrames,
}) => {
  const frame = useCurrentFrame();

  const fadeIn = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  const fadeOut = interpolate(
    frame,
    [durationInFrames - 20, durationInFrames],
    [1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.in(Easing.cubic),
    }
  );

  const opacity = Math.min(fadeIn, fadeOut);

  return (
    <AbsoluteFill
      style={{
        backgroundColor,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 60,
        fontFamily: "Inter, Noto Sans, Segoe UI, Roboto, Arial, sans-serif",
        opacity,
      }}
    >
      {children}
    </AbsoluteFill>
  );
};
