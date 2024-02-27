import React, { useState } from "react";
import { modalType } from "@slices/ui.slice";
import { useUi } from "@hooks/user-interface";
import Play from "./NotesIcon/Play";
import Notes from "./NotesIcon/Notes";
import Trash from "./NotesIcon/Trash";
import { filterNotesType } from "@utils/Types";
import { BsPlayCircle } from "react-icons/bs";
import { BiNotepad } from "react-icons/bi";

interface propTypes {
  data: filterNotesType;
  refetch: () => void;
}

const SingleNote = ({ data, refetch }: propTypes) => {
  const { updateModal } = useUi();
  const [noteContent, setNoteContent] = useState(data?.message ?? "");

  const handleDeleteClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    e.stopPropagation();
    updateModal({
      type: modalType.note_delete,
      state: data?.readingId
        ? {
            type: "readings",
            id: data.readingId.id,
            callback: () => refetch(),
          }
        : data?.videoId
        ? {
            type: "videos",
            id: data.videoId.id,
            callback: () => refetch(),
          }
        : { type: "false" },
    });
  };

  return (
    <div className="bg-white py-6 px-4 md:px-7 rounded-md shadow-md shadow-gray-300 flex flex-wrap flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-y-5">
      <div className="flex items-center">
        <div className="text-gray-400 text-xs uppercase flex flex-col gap-y-1">
          {new Date(data.createdAt).toLocaleDateString("en-US", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </div>
        <hr className="border border-gray-200 w-1/2 md:w-[70px] rotate-[-90deg]" />
        <div>
          {data?.videoId && (
            <div className="flex items-center text-xs font-medium text-gray-400 gap-x-2">
              <Play /> 00:00:00
            </div>
          )}
          <div className="flex items-center text-lg capitalize text-mainParaColor gap-2 my-1 font-semibold">
            <span className="icon">
              {data?.videoId ? (
                <BsPlayCircle />
              ) : data?.readingId ? (
                <BiNotepad />
              ) : (
                "X"
              )}
            </span>
            <div className="title text-sm md:text-lg text-mainParaColor font-semibold">
              {data?.readingId?.name ?? data?.videoId?.name ?? "No Title"}
            </div>
          </div>
          <div className="text-xs mt-1">
            <div className="flex items-center text-xs text-gray-400 capitalize">
              {data?.message}
            </div>
          </div>
        </div>
      </div>
      <div className="top-3 right-3 text-mainTextColor flex gap-5">
        <button
          className="py-2 px-6 md:py-[11px] md:px-[37px] rounded-[5px] text-[13px] text-mainColor bg-gray-100 border border-[#0171BD80] flex items-center gap-x-3"
          onClick={() =>
            updateModal({
              type: modalType.note_edit,
              state: {
                data: data,
                noteContent: noteContent,
                setNoteContent: setNoteContent,
                refetch: refetch,
              },
            })
          }
        >
          <Notes />
          Edit
        </button>
        <button
          className="py-2 px-6 md:py-[11px] md:px-[37px] rounded-[5px] text-[13px] text-white bg-mainColor flex items-center gap-x-3"
          onClick={(e) => handleDeleteClick(e)}
        >
          <Trash />
          Delete
        </button>
      </div>
    </div>
  );
};

export default SingleNote;
