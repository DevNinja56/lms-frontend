import React, { useState } from "react";
import { modalType } from "@slices/ui.slice";
import { useUi } from "@hooks/user-interface";
import Button from "@components/button";
import Notes from "./NotesIcon/Notes";
import Trash from "./NotesIcon/Trash";
import { filterNotesType } from "@utils/Types";
import { BsPlayCircle } from "react-icons/bs";
import { BiNotepad } from "react-icons/bi";
import toast from "react-hot-toast";
import { fetchRequest } from "@utils/axios/fetch";
import { API_ENDPOINTS } from "@constant/api-endpoints";
import { useCourse } from "@hooks/course";
import LoaderSpinner from "@components/LoaderSpinner";

interface propTypes {
  data: filterNotesType;
  refetch: () => void;
}

const SingleNote = ({ data, refetch }: propTypes) => {
  const { updateModal } = useUi();
  const [isEditable, setIsEditable] = useState(false);
  const [noteContent, setNoteContent] = useState(data?.message ?? "");
  const [editLoading, setEditLoading] = useState<boolean>(false);
  const { course } = useCourse();

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

  const handleSaveClick = () => {
    console.log("Saved:", noteContent);
    setEditLoading(true);
    const noteType = data?.readingId ? "Reading" : "Video";
    const noteId = data?.readingId ? data.readingId.id : data?.videoId?.id;
    toast
      .promise(
        fetchRequest({
          url: `${API_ENDPOINTS.NOTE}/${data?.id}`,
          type: "patch",
          body: {
            type: noteType,
            message: noteContent,
            courseId: course.id,
            subjectId: data?.subjectId,
            [`${noteType.toLowerCase()}Id`]: noteId,
          },
        }),
        {
          loading: "Loading....",
          success: "Note Edited",
          error: "An error occurred",
        }
      )
      .then(() => {
        setIsEditable(false);
      })
      .finally(() => {
        setEditLoading(false);
        refetch();
      });
  };

  console.log(data, "data");

  return (
    <div className="bg-white py-6 px-7 rounded-md shadow-md shadow-gray-300 flex justify-between items-center">
      <div className="flex items-center">
        <div className="text-gray-400 text-xs uppercase flex flex-col gap-y-1">
          {new Date(data.createdAt).toLocaleDateString("en-US", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </div>
        <hr className="border border-gray-200 w-[70px] rotate-[-90deg]" />
        <div>
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
            <div className="title text-lg text-mainParaColor font-semibold">
              {data?.readingId?.name ?? data?.videoId?.name ?? "No Title"}
            </div>
          </div>
          <div className="text-xs mt-1">
            {isEditable ? (
              <>
                <textarea
                  className="bg-grayBg w-full resize-none p-2"
                  rows={3}
                  value={noteContent}
                  onChange={(e) => setNoteContent(e.target.value)}
                ></textarea>
                {editLoading ? (
                  <LoaderSpinner />
                ) : (
                  <div className="flex justify-end my-2 gap-2">
                    <Button
                      text="Save"
                      className="w-20 text-xs ml-0 mr-0 hover:bg-opacity-50 transition-all duration-300"
                      onClick={handleSaveClick}
                      padding="p-1 px-7"
                    />
                    <Button
                      text="Cancel"
                      onClick={() => {
                        setNoteContent(data?.message ?? "");
                        setIsEditable(false);
                      }}
                      padding="p-1 px-7"
                      className="w-20 text-xs ml-0 mr-0 hover:bg-opacity-50 transition-all duration-300"
                    />
                  </div>
                )}
              </>
            ) : (
              <div className="flex items-center text-xs text-gray-400 capitalize">
                {data?.message}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="top-3 right-3 text-mainTextColor flex gap-5  ">
        <button
          className="py-[11px] px-[37px] rounded-[5px] text-[13px] text-mainColor bg-gray-100 border border-[#0171BD80] flex items-center gap-x-3 hover:bg-opacity-50 transition-all duration-300"
          onClick={() => setIsEditable(true)}
        >
          <Notes />
          Edit
        </button>
        <button
          className="py-[11px] px-[37px] rounded-[5px] text-[13px] text-white bg-mainColor flex items-center gap-x-3 hover:bg-opacity-50 transition-all duration-300"
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
