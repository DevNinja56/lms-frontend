import React from "react";

interface propTypes {
  className?: string;
}

const Ellipse = ({ className }: propTypes) => {
  return (
    <svg
      className={`${className} h-3 w-3 md:h-4 md:w-4`}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="9" cy="9" r="8.25" stroke="white" strokeWidth="1.5" />
    </svg>
  );
};

export default Ellipse;
