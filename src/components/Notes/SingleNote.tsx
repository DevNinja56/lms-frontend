import React, { useState } from "react";
import { modalType } from "@slices/ui.slice";
import { useUi } from "@hooks/user-interface";
import Button from "@components/button";
import Play from "./NotesIcon/Play";
import PlayCircle from "./NotesIcon/PlayCircle";
import Notes from "./NotesIcon/Notes";
import Trash from "./NotesIcon/Trash";

const SingleNote = () => {
  const { updateModal } = useUi();
  const [isEditable, setIsEditable] = useState(false);
  return (
    <div className="bg-white py-6 px-7 rounded-md shadow-md shadow-gray-300 flex justify-between items-center">
      <div className="flex items-center">
      <div className="text-gray-400 text-xs uppercase flex flex-col gap-y-1">
        <span className="text-mainParaColor text-xl font-bold">15</span> august 2023
      </div>
      <hr className="border border-gray-200 w-[70px] rotate-[-90deg]"/>
      <div>
      <div className="flex items-center text-xs font-medium text-gray-400 gap-x-2">
        <Play /> 00:00:00
      </div>
      <div className="flex items-center text-lg capitalize text-mainParaColor gap-2 my-1 font-semibold">
        <span className="icon">
          <PlayCircle />
        </span>
        <div className="title">Lorem ipsum dolor sit amet.</div>
      </div>
      <div className="text-xs mt-1">
        {isEditable ? (
          <>
            <textarea
              className="bg-grayBg w-full resize-none p-2 "
              rows={3}
              defaultValue={"Lorem, ipsum."}
            ></textarea>
            <div className="flex justify-end my-2 gap-2 ">
              <Button
                text="Save"
                className="w-20 text-xs ml-0 mr-0 "
                onClick={() => setIsEditable(false)}
                padding="p-1 px-7"
              />
              <Button
                text="Cancel"
                onClick={() => setIsEditable(false)}
                padding="p-1 px-7"
                className="w-20 text-xs ml-0 mr-0 "
              />
            </div>
          </>
        ) : (
          <span className="text text-xs text-gray-400">Lorem, ipsum.</span>
        )}
      </div>
      </div>
      </div>
      <div className="top-3 right-3 text-mainTextColor flex gap-5  ">
        <button className="py-[11px] px-[37px] rounded-[5px] text-[13px] text-mainColor bg-gray-100 border border-[#0171BD80] flex items-center gap-x-3" onClick={() => setIsEditable(true)}>
          <Notes />
          Edit
        </button>
        <button className="py-[11px] px-[37px] rounded-[5px] text-[13px] text-white bg-mainColor flex items-center gap-x-3"
          onClick={() =>
            updateModal({
              type: modalType.note_delete,
              state: { name: "del note" },
            })
          }
        >
          <Trash />
          Delete
        </button>
      </div>
    </div>
  );
};

export default SingleNote;
