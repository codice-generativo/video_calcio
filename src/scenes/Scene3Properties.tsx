import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { AnimatedText } from "../components/AnimatedText";
import { BulletPoint } from "../components/BulletPoint";
import { FlameIcon } from "../components/visuals/FlameIcon";
import { OxidationIcon } from "../components/visuals/OxidationIcon";

const DURATION = 490;

export const Scene3Properties: React.FC = () => {
  const frame = useCurrentFrame();

  const iconsOpacity = interpolate(frame, [40, 65], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const flameGlow = interpolate(
    frame,
    [60, 90, 120, 150],
    [0.7, 1, 0.7, 1],
    {
      extrapolateRight: "clamp",
    }
  );

  return (
    <SceneWrapper durationInFrames={DURATION} backgroundColor="#0a0a1a">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 30,
          maxWidth: 1400,
          width: "100%",
        }}
      >
        <AnimatedText
          text="Proprietà fisiche"
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
            gap: 60,
            marginTop: 20,
            opacity: iconsOpacity,
          }}
        >
          <OxidationIcon scale={1.1} />
          <div style={{ opacity: flameGlow }}>
            <FlameIcon scale={1.1} />
          </div>
        </div>

        {/* Bullet points */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18,
            marginTop: 20,
            maxWidth: 1100,
          }}
        >
          <BulletPoint
            text="Metallo bianco-argenteo, relativamente morbido"
            delay={50}
          />
          <BulletPoint
            text="Si ossida rapidamente all'aria"
            delay={70}
          />
          <BulletPoint
            text="Reagisce con l'acqua liberando idrogeno"
            delay={90}
          />
          <BulletPoint
            text="Saggio alla fiamma: colore giallo-arancione"
            delay={110}
            bulletColor="#ffa500"
          />
          <BulletPoint
            text="In natura: quasi sempre combinato in composti (carbonato, solfato, fosfato, silicato)"
            delay={130}
          />
        </div>
      </div>
    </SceneWrapper>
  );
};
