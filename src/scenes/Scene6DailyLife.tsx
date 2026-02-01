import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { AnimatedText } from "../components/AnimatedText";
import { BulletPoint } from "../components/BulletPoint";
import { ConstructionIcon } from "../components/visuals/ConstructionIcon";
import { MetallurgyIcon } from "../components/visuals/MetallurgyIcon";

const DURATION = 480;

export const Scene6DailyLife: React.FC = () => {
  const frame = useCurrentFrame();

  const iconsOpacity = interpolate(frame, [25, 50], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const iconsY = interpolate(frame, [25, 50], [20, 0], {
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
          gap: 28,
          maxWidth: 1400,
          width: "100%",
        }}
      >
        <AnimatedText
          text="Vita quotidiana e industria"
          delay={5}
          fontSize={50}
          color="#ffffff"
          fontWeight="bold"
        />

        {/* Icons row */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 80,
            marginTop: 15,
            opacity: iconsOpacity,
            transform: `translateY(${iconsY}px)`,
          }}
        >
          <ConstructionIcon scale={1.2} />
          <MetallurgyIcon scale={1.2} />
        </div>

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            marginTop: 20,
            maxWidth: 1100,
          }}
        >
          <AnimatedText
            text="Costruzioni"
            delay={55}
            fontSize={30}
            color="#d4a56a"
            fontWeight="bold"
            textAlign="left"
            maxWidth={1100}
          />
          <BulletPoint
            text="Calcare, cemento, calce, gesso e cartongesso"
            delay={65}
            bulletColor="#d4a56a"
          />
          <BulletPoint
            text="Il rivestimento della Grande Piramide di Giza è in calcare"
            delay={80}
            bulletColor="#d4a56a"
          />

          <div style={{ marginTop: 12 }}>
            <AnimatedText
              text="Industria metallurgica"
              delay={100}
              fontSize={30}
              color="#ff8844"
              fontWeight="bold"
              textAlign="left"
              maxWidth={1100}
            />
          </div>
          <BulletPoint
            text="Agente riducente e disossidante per acciaio e alluminio"
            delay={115}
            bulletColor="#ff8844"
          />
          <BulletPoint
            text="Cloruro di calcio: essiccante, fertilizzanti, mangimi"
            delay={130}
            bulletColor="#ff8844"
          />
        </div>
      </div>
    </SceneWrapper>
  );
};
