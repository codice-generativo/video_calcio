import React from "react";

export const OxidationIcon: React.FC<{ scale?: number }> = ({
  scale = 1,
}) => {
  const size = 160 * scale;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 160 160"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Metal block */}
      <rect
        x="20"
        y="60"
        width="60"
        height="60"
        rx="4"
        fill="#c0c0c0"
        stroke="#888"
        strokeWidth="2"
      />
      <text
        x="50"
        y="97"
        fill="#333"
        fontSize="18"
        fontFamily="Inter, Noto Sans, Segoe UI, Roboto, Arial, sans-serif"
        fontWeight="bold"
        textAnchor="middle"
      >
        Ca
      </text>

      {/* Arrow */}
      <line
        x1="85"
        y1="90"
        x2="105"
        y2="90"
        stroke="#ff6b6b"
        strokeWidth="2"
      />
      <polygon points="105,84 115,90 105,96" fill="#ff6b6b" />

      {/* O₂ bubbles */}
      <text
        x="100"
        y="55"
        fill="#ff6b6b"
        fontSize="14"
        fontFamily="Inter, Noto Sans, Segoe UI, Roboto, Arial, sans-serif"
      >
        O₂
      </text>

      {/* Oxidized block */}
      <rect
        x="118"
        y="60"
        width="35"
        height="60"
        rx="4"
        fill="#a0a0a0"
        stroke="#666"
        strokeWidth="2"
      />
      {/* Oxide layer */}
      <rect
        x="118"
        y="60"
        width="35"
        height="15"
        rx="4"
        fill="#8B7355"
        opacity="0.7"
      />

      {/* Water drop + H₂ */}
      <ellipse cx="50" cy="140" rx="15" ry="8" fill="#4a9eff" opacity="0.5" />
      <text
        x="50"
        y="145"
        fill="#4a9eff"
        fontSize="11"
        fontFamily="Inter, Noto Sans, Segoe UI, Roboto, Arial, sans-serif"
        textAnchor="middle"
      >
        H₂O
      </text>
      <text
        x="110"
        y="145"
        fill="#aaa"
        fontSize="11"
        fontFamily="Inter, Noto Sans, Segoe UI, Roboto, Arial, sans-serif"
        textAnchor="middle"
      >
        → H₂ ↑
      </text>
    </svg>
  );
};
