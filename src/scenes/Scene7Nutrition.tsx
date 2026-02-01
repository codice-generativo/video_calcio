import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { AnimatedText } from "../components/AnimatedText";
import { BulletPoint } from "../components/BulletPoint";
import { NutritionIcons } from "../components/visuals/NutritionIcons";

const DURATION = 480;

export const Scene7Nutrition: React.FC = () => {
  const frame = useCurrentFrame();

  const iconsOpacity = interpolate(frame, [25, 50], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const iconsScale = interpolate(frame, [25, 50], [0.85, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  return (
    <SceneWrapper durationInFrames={DURATION} backgroundColor="#0a0a1a">
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
          text="Ruolo nutrizionale"
          delay={5}
          fontSize={50}
          color="#ffffff"
          fontWeight="bold"
        />

        <AnimatedText
          text="Fonti alimentari principali"
          delay={15}
          fontSize={28}
          color="#80d4ff"
        />

        {/* Nutrition icons */}
        <div
          style={{
            marginTop: 15,
            opacity: iconsOpacity,
            transform: `scale(${iconsScale})`,
          }}
        >
          <NutritionIcons scale={1.5} />
        </div>

        {/* Details */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            marginTop: 20,
            maxWidth: 1100,
          }}
        >
          <BulletPoint
            text="Latte, yogurt, formaggi, verdure a foglia verde, legumi, pesce"
            delay={60}
            bulletColor="#2ecc71"
          />
          <BulletPoint
            text="Integratori: carbonato o citrato di calcio"
            delay={80}
            bulletColor="#e8c547"
          />
          <BulletPoint
            text="Presente in alcuni antiacidi (neutralizza l'acidità gastrica)"
            delay={100}
            bulletColor="#ff6b6b"
          />
          <BulletPoint
            text="L'assorbimento dipende da: vitamina D, pH dello stomaco, tipo di alimento, età"
            delay={120}
          />
          <BulletPoint
            text="Elevato nei bambini, più basso negli adulti e anziani"
            delay={140}
          />
        </div>
      </div>
    </SceneWrapper>
  );
};
