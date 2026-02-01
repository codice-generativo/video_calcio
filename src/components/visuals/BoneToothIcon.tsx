import React from "react";

export const BoneToothIcon: React.FC<{ scale?: number }> = ({
  scale = 1,
}) => {
  const width = 260 * scale;
  const height = 140 * scale;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 260 140"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Bone */}
      <g transform="translate(10, 20)">
        {/* Bone shaft */}
        <rect x="30" y="30" width="60" height="40" rx="8" fill="#f0e6d3" />
        {/* Bone ends */}
        <circle cx="30" cy="30" r="18" fill="#f0e6d3" />
        <circle cx="90" cy="30" r="18" fill="#f0e6d3" />
        <circle cx="30" cy="70" r="18" fill="#f0e6d3" />
        <circle cx="90" cy="70" r="18" fill="#f0e6d3" />
        {/* Bone highlights */}
        <circle cx="30" cy="30" r="8" fill="#fff5e6" opacity="0.5" />
        <circle cx="90" cy="70" r="8" fill="#fff5e6" opacity="0.5" />
        <text
          x="60"
          y="108"
          fill="#ccbbaa"
          fontSize="12"
          fontFamily="Inter, Noto Sans, Segoe UI, Roboto, Arial, sans-serif"
          textAnchor="middle"
        >
          Ossa
        </text>
      </g>

      {/* Tooth */}
      <g transform="translate(145, 15)">
        {/* Crown */}
        <path
          d="M30 10 C10 10, 0 30, 5 50 C8 60, 15 65, 20 60 L25 75 C27 80, 33 80, 35 75 L40 60 C45 65, 52 60, 55 50 C60 30, 50 10, 30 10Z"
          fill="#f5f5f0"
          stroke="#ddd"
          strokeWidth="1.5"
        />
        {/* Root */}
        <path
          d="M22 65 L20 95 C19 100, 25 100, 25 95 L27 75"
          fill="#e8ddd0"
          stroke="#ccc"
          strokeWidth="1"
        />
        <path
          d="M38 65 L40 95 C41 100, 35 100, 35 95 L33 75"
          fill="#e8ddd0"
          stroke="#ccc"
          strokeWidth="1"
        />
        <text
          x="30"
          y="118"
          fill="#ccbbaa"
          fontSize="12"
          fontFamily="Inter, Noto Sans, Segoe UI, Roboto, Arial, sans-serif"
          textAnchor="middle"
        >
          Denti
        </text>
      </g>

      {/* Ca2+ label */}
      <g transform="translate(225, 50)">
        <circle cx="15" cy="15" r="15" fill="#00d4ff" opacity="0.2" />
        <text
          x="15"
          y="20"
          fill="#00d4ff"
          fontSize="14"
          fontFamily="Inter, Noto Sans, Segoe UI, Roboto, Arial, sans-serif"
          fontWeight="bold"
          textAnchor="middle"
        >
          Ca²⁺
        </text>
      </g>
    </svg>
  );
};
