import React from "react";

interface MineralBadgeProps {
  name: string;
  color: string;
  x: number;
  y: number;
}

const MineralBadge: React.FC<MineralBadgeProps> = ({ name, color, x, y }) => (
  <g>
    {/* Crystal shape */}
    <polygon
      points={`${x},${y - 28} ${x + 24},${y - 10} ${x + 20},${y + 18} ${x - 20},${y + 18} ${x - 24},${y - 10}`}
      fill={color}
      opacity="0.2"
      stroke={color}
      strokeWidth="2"
    />
    <text
      x={x}
      y={y + 5}
      fill="#ffffff"
      fontSize="13"
      fontFamily="Inter, Noto Sans, Segoe UI, Roboto, Arial, sans-serif"
      fontWeight="600"
      textAnchor="middle"
    >
      {name}
    </text>
  </g>
);

export const MineralBadges: React.FC<{ scale?: number }> = ({
  scale = 1,
}) => {
  const width = 520 * scale;
  const height = 100 * scale;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 520 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <MineralBadge name="Calcite" color="#e8c547" x={55} y={50} />
      <MineralBadge name="Aragonite" color="#47c5e8" x={155} y={50} />
      <MineralBadge name="Gesso" color="#e8e8e8" x={265} y={50} />
      <MineralBadge name="Dolomite" color="#c5a0e8" x={365} y={50} />
      <MineralBadge name="Apatite" color="#47e89b" x={465} y={50} />
    </svg>
  );
};
