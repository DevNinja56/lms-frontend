import LoaderSpinner from "@components/LoaderSpinner";
import React from "react";

const ScreenLoader = () => {
  return (
    <div className="grid place-items-center fixed top-0 left-0 w-screen h-screen ">
      <LoaderSpinner color={"text-5xl text-mainColor "} />
    </div>
  );
};

export default ScreenLoader;
