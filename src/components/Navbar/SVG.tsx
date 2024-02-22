import React from "react";

interface propsTypes {
    className: string;
    xmlns: string;
    d: string;
}

const SVG = ({ className , xmlns , d }: propsTypes) => {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      xmlns={xmlns}
    >
      <path d={d} />
    </svg>
  );
};

export default SVG;
