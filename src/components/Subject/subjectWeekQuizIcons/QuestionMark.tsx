import React from "react";

interface PropsType {
  strokeColor: string;
  className?: string;
}

const QuestionMark = ({ strokeColor, className }: PropsType) => {
  return (
    <svg
      width="20"
      height="20"
      className={`${className}`}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.42773 5.28863C5.76878 4.31915 6.44192 3.50165 7.32795 2.98092C8.21398 2.4602 9.25571 2.26985 10.2686 2.44359C11.2816 2.61733 12.2003 3.14396 12.8622 3.93019C13.524 4.71642 13.8863 5.71151 13.8847 6.73923C13.8847 9.64043 9.53293 11.091 9.53293 11.091V15.0794M9.64897 17.619H9.66348"
        className={`stroke-${strokeColor}`}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default QuestionMark;
