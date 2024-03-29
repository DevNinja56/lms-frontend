import React from "react";

const User = ({
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
        d="M15 16.25C15 15.2033 15 14.68 14.8708 14.2541C14.58 13.2953 13.8297 12.545 12.8709 12.2542C12.445 12.125 11.9217 12.125 10.875 12.125H7.125C6.07833 12.125 5.55499 12.125 5.12914 12.2542C4.17034 12.545 3.42003 13.2953 3.12918 14.2541C3 14.68 3 15.2033 3 16.25M12.375 6.125C12.375 7.98896 10.864 9.5 9 9.5C7.13604 9.5 5.625 7.98896 5.625 6.125C5.625 4.26104 7.13604 2.75 9 2.75C10.864 2.75 12.375 4.26104 12.375 6.125Z"
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

export default User;
