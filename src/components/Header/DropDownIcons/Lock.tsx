import React from "react";

const Lock = ({
  active = false,
}: {
  active?: boolean;
}) => {
  return (
    <svg
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.25 8V6.5C5.25 4.42893 6.92893 2.75 9 2.75C10.5377 2.75 11.8593 3.67557 12.438 5M9 11.375V12.875M6.6 16.25H11.4C12.6601 16.25 13.2902 16.25 13.7715 16.0048C14.1948 15.789 14.539 15.4448 14.7548 15.0215C15 14.5402 15 13.9101 15 12.65V11.6C15 10.3399 15 9.70982 14.7548 9.22852C14.539 8.80516 14.1948 8.46095 13.7715 8.24523C13.2902 8 12.6601 8 11.4 8H6.6C5.33988 8 4.70982 8 4.22852 8.24523C3.80516 8.46095 3.46095 8.80516 3.24524 9.22852C3 9.70982 3 10.3399 3 11.6V12.65C3 13.9101 3 14.5402 3.24524 15.0215C3.46095 15.4448 3.80516 15.789 4.22852 16.0048C4.70982 16.25 5.33988 16.25 6.6 16.25Z"
        className={` group-hover:stroke-mainColor ${
          active
            ? "stroke-mainColor"
            : "stroke-mainParaColor"
        }`}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Lock;
