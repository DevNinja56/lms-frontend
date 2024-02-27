import React from "react";

interface propsType {
  className?: string;
  strokeColor: string;
}

const Percent = ({ className, strokeColor }: propsType) => {
  return (
    <svg
      className={`${className}`}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 4.99999L5 17M8.42857 6.71428C8.42857 7.66105 7.66106 8.42856 6.71429 8.42856C5.76751 8.42856 5 7.66105 5 6.71428C5 5.7675 5.76751 4.99999 6.71429 4.99999C7.66106 4.99999 8.42857 5.7675 8.42857 6.71428ZM17 15.2857C17 16.2325 16.2325 17 15.2857 17C14.3389 17 13.5714 16.2325 13.5714 15.2857C13.5714 14.3389 14.3389 13.5714 15.2857 13.5714C16.2325 13.5714 17 14.3389 17 15.2857Z"
        className={`stroke-${strokeColor}`}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Percent;
