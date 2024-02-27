import React from "react";

interface propTypes {
  className?: string;
}

const Check = ({ className }: propTypes) => {
  return (
    <svg
      className={`${className} h-3 w-3 md:h-4 md:w-4`}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.0928 5.42853L7.71187 13.8095L3.90234 9.99996"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Check;
