import Button from "@components/button";
import { useQuize } from "@hooks/quize-hook";
import { useUi } from "@hooks/user-interface";
import React from "react";
import { GrFormClose } from "react-icons/gr";

const SubmitQuize = () => {
  const { hideModal } = useUi();
  const { finishQuize } = useQuize();

  return (
    <div className="bg-white p-5 w-full md:w-[450px] grid place-items-center rounded-md shadow shadow-gray-200 relative">
      <div className="w-full">
        <div className="w-full flex justify-between items-start">
        <h1 className=" font-bold text-[23px] text-lightBlackColor">Confirm</h1>
      <GrFormClose
        onClick={hideModal}
        className="cursor-pointer text-mainTextColor text-2xl"
      />
        </div>
        <div className="w-full flex flex-col items-center mt-10">
          <h1 className="text-lg text-mainParaColor mb-5">Are you sure, you want to finish this quiz?</h1>
          <div className="flex gap-x-5">
            <Button
              onClick={finishQuize}
              text={"Finish"}
              className="px-12 py-[8px] rounded-[5px] border border-mainColor"
              padding="py-3 px-[61px]"
              background="bg-white"
              color="text-mainColor"
            />
            <Button
              onClick={hideModal}
              text={"Cancel"}
              className="px-12 py-[8px] rounded-[5px]"
              padding="py-3 px-[61px]"
              background="bg-mainColor"
              color="text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitQuize;
