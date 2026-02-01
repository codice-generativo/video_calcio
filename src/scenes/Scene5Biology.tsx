import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { AnimatedText } from "../components/AnimatedText";
import { BulletPoint } from "../components/BulletPoint";
import { BoneToothIcon } from "../components/visuals/BoneToothIcon";

const DURATION = 490;

export const Scene5Biology: React.FC = () => {
  const frame = useCurrentFrame();

  const iconOpacity = interpolate(frame, [20, 45], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const iconScale = interpolate(frame, [20, 45], [0.7, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.back(1.3)),
  });

  // Pulsing Ca2+ indicator
  const pulse = interpolate(
    frame % 60,
    [0, 30, 60],
    [1, 1.15, 1],
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
          gap: 28,
          maxWidth: 1400,
          width: "100%",
        }}
      >
        <AnimatedText
          text="Ruolo biologico"
          delay={5}
          fontSize={50}
          color="#ffffff"
          fontWeight="bold"
        />

        <AnimatedText
          text="Il calcio è ovunque negli esseri viventi"
          delay={15}
          fontSize={28}
          color="#80d4ff"
        />

        {/* Bone/tooth visual */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 50,
            marginTop: 15,
            opacity: iconOpacity,
            transform: `scale(${iconScale})`,
          }}
        >
          <BoneToothIcon scale={1.5} />

          {/* Ca2+ messenger */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
              transform: `scale(${pulse})`,
            }}
          >
            <div
              style={{
                width: 100,
                height: 100,
                borderRadius: "50%",
                border: "3px solid #00d4ff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(0, 212, 255, 0.1)",
              }}
            >
              <span
                style={{
                  color: "#00d4ff",
                  fontSize: 30,
                  fontWeight: "bold",
                  fontFamily:
                    "Inter, Noto Sans, Segoe UI, Roboto, Arial, sans-serif",
                }}
              >
                Ca²⁺
              </span>
            </div>
            <span
              style={{
                color: "#80d4ff",
                fontSize: 16,
                fontFamily:
                  "Inter, Noto Sans, Segoe UI, Roboto, Arial, sans-serif",
              }}
            >
              Messaggero chimico
            </span>
          </div>
        </div>

        {/* Bullet points */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            marginTop: 15,
            maxWidth: 1100,
          }}
        >
          <BulletPoint
            text="Ossa e denti: fosfato di calcio (idrossiapatite) nel collagene"
            delay={60}
          />
          <BulletPoint
            text="Regola la contrazione muscolare e i segnali nervosi"
            delay={80}
          />
          <BulletPoint
            text="Essenziale per la coagulazione del sangue"
            delay={100}
          />
          <BulletPoint
            text="Nelle piante: crescita, pareti cellulari e risposta agli stress"
            delay={120}
            bulletColor="#2ecc71"
          />
        </div>
      </div>
    </SceneWrapper>
  );
};
