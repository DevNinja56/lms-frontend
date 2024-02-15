import React from "react";

interface SubHeadingProps {
  text: string;
}

const SubHeading: React.FC<SubHeadingProps> = ({
  text,
}) => {
  return (
    <div className="font-bold text-base leading-4 text-mainColor uppercase text-center mb-4">
      {text}
    </div>
  );
};

export default SubHeading;
