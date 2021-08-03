import React from "react";

export default function SVG({
  onClick,
  className,
  fill,
  viewBox,
  stroke,
  path,
}) {
  return (
    <button type="button" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        fill={fill || "currentColor"}
        viewBox={viewBox || "0 0 24 24"}
        stroke={stroke || "currentColor"}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d={path}
        />
      </svg>
    </button>
  );
}
