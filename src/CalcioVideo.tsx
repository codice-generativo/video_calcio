import React from "react";
import { Sequence, AbsoluteFill } from "remotion";
import { Scene1Intro } from "./scenes/Scene1Intro";
import { Scene2Etymology } from "./scenes/Scene2Etymology";
import { Scene3Properties } from "./scenes/Scene3Properties";
import { Scene4Abundance } from "./scenes/Scene4Abundance";
import { Scene5Biology } from "./scenes/Scene5Biology";
import { Scene6DailyLife } from "./scenes/Scene6DailyLife";
import { Scene7Nutrition } from "./scenes/Scene7Nutrition";
import { Scene8CTA } from "./scenes/Scene8CTA";

/*
 * Struttura del video: 3600 frame totali @ 30 fps = 2 minuti
 *
 * Scena 1 – Intro / Tavola periodica:   frame 0–479     (16s)
 * Scena 2 – Etimologia:                  frame 480–959   (16s)
 * Scena 3 – Proprietà fisiche:           frame 960–1449  (16.3s)
 * Scena 4 – Abbondanza e minerali:       frame 1450–1939 (16.3s)
 * Scena 5 – Ruolo biologico:             frame 1940–2429 (16.3s)
 * Scena 6 – Vita quotidiana / Industria: frame 2430–2909 (16s)
 * Scena 7 – Nutrizione:                  frame 2910–3389 (16s)
 * Scena 8 – CTA finale:                  frame 3390–3599 (7s)
 */

export const CalcioVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#0a0a1a" }}>
      <Sequence from={0} durationInFrames={480} name="Intro – Tavola periodica">
        <Scene1Intro />
      </Sequence>

      <Sequence from={480} durationInFrames={480} name="Etimologia">
        <Scene2Etymology />
      </Sequence>

      <Sequence from={960} durationInFrames={490} name="Proprietà fisiche">
        <Scene3Properties />
      </Sequence>

      <Sequence from={1450} durationInFrames={490} name="Abbondanza e minerali">
        <Scene4Abundance />
      </Sequence>

      <Sequence from={1940} durationInFrames={490} name="Ruolo biologico">
        <Scene5Biology />
      </Sequence>

      <Sequence from={2430} durationInFrames={480} name="Vita quotidiana e industria">
        <Scene6DailyLife />
      </Sequence>

      <Sequence from={2910} durationInFrames={480} name="Nutrizione">
        <Scene7Nutrition />
      </Sequence>

      <Sequence from={3390} durationInFrames={210} name="CTA – Iscriviti al canale">
        <Scene8CTA />
      </Sequence>
    </AbsoluteFill>
  );
};
