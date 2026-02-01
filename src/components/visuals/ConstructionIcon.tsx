import React from "react";

export const ConstructionIcon: React.FC<{ scale?: number }> = ({
  scale = 1,
}) => {
  const width = 200 * scale;
  const height = 160 * scale;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 160"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Pyramid silhouette */}
      <polygon
        points="100,15 25,130 175,130"
        fill="#d4a56a"
        opacity="0.3"
        stroke="#d4a56a"
        strokeWidth="2"
      />
      {/* Brick lines */}
      <line x1="50" y1="90" x2="150" y2="90" stroke="#c4955a" strokeWidth="1" opacity="0.5" />
      <line x1="40" y1="110" x2="160" y2="110" stroke="#c4955a" strokeWidth="1" opacity="0.5" />
      <line x1="75" y1="70" x2="125" y2="70" stroke="#c4955a" strokeWidth="1" opacity="0.5" />

      {/* Vertical brick joints */}
      <line x1="85" y1="70" x2="80" y2="90" stroke="#c4955a" strokeWidth="1" opacity="0.3" />
      <line x1="115" y1="70" x2="120" y2="90" stroke="#c4955a" strokeWidth="1" opacity="0.3" />
      <line x1="70" y1="90" x2="65" y2="110" stroke="#c4955a" strokeWidth="1" opacity="0.3" />
      <line x1="100" y1="90" x2="100" y2="110" stroke="#c4955a" strokeWidth="1" opacity="0.3" />
      <line x1="130" y1="90" x2="135" y2="110" stroke="#c4955a" strokeWidth="1" opacity="0.3" />

      {/* Label */}
      <text
        x="100"
        y="150"
        fill="#d4a56a"
        fontSize="13"
        fontFamily="Inter, Noto Sans, Segoe UI, Roboto, Arial, sans-serif"
        textAnchor="middle"
      >
        Calcare nelle costruzioni
      </text>
    </svg>
  );
};
