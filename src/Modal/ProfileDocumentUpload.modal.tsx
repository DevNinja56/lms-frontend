import Button from "@components/button";
import { useUi } from "@hooks/user-interface";
import React, { useState } from "react";
import { GrFormClose } from "react-icons/gr";

const DocumentModal = () => {
  const { modalState, hideModal } = useUi();
  const [inputValue, setInputValue] = useState("");
  const [showError, setShowError] = useState(false);

  const onSelect = () => {
    if (inputValue === "CNIC" || inputValue === "CRC") {
      modalState.handleAddMore(inputValue);
      hideModal();
    } else {
      setShowError(!showError);
    }
    setInputValue("");
  };

  return (
    <div className="bg-white p-5 w-full md:w-[450px] grid place-items-center rounded-md shadow shadow-gray-200 relative">
      <GrFormClose
        onClick={hideModal}
        className="absolute top-2 right-2 cursor-pointer text-mainTextColor text-3xl"
      />
      <div className="w-full flex flex-col">
        <label className="mb-4" htmlFor="mySelect">
          What Is Your Document Type:
        </label>
        <div className="flex">
          <input
            className="border-2 border-gray-300 px-20 py-2 pl-1 transition-all duration-200 outline-none w-full rounded-[5px] rounded-r-none"
            id="mySelect"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button onClick={onSelect} text={"Submit"} />
        </div>
        {showError ? (
          <p className="text-red-600 text-[0.8rem] mt-1">
            Please type valid document type
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default DocumentModal;
