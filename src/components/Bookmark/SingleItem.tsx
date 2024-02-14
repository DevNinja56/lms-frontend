import { useUi } from "@hooks/user-interface";
import { modalType } from "@slices/ui.slice";
import { bookmarkType } from "@utils/Types";
import React from "react";
import { BiNotepad } from "react-icons/bi";
import { BsPlayCircle } from "react-icons/bs";
import Tag from "./BookmarkIcon/Tag";
import { Link } from "react-router-dom";
import { ROUTES } from "@route/constants.route";
import { sendParams } from "@utils/link-param";

const SingleBookmarked: React.FC<{
  data: bookmarkType;
  refetch: () => void;
}> = ({ data, refetch }) => {
  const { updateModal } = useUi();
  const handleDeleteClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    e.stopPropagation();
    updateModal({
      type: modalType.bookmarked_delete,
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
    <Link
      to={{
        pathname: ROUTES.SUBJECTS_WEEKS_DAY.replace(
          ":subject",
          data?.subjectId?.name
        )
          .replace(":week", data?.weekId?.name.replace(" ", "-"))
          .replace(":content", data.readingId?.id || data.videoId?.id),
        search: sendParams({
          type:
            data?.type === "Reading"
              ? "readings"
              : data?.type === "Video" && "videos",
        }),
      }}
      className="bg-white px-7 py-8 rounded-md shadow-md shadow-gray-300 flex justify-between items-center"
    >
      <div className="flex items-center">
        <div className="text-gray-400 uppercase text-xs">
          {data?.dayId?.name ?? "No Day"}
        </div>
        <hr className="border border-gray-200 w-[70px] rotate-[-90deg]" />
        <div>
          <div className="flex items-center text-lg capitalize text-black text-opacity-60 gap-2 my-1 ">
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
          <div className="flex items-center text-xs text-gray-400 capitalize">
            {data?.subjectId?.name ?? "No Subject"} -{" "}
            {data?.weekId?.name ?? "No Week"}
          </div>
        </div>
      </div>
      <div className="">
        <button
          className="flex gap-3 text-[13px] py-[11px] px-[28px] rounded-[5px] bg-mainColor text-white"
          onClick={(e) => handleDeleteClick(e)}
        >
          <Tag />
          Delete
        </button>
      </div>
    </Link>
  );
};

export default SingleBookmarked;
