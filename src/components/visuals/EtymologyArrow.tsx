import React from "react";

export const EtymologyArrow: React.FC<{ scale?: number }> = ({
  scale = 1,
}) => {
  const width = 500 * scale;
  const height = 120 * scale;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 500 120"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Left box: calx */}
      <rect
        x="10"
        y="20"
        width="140"
        height="80"
        rx="10"
        fill="#2a1a3e"
        stroke="#9b59b6"
        strokeWidth="2"
      />
      <text
        x="80"
        y="52"
        fill="#e0b0ff"
        fontSize="14"
        fontFamily="Inter, Noto Sans, Segoe UI, Roboto, Arial, sans-serif"
        textAnchor="middle"
      >
        Latino
      </text>
      <text
        x="80"
        y="80"
        fill="#ffffff"
        fontSize="26"
        fontFamily="Georgia, Times New Roman, serif"
        fontWeight="bold"
        textAnchor="middle"
        fontStyle="italic"
      >
        calx, calcis
      </text>

      {/* Arrow */}
      <line
        x1="160"
        y1="60"
        x2="320"
        y2="60"
        stroke="#00d4ff"
        strokeWidth="3"
        strokeDasharray="8,4"
      />
      <polygon points="320,48 345,60 320,72" fill="#00d4ff" />

      {/* Middle label */}
      <text
        x="240"
        y="45"
        fill="#888"
        fontSize="12"
        fontFamily="Inter, Noto Sans, Segoe UI, Roboto, Arial, sans-serif"
        textAnchor="middle"
      >
        pietra calcarea
      </text>

      {/* Right box: calcio */}
      <rect
        x="350"
        y="20"
        width="140"
        height="80"
        rx="10"
        fill="#1a2e3e"
        stroke="#00d4ff"
        strokeWidth="2"
      />
      <text
        x="420"
        y="52"
        fill="#80d4ff"
        fontSize="14"
        fontFamily="Inter, Noto Sans, Segoe UI, Roboto, Arial, sans-serif"
        textAnchor="middle"
      >
        Italiano
      </text>
      <text
        x="420"
        y="80"
        fill="#ffffff"
        fontSize="28"
        fontFamily="Inter, Noto Sans, Segoe UI, Roboto, Arial, sans-serif"
        fontWeight="bold"
        textAnchor="middle"
      >
        Calcio
      </text>
    </svg>
  );
};
