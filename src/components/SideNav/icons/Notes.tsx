import React from "react";

const Notes = ({customClassName}: any) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18 10L14 6M2.5 21.5L5.88437 21.124C6.29786 21.078 6.5046 21.055 6.69785 20.9925C6.86929 20.937 7.03245 20.8586 7.18289 20.7594C7.35245 20.6475 7.49955 20.5005 7.79373 20.2063L21 7C22.1046 5.89543 22.1046 4.10457 21 3C19.8955 1.89543 18.1046 1.89543 17 3L3.79373 16.2063C3.49955 16.5005 3.35246 16.6475 3.24064 16.8171C3.14143 16.9676 3.06301 17.1307 3.00751 17.3022C2.94496 17.4954 2.92198 17.7021 2.87604 18.1156L2.5 21.5Z"
        className={`${customClassName}`}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Notes;
