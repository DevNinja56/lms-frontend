import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import notAddedNotesImg from "../../../public/images/sideFilter/tasklist.svg";
import Button from "@components/button";
import Play from "@components/Notes/NotesIcon/Play";
import Delete from "@components/Notes/NotesIcon/Delete";
import Edit from "@components/Notes/NotesIcon/Edit";
import { fetchRequest } from "@utils/axios/fetch";
import { API_ENDPOINTS } from "@constant/api-endpoints";
import { days_categoryType, notesType } from "@utils/Types";
import { useParams, useSearchParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useGetNotesQuery } from "@slices/fetch-all-queries.slice";
import { useCourse } from "@hooks/course";
import { useSubjectNavigation } from "@hooks/subject-nav";
import { useRightFilter } from "@hooks/right-filter";
import { formatDuration } from "@utils/timeFormateDuration";
import LoaderSpinner from "@components/LoaderSpinner";

const SubjectWeeksDay = () => {
  const { content } = useParams();
  const [param] = useSearchParams();
  const type = param.get("type") as days_categoryType;
  const { data: allNotes, refetch } = useGetNotesQuery({
    id: content ?? "",
    type: type === "videos" ? "video" : "reading",
  });
  const { course } = useCourse();
  const [showInput, setShowInput] = useState(false);
  const [message, setInputMessage] = useState("");
  const [editingNote, setEditingNote] = useState<notesType | null>(null);
  const { subject } = useSubjectNavigation();
  const { duration } = useRightFilter();
  const [loading, setLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [editLoading, setEditLoading] = useState(false);

  const onSubmitNotes = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    toast
      .promise(
        fetchRequest({
          url: API_ENDPOINTS.NOTE,
          type: "post",
          body: {
            type: type === "videos" ? "Video" : "Reading",
            duration: duration,
            message,
            courseId: course.id,
            subjectId: subject.id,
            [type.replace("s", "Id")]: content,
          },
        }),
        {
          loading: "Loading....",
          success: "Notes Added",
          error: "An error occurred",
        }
      )
      .then(() => {
        setInputMessage("");
        setShowInput(false);
      })
      .finally(() => {
        refetch();
        setLoading(false);
      });
  };

  const handleDel = (id: string) => {
    setDeleteLoading(true);
    toast
      .promise(
        fetchRequest({
          url: `${API_ENDPOINTS.NOTE}/${id}`,
          type: "delete",
        }),
        {
          loading: "Loading...",
          success: "Note has been Deleted",
          error: "An error occurred",
        }
      )
      .finally(() => {
        refetch();
        setDeleteLoading(false);
      });
  };

  const handleEdit = (note: notesType) => {
    setEditingNote(note);
    setInputMessage(note.message);
  };

  const onSaveEdit = () => {
    setEditLoading(true);
    toast
      .promise(
        fetchRequest({
          url: `${API_ENDPOINTS.NOTE}/${editingNote?.id}`,
          type: "patch",
          body: {
            type: type === "videos" ? "Video" : "Reading",
            duration: duration,
            message,
            courseId: course.id,
            subjectId: subject.id,
            [type.replace("s", "Id")]: content,
          },
        }),
        {
          loading: "Loading....",
          success: "Note Edited",
          error: "An error occurred",
        }
      )
      .then(() => {
        setInputMessage("");
        setEditingNote(null);
        setShowInput(false);
      })
      .finally(() => {
        setEditLoading(false);
        refetch();
      });
  };

  return (
    <>
      <div className="h-full">
        <div className="px-4 py-5 flex items-center gap-x-20">
          <h2 className="text-base capitalize font-bold">Notes</h2>
          <AiOutlinePlus
            onClick={() => setShowInput(true)}
            className="text-2xl cursor-pointer"
          />
        </div>
        <div className="px-4 py-2">
          {showInput || editingNote ? (
            <form className="mb-5" onSubmit={onSubmitNotes}>
              <p className="text-[10px] text-lightBlackColor mb-1">00:00:00</p>
              <input
                className="w-full rounded-[5px] bg-mainBackgroundColor text-[10px] text-mainParaColor pt-2 pb-16 pl-2 outline-none"
                placeholder="Type here..."
                value={message}
                onChange={(e) => setInputMessage(e.target.value)}
              />
              <div className="flex flex-row-reverse ">
                {editingNote ? (
                  editLoading ? (
                    <LoaderSpinner />
                  ) : (
                    <>
                      <Button
                        onClick={() => onSaveEdit()}
                        className="mt-2 rounded-[3px] text-xs border border-mainColor mr-0 ml-2"
                        padding="py-[3px] px-5"
                        background="bg-mainColor"
                        text={"Update"}
                        disabled={!message}
                        isLoader={false}
                        type="button" // Change type to "button" to prevent form submission
                      />
                      <Button
                        onClick={() => {
                          setInputMessage("");
                          setEditingNote(null);
                          setShowInput(false);
                        }}
                        className="mt-2 rounded-[3px] text-xs border border-mainColor mr-0"
                        color="text-mainColor"
                        padding="py-[3px] px-5"
                        background="bg-white"
                        text={"Cancel"}
                      />
                    </>
                  )
                ) : loading ? (
                  <LoaderSpinner />
                ) : (
                  <>
                    <Button
                      type="submit"
                      className="mt-2 rounded-[3px] text-xs border border-mainColor mr-0 ml-2"
                      padding="py-[3px] px-5"
                      background="bg-mainColor"
                      text={"Save"}
                      disabled={!message}
                      isLoader={false}
                    />
                    <Button
                      onClick={() => {
                        setInputMessage("");
                        setShowInput(false);
                      }}
                      className="mt-2 rounded-[3px] text-xs border border-mainColor mr-0"
                      color="text-mainColor"
                      padding="py-[3px] px-5"
                      background="bg-white"
                      text={"Cancel"}
                    />
                  </>
                )}
              </div>
            </form>
          ) : null}
          {allNotes && allNotes?.length > 0 ? (
            allNotes.map((item, i) => (
              <div
                className="flex mb-3 flex-col gap-y-1 z-10"
                key={"notes-list--" + i}
              >
                <div className="w-full flex justify-between items-center">
                  <p className="text-gray-400 text-[13px] flex items-center gap-x-1 font-medium">
                    <Play /> {formatDuration(item.duration)}
                  </p>
                  {deleteLoading && <LoaderSpinner />}
                  <div className="flex gap-x-2 cursor-pointer">
                    <button
                      disabled={deleteLoading}
                      onClick={() => handleDel(item.id)}
                    >
                      <Delete />
                    </button>
                    <button
                      disabled={deleteLoading}
                      onClick={() => handleEdit(item)}
                    >
                      <Edit />
                    </button>
                  </div>
                </div>
                <p className="text-[10px] font-semibold text-lightBlackColor">
                  {item.message}
                </p>
                <hr className="border border-mainBackgroundColor w-full" />
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center absolute bottom-16">
              <img src={notAddedNotesImg} />
              <p className="text-xs text-center">
                You have not added any notes yet. Go to course videos/readings
                to take notes.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SubjectWeeksDay;
