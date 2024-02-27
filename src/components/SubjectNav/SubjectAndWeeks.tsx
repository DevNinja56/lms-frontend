import React, { useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useSubjectNavigation } from "@hooks/subject-nav";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { ROUTES } from "@route/constants.route";
import { TbClipboardList } from "react-icons/tb";
import { useCourse } from "@hooks/course";
import { SubjectType, WeekType, daysContent, navTypes } from "@utils/Types";
import { useGetSubjectsQuery } from "@slices/fetch-all-queries.slice";
import { sendParams } from "@utils/link-param";
import { nanoid } from "@reduxjs/toolkit";
import PlayCircle from "./subjectNavIcons/PlayCircle";
import Quiz from "./subjectNavIcons/Quiz";
import Subject from "./subjectNavIcons/Subject";

const SubjectAndWeeks = () => {
  const { course } = useCourse();
  const { data: subjects } = useGetSubjectsQuery(course.id);
  const {
    navType,
    updateSubjectNav,
    subject,
    week,
    setSubject,
    setWeek,
    day,
    getDays,
    daysState,
  } = useSubjectNavigation();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { content = "" } = useParams();

  useEffect(() => {
    if (navType !== navTypes.days_list) {
      updateSubjectNav(navTypes.subjects_list);
    }
  }, [pathname, subjects]);

  const handleClick = (subject: SubjectType, weekId?: WeekType) => {
    if (navType === navTypes.subjects_list) {
      setWeek(subject.weeksId[0]);
      setSubject(subject);
      updateSubjectNav(navTypes.weeks_list);
      return;
    }
    getDays();
    setWeek(weekId! ?? "");
  };

  const handleBackClick = () => {
    if (navType === navTypes.days_list) {
      navigate(
        ROUTES.SUBJECTS_WEEK.replace(":subject", subject.name).replace(
          ":week",
          week.id! ?? "0"
        )
      );
    } else {
      updateSubjectNav(navTypes.subjects_list);
    }
  };

  return (
    <>
      <div
        className="py-7 px-1 lg:px-4 text-lg font-semibold select-none bg-mainColor text-white cursor-pointer"
        onClick={handleBackClick}
      >
        <span className="flex items-start uppercase">
          <span className="w-6 pt-1">
            {navType !== navTypes.subjects_list && <IoIosArrowBack />}
          </span>
          <span className="block font-bold text-lg">
            {navType !== navTypes.subjects_list ? subject.name : course.name}
            <small className="block">
              {navTypes.days_list === navType ? `${week.name}` : ""}
            </small>
          </span>
        </span>
      </div>
      <div className="list overflow-y-auto">
        {navType === navTypes.days_list && (
          <div
            className="block px-2 lg:px-[25px] py-4 uppercase font-bold text-mainParaColor text-sm lg:text-base"
            key={nanoid()}
          >
            {day.name}
          </div>
        )}

        {navType === navTypes.subjects_list &&
          subjects?.map((item, i) => (
            <div
              className="block px-2 lg:px-[25px] py-4 uppercase hover:bg-grayBg cursor-pointer text-mainParaColor font-medium"
              key={"subject-list--ss-" + i + nanoid()}
              onClick={() => handleClick(item)}
            >
              {item.name}
            </div>
          ))}

        {navType === navTypes.weeks_list &&
          subject.weeksId.map((subject_week, w: number) => (
            <Link
              to={ROUTES.SUBJECTS_WEEK.replace(
                ":subject",
                subject.name
              ).replace(":week", subject_week.id)}
              className={`block px-2 lg:px-[25px] py-4 uppercase font-medium text-mainParaColor ${
                subject_week.id === week.id && "bg-grayBg "
              }`}
              key={"weeks-list--a" + w + nanoid()}
              onClick={() =>
                week.id !== subject_week.id &&
                handleClick(subject, subject_week)
              }
            >
              {subject_week.name}
            </Link>
          ))}

        {navType === navTypes.days_list &&
          daysState?.map((day) => (
            <React.Fragment key={nanoid()}>
              {["readingsId", "videosId", "quizzesId", "assignmentsId"].map(
                (type, i) =>
                  day[type]?.map((link: daysContent, ind: number) => (
                    <Link
                      to={{
                        pathname: ROUTES.SUBJECTS_WEEKS_DAY.replace(
                          ":subject",
                          subject.name
                        )
                          .replace(":week", week.name.replaceAll(" ", "-"))
                          .replace(":content", link.id),
                        search: sendParams({
                          type: type.slice(0, -2),
                        }),
                      }}
                      key={"days--links--" + type + i + "--" + ind}
                      className={`flex items-center px-2 lg:px-[25px] py-3 hover:text-mainColor group ${
                        link.id === content && "bg-grayBg"
                      }`}
                    >
                      <span className="icon mr-2.5">
                        {type === "readingsId" && <Subject />}
                        {type === "videosId" && <PlayCircle />}
                        {type === "quizzesId" && <Quiz />}
                        {type === "assignmentsId" && <TbClipboardList />}
                      </span>
                      <span className="title text-xs">{link.name}</span>
                    </Link>
                  ))
              )}
            </React.Fragment>
          ))}
      </div>
    </>
  );
};

export default SubjectAndWeeks;
