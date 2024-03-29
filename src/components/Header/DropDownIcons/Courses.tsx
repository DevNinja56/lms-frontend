import React from "react";

const Courses = ({
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
        d="M9 15.5H3.9C3.05992 15.5 2.63988 15.5 2.31901 15.3365C2.03677 15.1927 1.8073 14.9632 1.66349 14.681C1.5 14.3601 1.5 13.9401 1.5 13.1V5.9C1.5 5.05992 1.5 4.63988 1.66349 4.31901C1.8073 4.03677 2.03677 3.8073 2.31901 3.66349C2.63988 3.5 3.05992 3.5 3.9 3.5H4.2C5.88016 3.5 6.72024 3.5 7.36197 3.82698C7.92646 4.1146 8.3854 4.57354 8.67302 5.13803C9 5.77976 9 6.61984 9 8.3M9 15.5V8.3M9 15.5H14.1C14.9401 15.5 15.3601 15.5 15.681 15.3365C15.9632 15.1927 16.1927 14.9632 16.3365 14.681C16.5 14.3601 16.5 13.9401 16.5 13.1V5.9C16.5 5.05992 16.5 4.63988 16.3365 4.31901C16.1927 4.03677 15.9632 3.8073 15.681 3.66349C15.3601 3.5 14.9401 3.5 14.1 3.5H13.8C12.1198 3.5 11.2798 3.5 10.638 3.82698C10.0735 4.1146 9.6146 4.57354 9.32698 5.13803C9 5.77976 9 6.61984 9 8.3"
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

export default Courses;
