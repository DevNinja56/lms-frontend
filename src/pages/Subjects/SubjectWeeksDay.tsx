import VideoBox from "@components/Subject/VideoBox";
import React, { useEffect } from "react";
import SubjectWeekDayActionBottomBox from "@components/Subject/SubjectWeekDayActionBottomBox";
import { useUi } from "@hooks/user-interface";
import { filterContentType } from "@components/SideFilter";
import { useParams, useSearchParams } from "react-router-dom";
import QuizzesBox from "@components/Subject/QuizzesBox";
import SubjectAssignment from "./SubjectAssignment";
import { useGetDayContentQuery } from "@slices/fetch-all-queries.slice";
import { API_ENDPOINTS } from "@constant/api-endpoints";
import ScreenLoader from "@components/ScreenLoader";
import { days_categoryType } from "@utils/Types";
import BookmarkButton from "@components/Subject/Button/BookmarkButton";
import ReadingBox from "@components/Subject/readingBox";
import AttemptedQuizzesBox from "@components/Subject/AttemptedQuizzesBox";

export const linksTypes = {
  video: "videos",
  reading: "readings",
  quizze: "quizzes",
  assignment: "assignments",
};

const SubjectWeeksDay = () => {
  const { updateFilter, setNav } = useUi();
  const [param] = useSearchParams();
  const type = param.get("type") as days_categoryType;
  const { content: id = "" } = useParams();
  const { data, isLoading, refetch } = useGetDayContentQuery(
    API_ENDPOINTS.DAY_CONTENT[type]?.replace(":id", id)
  );

  useEffect(() => {
    setNav(false);
    (type === linksTypes.video || type === linksTypes.reading) &&
      updateFilter({
        type: filterContentType.subjectWeeksDay,
        state: {},
      });
  }, []);

  if (isLoading) return <ScreenLoader />;

  return (
    <>
      {data && (
        <div className="py-12 pl-0 pr-8 w-11/12 mx-auto">
          <div className="video-box bg-white w-full rounded-md shadow-md shadow-gray-200 overflow-y-auto px-6 pt-5">
            <div className="flex justify-between px-2 py-3 ">
              <h2 className="text-2xl font-bold uppercase">{data.name}</h2>
              {(type === linksTypes.reading || type === linksTypes.video) && (
                <BookmarkButton data={data} refetch={refetch} />
              )}
            </div>
            {type === linksTypes.video ? (
              <VideoBox data={data} />
            ) : type === linksTypes.reading ? (
              <ReadingBox data={data} />
            ) : type === linksTypes.quizze ? (
              type === linksTypes.quizze &&
              data?.userActions[0]?.markAsCompleted ? (
                <AttemptedQuizzesBox data={data} />
              ) : (
                <QuizzesBox data={data} />
              )
            ) : (
              <>Assignment Component</>
            )}
            <SubjectWeekDayActionBottomBox data={data} refetch={refetch} />
          </div>
          {type === linksTypes.quizze &&
            data?.userActions[0]?.markAsCompleted && <SubjectAssignment />}
        </div>
      )}
    </>
  );
};

export default SubjectWeeksDay;
