import LoaderSpinner from "@components/LoaderSpinner";
import Button from "@components/button";
import { API_ENDPOINTS } from "@constant/api-endpoints";
import { useCourse } from "@hooks/course";
import { useUi } from "@hooks/user-interface";
import { filterNotesType } from "@utils/Types";
import { fetchRequest } from "@utils/axios/fetch";
import React, { SetStateAction, useState } from "react";
import toast from "react-hot-toast";
import { BiNotepad } from "react-icons/bi";
import { BsPlayCircle } from "react-icons/bs";

const NoteEdit = () => {
  const { hideModal, modalState } = useUi();
  const [editLoading, setEditLoading] = useState<boolean>(false);
  const { data, noteContent, setNoteContent, refetch } = modalState as {
    data: filterNotesType;
    noteContent: string;
    setNoteContent: React.Dispatch<SetStateAction<string>>;
    refetch: () => void;
  };
  const { course } = useCourse();
  const [editNoteContent, setEditNoteContent] = useState<string>(
    noteContent ?? ""
  );

  const handleSaveClick = () => {
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
            message: editNoteContent,
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
        hideModal();
      })
      .finally(() => {
        hideModal();
        refetch();
      });
  };
  return (
    <div className="bg-white px-3 py-5 md:p-5 w-full md:min-w-[508px] text-center rounded-md">
      <div className="text-sm w-full flex text-mainColor font-medium mb-2">
        {new Date(data.createdAt).toLocaleDateString("en-US", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        })}
      </div>
      <div className="flex items-center text-lg capitalize text-mainParaColor gap-2 my-1 font-semibold mb-5">
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
      <textarea
        className="bg-grayBg w-full text-xs pt-3 pl-5 text-mainParaColor h-32 outline-none"
        rows={3}
        value={editNoteContent}
        onChange={(e) => setEditNoteContent(e.target.value)}
      ></textarea>
      {editLoading ? (
        <LoaderSpinner />
      ) : (
        <div className="flex justify-end my-2 gap-2">
          <Button
            text="Cancel"
            onClick={() => {
              hideModal();
              setNoteContent(data?.message ?? "");
            }}
            padding="py-3 px-10 md:px-16"
            className="text-sm md:text-base ml-0 mr-0 rounded-md bg-white text-blue-700 border border-mainColor hover:bg-mainColor hover:text-white"
          />
          <Button
            text="Save"
            className="text-sm md:text-base ml-0 mr-0 rounded-md bg-mainColor text-white hover:bg-opacity-50"
            onClick={handleSaveClick}
            padding="py-3 px-10 md:px-16"
          />
        </div>
      )}
    </div>
  );
};

export default NoteEdit;
