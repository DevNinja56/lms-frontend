import React from "react";
interface propTypes {
  paragraph: string;
}

const Paragraph = ({paragraph}: propTypes) => {
  return (
    <p className="font-normal text-base text-mainParaColor">
      {paragraph}
    </p>
  );
};

export default Paragraph;
