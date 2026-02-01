import React from "react";

export const MetallurgyIcon: React.FC<{ scale?: number }> = ({
  scale = 1,
}) => {
  const width = 160 * scale;
  const height = 140 * scale;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 160 140"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Crucible */}
      <path
        d="M40,40 L30,110 C28,120 52,125 80,125 C108,125 132,120 130,110 L120,40 Z"
        fill="#555"
        stroke="#888"
        strokeWidth="2"
      />
      {/* Molten metal */}
      <ellipse cx="80" cy="60" rx="38" ry="10" fill="#ff6600" opacity="0.8" />
      {/* Glow */}
      <ellipse cx="80" cy="55" rx="25" ry="6" fill="#ffaa00" opacity="0.5" />
      {/* Sparks */}
      <circle cx="55" cy="35" r="2" fill="#ffcc00" opacity="0.8" />
      <circle cx="95" cy="30" r="2.5" fill="#ffcc00" opacity="0.6" />
      <circle cx="70" cy="25" r="1.5" fill="#ffee88" opacity="0.7" />
      <circle cx="105" cy="38" r="1.5" fill="#ffcc00" opacity="0.5" />

      {/* Label */}
      <text
        x="80"
        y="138"
        fill="#ff8844"
        fontSize="11"
        fontFamily="Inter, Noto Sans, Segoe UI, Roboto, Arial, sans-serif"
        textAnchor="middle"
      >
        Metallurgia
      </text>
    </svg>
  );
};
