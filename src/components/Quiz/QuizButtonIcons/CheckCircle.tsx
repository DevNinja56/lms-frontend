import React from "react";

const CheckCircle = () => {
  return (
    <svg
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.625 9.5L7.875 11.75L12.375 7.25M16.5 9.5C16.5 13.6421 13.1421 17 9 17C4.85787 17 1.5 13.6421 1.5 9.5C1.5 5.35787 4.85787 2 9 2C13.1421 2 16.5 5.35787 16.5 9.5Z"
        className="stroke-mainColor group-hover:stroke-white group-disabled:opacity-60"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CheckCircle;
