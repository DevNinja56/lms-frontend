import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { API_ENDPOINTS } from "@constant/api-endpoints";
import { useSubjectNavigation } from "@hooks/subject-nav";
import { linksTypes } from "@pages/Subjects/SubjectWeeksDay";
import { daysContent, days_categoryType } from "@utils/Types";
import { fetchRequest } from "@utils/axios/fetch";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { useSearchParams } from "react-router-dom";
import { useCourse } from "@hooks/course";

const BookmarkButton: React.FC<{
  data: daysContent;
  refetch: () => void;
}> = ({ data, refetch }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isBookMarked, setBookmark] = useState(!!data.userActions[0]?.bookmark);
  const [param] = useSearchParams();
  const type = param.get("type") as days_categoryType;
  const { subject, week, day } = useSubjectNavigation();
  const { course } = useCourse();

  const handleBookmark = () => {
    setBookmark((prev) => !prev);
    setIsLoading(true);
    toast
      .promise(
        fetchRequest({
          url: API_ENDPOINTS.USER_ACTION[type].replace(":id", data.id),
          type: "post",
          body: {
            resourceType: isBookMarked ? "bookmark_remove" : "bookmark",
            type: type === "videos" ? "Video" : "Reading",
            dayId: day.id,
            weekId: week.id,
            subjectId: subject.id,
            courseId: course.id,
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
          className="text-black text-xl relative w-6 h-10 grid place-items-center"
          onClick={handleBookmark}
          disabled={isLoading}
        >
          {isBookMarked ? (
            <BsBookmarkFill />
          ) : (
            <BsBookmark className="hover:text-mainColor hover:transition-all duration-300" />
          )}
        </button>
      )}
    </>
  );
};

export default BookmarkButton;
