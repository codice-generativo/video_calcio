import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { AnimatedText } from "../components/AnimatedText";
import { BulletPoint } from "../components/BulletPoint";
import { MineralBadges } from "../components/visuals/MineralBadges";

const DURATION = 490;

export const Scene4Abundance: React.FC = () => {
  const frame = useCurrentFrame();

  const badgesOpacity = interpolate(frame, [60, 85], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const badgesY = interpolate(frame, [60, 85], [30, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  // Animated percentage bar
  const barWidth = interpolate(frame, [25, 70], [0, 300], {
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
          text="Abbondanza e minerali"
          delay={5}
          fontSize={50}
          color="#ffffff"
          fontWeight="bold"
        />

        {/* Percentage visualization */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 10,
            marginTop: 10,
          }}
        >
          <AnimatedText
            text="5° elemento più abbondante nella crosta terrestre"
            delay={15}
            fontSize={28}
            color="#80d4ff"
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginTop: 8,
            }}
          >
            <div
              style={{
                width: 400,
                height: 20,
                backgroundColor: "#1a1a3e",
                borderRadius: 10,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: barWidth,
                  height: "100%",
                  backgroundColor: "#00d4ff",
                  borderRadius: 10,
                }}
              />
            </div>
            <AnimatedText
              text="~4% in massa"
              delay={35}
              fontSize={22}
              color="#aaaacc"
            />
          </div>
        </div>

        {/* Mineral badges */}
        <div
          style={{
            marginTop: 25,
            opacity: badgesOpacity,
            transform: `translateY(${badgesY}px)`,
          }}
        >
          <MineralBadges scale={1.3} />
        </div>

        {/* Additional info */}
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
            text="Presente nell'acqua di mare come ioni calcio"
            delay={100}
          />
          <BulletPoint
            text="Contribuisce alla «durezza» dell'acqua insieme al magnesio"
            delay={120}
          />
          <BulletPoint
            text="Sei isotopi naturali stabili, tra cui Ca 40 e Ca 48"
            delay={140}
          />
        </div>
      </div>
    </SceneWrapper>
  );
};
