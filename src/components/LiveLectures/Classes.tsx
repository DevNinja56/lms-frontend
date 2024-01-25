import {motion} from "framer-motion";
import React from "react";

const Classes = () => {
  return (
    <motion.div
      initial={{y: 50}}
      animate={{y: 0}}
      exit={{y: 50}}
      className="bg-white p-3 rounded-md shadow-md shadow-gray-300 ">
      <div className="flex flex-col items-center gap-5">
        <h2 className="text-2xl text-center font-semibold text-mainParaColor">
          <span className="block">Oops!</span>{" "}
          This look empty
        </h2>
        <img
          src={"/images/homepage/oops.svg"}
          alt="no product"
          draggable={false}
        />
        <p className="text-black text-sm font-semibold my-2 ">
          No Class Available
        </p>
      </div>
    </motion.div>
  );
};

export default Classes;
