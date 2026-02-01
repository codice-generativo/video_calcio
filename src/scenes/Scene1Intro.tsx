import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { AnimatedText } from "../components/AnimatedText";
import { PeriodicTableCa } from "../components/visuals/PeriodicTableCa";

const DURATION = 480;

export const Scene1Intro: React.FC = () => {
  const frame = useCurrentFrame();

  const elementScale = interpolate(frame, [10, 40], [0.5, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.back(1.5)),
  });

  const elementOpacity = interpolate(frame, [10, 30], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <SceneWrapper durationInFrames={DURATION} backgroundColor="#0a0a1a">
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
        {/* Title */}
        <AnimatedText
          text="IL CALCIO"
          delay={5}
          fontSize={72}
          color="#ffffff"
          fontWeight="bold"
        />

        <AnimatedText
          text="Elemento chimico della tavola periodica"
          delay={15}
          fontSize={32}
          color="#80d4ff"
          fontWeight={400}
        />

        {/* Periodic table element */}
        <div
          style={{
            marginTop: 30,
            opacity: elementOpacity,
            transform: `scale(${elementScale})`,
          }}
        >
          <PeriodicTableCa scale={1.6} />
        </div>

        {/* Key info */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 60,
            marginTop: 30,
          }}
        >
          <AnimatedText
            text="Numero atomico: 20"
            delay={50}
            fontSize={26}
            color="#aaaacc"
          />
          <AnimatedText
            text="Gruppo 2"
            delay={60}
            fontSize={26}
            color="#aaaacc"
          />
          <AnimatedText
            text="Periodo 4"
            delay={70}
            fontSize={26}
            color="#aaaacc"
          />
          <AnimatedText
            text="Blocco s"
            delay={80}
            fontSize={26}
            color="#aaaacc"
          />
        </div>

        <AnimatedText
          text="Metallo alcalino-terroso"
          delay={100}
          fontSize={28}
          color="#9b59b6"
          fontWeight={600}
        />
      </div>
    </SceneWrapper>
  );
};
