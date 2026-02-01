import React from "react";

const MilkBottle: React.FC<{ x: number; y: number }> = ({ x, y }) => (
  <g transform={`translate(${x}, ${y})`}>
    {/* Bottle body */}
    <rect x="8" y="25" width="24" height="40" rx="3" fill="#f0f4ff" stroke="#aabbdd" strokeWidth="1.5" />
    {/* Neck */}
    <rect x="13" y="12" width="14" height="15" rx="2" fill="#f0f4ff" stroke="#aabbdd" strokeWidth="1.5" />
    {/* Cap */}
    <rect x="11" y="8" width="18" height="6" rx="2" fill="#4a9eff" />
    {/* Milk level */}
    <rect x="10" y="40" width="20" height="23" rx="2" fill="#e8f0ff" />
    <text
      x="20"
      y="82"
      fill="#aabbdd"
      fontSize="10"
      fontFamily="Inter, Noto Sans, Segoe UI, Roboto, Arial, sans-serif"
      textAnchor="middle"
    >
      Latte
    </text>
  </g>
);

const CheeseWedge: React.FC<{ x: number; y: number }> = ({ x, y }) => (
  <g transform={`translate(${x}, ${y})`}>
    {/* Cheese body */}
    <polygon points="5,55 40,55 40,35 5,55" fill="#ffd700" stroke="#daa520" strokeWidth="1.5" />
    <polygon points="5,55 40,35 25,15" fill="#ffe44d" stroke="#daa520" strokeWidth="1.5" />
    {/* Holes */}
    <circle cx="22" cy="42" r="3" fill="#daa520" opacity="0.4" />
    <circle cx="32" cy="48" r="2" fill="#daa520" opacity="0.4" />
    <text
      x="22"
      y="75"
      fill="#daa520"
      fontSize="10"
      fontFamily="Inter, Noto Sans, Segoe UI, Roboto, Arial, sans-serif"
      textAnchor="middle"
    >
      Formaggio
    </text>
  </g>
);

const YogurtCup: React.FC<{ x: number; y: number }> = ({ x, y }) => (
  <g transform={`translate(${x}, ${y})`}>
    {/* Cup */}
    <path d="M5,25 L10,60 L35,60 L40,25 Z" fill="#ff9ecd" stroke="#dd6ea0" strokeWidth="1.5" />
    {/* Lid */}
    <rect x="2" y="20" width="41" height="6" rx="2" fill="#dd6ea0" />
    {/* Yogurt top */}
    <ellipse cx="22" cy="32" rx="13" ry="3" fill="#ffe0ef" />
    <text
      x="22"
      y="78"
      fill="#dd6ea0"
      fontSize="10"
      fontFamily="Inter, Noto Sans, Segoe UI, Roboto, Arial, sans-serif"
      textAnchor="middle"
    >
      Yogurt
    </text>
  </g>
);

const Vegetable: React.FC<{ x: number; y: number }> = ({ x, y }) => (
  <g transform={`translate(${x}, ${y})`}>
    {/* Leaf / broccoli */}
    <circle cx="20" cy="30" r="12" fill="#2ecc71" />
    <circle cx="12" cy="25" r="9" fill="#27ae60" />
    <circle cx="28" cy="25" r="9" fill="#27ae60" />
    <circle cx="20" cy="20" r="8" fill="#2ecc71" />
    {/* Stem */}
    <rect x="18" y="40" width="5" height="18" rx="2" fill="#1a8a4a" />
    <text
      x="20"
      y="75"
      fill="#2ecc71"
      fontSize="10"
      fontFamily="Inter, Noto Sans, Segoe UI, Roboto, Arial, sans-serif"
      textAnchor="middle"
    >
      Verdure
    </text>
  </g>
);

const FishIcon: React.FC<{ x: number; y: number }> = ({ x, y }) => (
  <g transform={`translate(${x}, ${y})`}>
    {/* Fish body */}
    <ellipse cx="25" cy="35" rx="18" ry="12" fill="#5dade2" stroke="#2e86c1" strokeWidth="1.5" />
    {/* Tail */}
    <polygon points="42,35 55,22 55,48" fill="#5dade2" stroke="#2e86c1" strokeWidth="1.5" />
    {/* Eye */}
    <circle cx="16" cy="32" r="3" fill="white" />
    <circle cx="15" cy="31" r="1.5" fill="#1a1a2e" />
    {/* Fin */}
    <path d="M25,24 L30,15 L35,24" fill="#2e86c1" opacity="0.6" />
    <text
      x="28"
      y="65"
      fill="#5dade2"
      fontSize="10"
      fontFamily="Inter, Noto Sans, Segoe UI, Roboto, Arial, sans-serif"
      textAnchor="middle"
    >
      Pesce
    </text>
  </g>
);

export const NutritionIcons: React.FC<{ scale?: number }> = ({
  scale = 1,
}) => {
  const width = 480 * scale;
  const height = 100 * scale;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 480 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <MilkBottle x={20} y={5} />
      <YogurtCup x={100} y={5} />
      <CheeseWedge x={190} y={5} />
      <Vegetable x={290} y={5} />
      <FishIcon x={370} y={5} />
    </svg>
  );
};
