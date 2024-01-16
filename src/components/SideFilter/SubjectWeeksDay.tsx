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

const SubjectWeeksDay = () => {
  const { content } = useParams();
  const [param] = useSearchParams();
  const type = param.get("type") as days_categoryType;
  const { data: allNotes, refetch } = useGetNotesQuery({
    id: content ?? "",
    type: type === "videos" ? "video" : "reading",
  });
  const [showInput, setShowInput] = useState(false);
  const [message, setInputMessage] = useState("");

  const onSubmitNotes = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast
      .promise(
        fetchRequest({
          url: API_ENDPOINTS.NOTE,
          type: "post",
          body: {
            duration: 0,
            message,
            [type.replace("s", "Id")]: content,
          },
        }),
        {
          loading: "Loading....",
          success: "Notes Added",
          error: "An error accord",
        }
      )
      .then(() => {
        setInputMessage("");
        setShowInput(false);
      })
      .finally(() => refetch());
  };

  const handleDel = (id: string) => {
    toast
      .promise(
        fetchRequest({ url: `${API_ENDPOINTS.NOTE}/${id}`, type: "delete" }),
        {
          loading: "Loading...",
          success: "Note has been Deleted",
          error: "An error Accord",
        }
      )
      .finally(() => refetch());
  };

  const handleEdit = (note: notesType) => {
    console.log(note);
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
          {showInput ? (
            <form onSubmit={onSubmitNotes}>
              <p className="text-[10px] text-lightBlackColor mb-1">00:00:00</p>
              <input
                className="w-full rounded-[5px] bg-mainBackgroundColor text-[10px] text-mainParaColor pt-2 pb-16 pl-2 outline-none"
                placeholder="Type here..."
                value={message}
                onChange={(e) => setInputMessage(e.target.value)}
              />
              <div className="flex flex-row-reverse ">
                <Button
                  className="mt-2 rounded-[3px] text-xs border border-mainColor mr-0 ml-2"
                  padding="py-[3px] px-5"
                  background="bg-mainColor"
                  text={"Save"}
                  disabled={!message}
                  isLoader={false}
                  type="submit"
                />
                <Button
                  onClick={() => setShowInput(false)}
                  className="mt-2 rounded-[3px] text-xs border border-mainColor mr-0"
                  color="text-mainColor"
                  padding="py-[3px] px-5"
                  background="bg-white"
                  text={"Cancel"}
                />
              </div>
            </form>
          ) : null}

          {allNotes && allNotes?.length > 0 ? (
            allNotes.map((item, i) => (
              <div
                className="mb-3 flex flex-col gap-y-1"
                key={"notes-list--" + i}
              >
                <div className="w-full flex justify-between items-center">
                  <p className="text-gray-400 text-[13px] flex items-center gap-x-1 font-medium">
                    <Play /> {item.duration}
                  </p>
                  <div className="flex gap-x-2 cursor-pointer">
                    <span onClick={() => handleDel(item.id)}>
                      <Delete />
                    </span>
                    <span onClick={() => handleEdit(item)}>
                      <Edit />
                    </span>
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
