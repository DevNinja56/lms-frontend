import {useGetSubjectsQuery} from "@slices/fetch-all-queries.slice";
import {motion} from "framer-motion";
import React, {useState} from "react";

const Doubts = () => {
  const {data} = useGetSubjectsQuery();
  const [selected, setSelected] = useState(
    data?.[0]?.name ?? ""
  );
  return (
    <motion.div
      initial={{y: 50}}
      animate={{y: 0}}
      exit={{y: 50}}
      className=" ">
      <div className="flex gap-2 my-5">
        {data?.map((sub, i) => (
          <button
            key={"subject-list--" + i}
            onClick={() => setSelected(sub.name)}
            className={`capitalize py-1.5 px-4 text-sm rounded-md border-2 hover:bg-greenMain hover:border-greenMain hover:text-white ${
              sub.name === selected
                ? "bg-greenMain text-white border-greenMain"
                : "bg-white text-gray-600"
            } `}>
            {sub.name}
          </button>
        ))}
      </div>
      <div className="bg-white p-3 rounded-md shadow-md shadow-gray-300">
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
      </div>
    </motion.div>
  );
};

export default Doubts;
