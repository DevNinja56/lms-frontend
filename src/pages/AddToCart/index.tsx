import React from "react";
import TopBanner from "@components/TopBanner";
import Heading from "@components/Common/Heading";
import Paragraph from "@components/Common/Paragraph";

const AddToCart = () => {
  return (
    <>
      <div className="pl-5">
        <TopBanner />
      </div>
      <div className="text-center pt-3 pb-6">
        <Heading heading="My Cart" />
        <Paragraph paragraph="We’re on a mission to deliver engaging, curated courses at a reasonable price." />
      </div>
      <div></div>
    </>
  );
};

export default AddToCart;
