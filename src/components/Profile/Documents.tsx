import Button from "@components/button";
import { useUi } from "@hooks/user-interface";
import { modalType } from "@slices/ui.slice";
import React, { useState } from "react";
import { PiUploadBold } from "react-icons/pi";

const Documents = () => {
  const [allDocs, setAllDocs] = useState<string[]>(["general"]);
  const { updateModal } = useUi();

  const handleAddMore = (newDoc: string) => {
    setAllDocs((prevDocs) => [...prevDocs, newDoc]);
  };

  const onDelItem = (index: any) => {
    setAllDocs((prevDocs) => prevDocs.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col pt-8">
      {allDocs.map((doc, i) => (
        <React.Fragment key={"upload-docs--" + i}>
          <div className="flex justify-between items-center">
            <label
              className="cursor-pointer focus:outline-none flex justify-between items-center relative"
              htmlFor={doc + i}
            >
              <input
                className="absolute inset-0 hidden cursor-pointer"
                type="file"
                name={doc}
                id={doc + i}
              />
              <span className="flex px-4 py-[6px] bg-white border-2 border-gray-300 font-semibold cursor-pointer text-gray-500 text-[0.9rem] items-center gap-x-2">
                UPLOAD FILE
                <PiUploadBold className="text-[1rem]" />
              </span>
            </label>
            {allDocs.length > 1 ? (
              <Button
                onClick={() => onDelItem(i)}
                text={"REMOVE"}
                color={"text-gray-500"}
                className="mr-0 bg-white border-2 border-gray-300 font-semibold py-[7px]"
              />
            ) : (
              ""
            )}
          </div>
          <hr className="border border-gray-200 my-4" />
        </React.Fragment>
      ))}

      <Button
        text={"ADD MORE"}
        className="ml-0 bg-white border-2 border-gray-300 font-semibold py-[7px]"
        color={"text-gray-500"}
        onClick={() =>
          updateModal({
            type: modalType.profile_document_upload,
            state: { handleAddMore },
          })
        }
      />
    </div>
  );
};

export default Documents;
