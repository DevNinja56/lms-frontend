import React from "react";
interface propsTypes {
  heading?: string;
}

const Heading = ({heading}: propsTypes) => {
  return (
    <>
      <div>
        <p className="font-semibold text-[32px] text-lightBlackColor">
          {heading}
        </p>
      </div>
    </>
  );
};

export default Heading;
