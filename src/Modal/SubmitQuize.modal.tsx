import Button from "@components/button";
import { useQuize } from "@hooks/quize-hook";
import { useUi } from "@hooks/user-interface";
import React from "react";
import { GrFormClose } from "react-icons/gr";

const SubmitQuize = () => {
  const { hideModal } = useUi();
  const { finishQuize } = useQuize();

  return (
    <div className="bg-white px-3 py-5 md:p-5 w-full md:w-[450px] flex flex-col rounded-md shadow shadow-gray-200 relative">
      <div className="w-full">
        <div className="w-full flex justify-between items-start">
          <h1 className=" font-bold text-[23px] text-lightBlackColor">
            Confirm
          </h1>
          <GrFormClose
            onClick={hideModal}
            className="cursor-pointer text-mainTextColor text-2xl"
          />
        </div>
        <div className="w-full flex flex-col items-center mt-10">
          <h1 className="text-lg text-mainParaColor mb-8 text-center">
            Are you sure, you want to finish this quiz?
          </h1>
          <div className="flex gap-x-2 md:gap-x-5 w-full md:w-auto">
            <Button
              onClick={hideModal}
              text={"Cancel"}
              className="rounded-[5px] w-full md:w-auto border border-mainColor text-sm md:text-base"
              padding="py-3 px-0 md:px-[61px]"
              background="bg-white hover:bg-black hover:bg-opacity-5"
              color="text-mainColor"
            />
            <Button
              onClick={finishQuize}
              text={"Finish"}
              className="rounded-[5px] border border-mainColor text-sm md:text-base w-full md:w-auto"
              padding="py-3 px-0 md:px-[61px]"
              background="bg-mainColor hover:bg-opacity-50"
              color="text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitQuize;
