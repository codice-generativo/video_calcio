import React from "react";

export const FlameIcon: React.FC<{ scale?: number }> = ({ scale = 1 }) => {
  const size = 140 * scale;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 140 160"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer flame - orange */}
      <path
        d="M70 10 C70 10, 20 70, 25 110 C28 135, 50 155, 70 155 C90 155, 112 135, 115 110 C120 70, 70 10, 70 10Z"
        fill="#ff8c00"
        opacity="0.9"
      />
      {/* Middle flame - yellow-orange */}
      <path
        d="M70 35 C70 35, 35 80, 38 112 C40 132, 55 148, 70 148 C85 148, 100 132, 102 112 C105 80, 70 35, 70 35Z"
        fill="#ffa500"
        opacity="0.85"
      />
      {/* Inner flame - bright yellow */}
      <path
        d="M70 60 C70 60, 48 90, 50 115 C51 130, 60 142, 70 142 C80 142, 89 130, 90 115 C92 90, 70 60, 70 60Z"
        fill="#ffd700"
        opacity="0.9"
      />
      {/* Core - white-yellow */}
      <path
        d="M70 85 C70 85, 58 105, 60 120 C61 130, 65 136, 70 136 C75 136, 79 130, 80 120 C82 105, 70 85, 70 85Z"
        fill="#fff8dc"
        opacity="0.8"
      />
    </svg>
  );
};
