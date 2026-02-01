import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { AnimatedText } from "../components/AnimatedText";
import { EtymologyArrow } from "../components/visuals/EtymologyArrow";

const DURATION = 480;

export const Scene2Etymology: React.FC = () => {
  const frame = useCurrentFrame();

  const arrowOpacity = interpolate(frame, [30, 55], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const arrowScale = interpolate(frame, [30, 55], [0.8, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  return (
    <SceneWrapper durationInFrames={DURATION} backgroundColor="#0d0d20">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 40,
          maxWidth: 1400,
        }}
      >
        <AnimatedText
          text="L'origine del nome"
          delay={5}
          fontSize={52}
          color="#ffffff"
          fontWeight="bold"
        />

        <AnimatedText
          text="Dal latino calx, calcis: pietra calcarea"
          delay={15}
          fontSize={30}
          color="#e0b0ff"
          fontStyle="italic"
          fontFamily="Georgia, Times New Roman, serif"
        />

        {/* Etymology arrow visual */}
        <div
          style={{
            marginTop: 40,
            opacity: arrowOpacity,
            transform: `scale(${arrowScale})`,
          }}
        >
          <EtymologyArrow scale={1.4} />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
            marginTop: 40,
            maxWidth: 1000,
          }}
        >
          <AnimatedText
            text="La calce era usata fin dall'antichità"
            delay={80}
            fontSize={28}
            color="#ccccdd"
          />
          <AnimatedText
            text="nelle malte per le costruzioni"
            delay={95}
            fontSize={28}
            color="#ccccdd"
          />
        </div>
      </div>
    </SceneWrapper>
  );
};
