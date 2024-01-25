import React from "react";
interface propsTypes {
  heading: string;
}

const Heading = ({ heading }: propsTypes) => {
  return <p className="font-semibold text-[30px]">{heading}</p>;
};

export default Heading;
