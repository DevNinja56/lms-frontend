import React, {useState} from "react";
import {toast} from "react-hot-toast";
import {API_ENDPOINTS} from "@constant/api-endpoints";
import {useSubjectNavigation} from "@hooks/subject-nav";
import {linksTypes} from "@pages/Subjects/SubjectWeeksDay";
import {
  daysContent,
  days_categoryType,
} from "@utils/Types";
import {fetchRequest} from "@utils/axios/fetch";
import {
  BsBookmark,
  BsBookmarkFill,
} from "react-icons/bs";
import {useSearchParams} from "react-router-dom";

const BookmarkButton: React.FC<{
  data: daysContent;
  refetch: () => void;
}> = ({data, refetch}) => {
  const [isLoading, setIsLoading] =
    useState(false);
  const [isBookMarked, setBookmark] = useState(
    !!data.userActions[0]?.bookmark
  );
  const [param] = useSearchParams();
  const type = param.get(
    "type"
  ) as days_categoryType;
  const {subject, week, day} =
    useSubjectNavigation();

  const handleBookmark = () => {
    setBookmark((prev) => !prev);
    setIsLoading(true);
    toast
      .promise(
        fetchRequest({
          url: API_ENDPOINTS.USER_ACTION[
            type
          ].replace(":id", data.id),
          type: "post",
          body: {
            type: isBookMarked
              ? "bookmark_remove"
              : "bookmark",
            dayId: day.id,
            weekId: week.id,
            subjectId: subject.id,
          },
        }),
        {
          loading: "Loading...",
          success: () =>
            !isBookMarked
              ? "Bookmark added successfully "
              : "Bookmark removed successfully",
          error: "An Error occurred",
        }
      )
      .finally(() => {
        refetch?.();
        setIsLoading(false);
      });
  };

  return (
    <>
      {(type === linksTypes.reading ||
        type === linksTypes.video ||
        linksTypes.quizze) && (
        <button
          className="text-black text-xl relative w-6 h-10 grid place-items-center  "
          onClick={handleBookmark}
          disabled={isLoading}>
          {isBookMarked ? (
            <BsBookmarkFill />
          ) : (
            <BsBookmark />
          )}
          {/* {isLoading ? (
            <LoaderSpinner color="text-mainTextColor" />
          ) : isBookMarked ? (
            <BsBookmarkFill />
          ) : (
            <BsBookmark />
          )} */}
        </button>
      )}
    </>
  );
};

export default BookmarkButton;
