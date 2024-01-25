import React from "react";
interface propsTypes {
  heading: string;
  className?: string;
}
const SubHeading = ({ heading, className }: propsTypes) => {
  return (
    <p className={`text-xl font-bold pb-6 text-[#333333] ${className}`}>{heading}</p>
  );
};

export default SubHeading;
