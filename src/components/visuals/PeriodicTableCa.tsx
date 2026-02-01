import React from "react";

export const PeriodicTableCa: React.FC<{ scale?: number }> = ({
  scale = 1,
}) => {
  const size = 200 * scale;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer border */}
      <rect
        x="10"
        y="10"
        width="180"
        height="180"
        rx="12"
        fill="#1a1a2e"
        stroke="#00d4ff"
        strokeWidth="3"
      />
      {/* Inner glow */}
      <rect
        x="16"
        y="16"
        width="168"
        height="168"
        rx="8"
        fill="none"
        stroke="#00d4ff"
        strokeWidth="1"
        opacity="0.3"
      />
      {/* Atomic number */}
      <text
        x="30"
        y="52"
        fill="#00d4ff"
        fontSize="24"
        fontFamily="Inter, Noto Sans, Segoe UI, Roboto, Arial, sans-serif"
        fontWeight="bold"
      >
        20
      </text>
      {/* Symbol */}
      <text
        x="100"
        y="125"
        fill="#ffffff"
        fontSize="72"
        fontFamily="Inter, Noto Sans, Segoe UI, Roboto, Arial, sans-serif"
        fontWeight="bold"
        textAnchor="middle"
      >
        Ca
      </text>
      {/* Name */}
      <text
        x="100"
        y="158"
        fill="#aaaacc"
        fontSize="18"
        fontFamily="Inter, Noto Sans, Segoe UI, Roboto, Arial, sans-serif"
        textAnchor="middle"
      >
        Calcio
      </text>
      {/* Mass */}
      <text
        x="100"
        y="180"
        fill="#666688"
        fontSize="14"
        fontFamily="Inter, Noto Sans, Segoe UI, Roboto, Arial, sans-serif"
        textAnchor="middle"
      >
        40,078
      </text>
      {/* Group/Period label */}
      <text
        x="170"
        y="52"
        fill="#666688"
        fontSize="12"
        fontFamily="Inter, Noto Sans, Segoe UI, Roboto, Arial, sans-serif"
        textAnchor="end"
      >
        Gruppo 2
      </text>
    </svg>
  );
};
