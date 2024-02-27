import React from "react";
interface propsTypes {
  heading: string;
  className?: string;
}
const SubHeading = ({
  heading,
  className,
}: propsTypes) => {
  return (
    <p
      className={`text-[20px] font-semibold pb-6 text-lightBlackColor ${className}`}>
      {heading}
    </p>
  );
};

export default SubHeading;
