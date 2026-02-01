import React from "react";
import { Composition } from "remotion";
import { CalcioVideo } from "./CalcioVideo";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="CalcioVideo"
        component={CalcioVideo}
        durationInFrames={3600}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
