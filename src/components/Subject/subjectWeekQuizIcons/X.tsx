import React from "react";

interface propTypes {
  className?: string;
}

const X = ({ className }: propTypes) => {
  return (
    <svg
      className={`${className} h-3 w-3 md:h-4 md:w-4`}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.8085 6.19043L6.18945 13.8095M6.18945 6.19043L13.8085 13.8095"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default X;
