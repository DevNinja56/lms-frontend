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
import { Select, MenuItem, FormControl } from "@mui/material";

const SubjectAndWeeksDropDown = () => {
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

  const subjectName = subject?.name;
  const weekName = week?.name;

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

  const renderValue = (value: string) => {
    return `${value}`;
  };

  return (
    <>
      <div
        className={`py-5 px-4 md:px-6 text-lg font-semibold select-none bg-mainColor text-white cursor-pointer ${
          navType === navTypes.days_list ? "w-full md:w-auto" : "w-auto"
        }`}
        onClick={handleBackClick}
      >
        <span className="flex items-center md:items-start uppercase">
          <span className="w-6 pt-0 md:pt-1">
            {navType !== navTypes.subjects_list && <IoIosArrowBack />}
          </span>
          <span className="flex items-center gap-1 md:items-start md:block font-bold text-sm md:text-lg">
            {navType !== navTypes.subjects_list ? subject.name : course.name}
            <small className="block font-normal md:font-bold">
              {navTypes.days_list === navType ? `(${week.name})` : ""}
            </small>
          </span>
        </span>
      </div>
      <div
        className={`list overflow-y-auto ${
          navType === navTypes.days_list ? "w-full md:w-auto" : "w-auto"
        }`}
      >
        {navType === navTypes.days_list && (
          <div
            className="hidden md:block px-[25px] py-4 uppercase font-bold text-mainParaColor"
            key={nanoid()}
          >
            {day.name}
          </div>
        )}

        {navType === navTypes.subjects_list && (
          <Select
            value={subjectName}
            renderValue={() => renderValue(subjectName)}
            sx={{
              paddingTop: "6px",
              paddingLeft: "15px",
              paddingBottom: "6px",
              paddingRight: "15px",
              backgroundColor: "#e5eaf3",
              color: "#495057",
              width: "150px",
              "@media (max-width:767px)": {
                paddingTop: "2px",
                paddingBottom: "2px",
              },
            }}
          >
            {subjects?.map((item, i) => (
              <MenuItem
                sx={{
                  width: "100%",
                  paddingTop: "16px",
                  paddingLeft: "25px",
                  paddingBottom: "16px",
                  paddingRight: "73px",
                  backgroundColor: "white",
                }}
                key={"subject-list--ss-" + i + nanoid()}
                onClick={() => handleClick(item)}
              >
                {item.name}
              </MenuItem>
            ))}
          </Select>
        )}

        {navType === navTypes.weeks_list && (
          <Select
            value={weekName}
            renderValue={() => renderValue(weekName)}
            sx={{
              paddingTop: "6px",
              paddingLeft: "15px",
              paddingBottom: "6px",
              paddingRight: "15px",
              backgroundColor: "#e5eaf3",
              color: "#495057",
              width: "150px",
              "@media (max-width:767px)": {
                paddingTop: "2px",
                paddingBottom: "2px",
              },
            }}
          >
            {subject.weeksId.map((subject_week, w: number) => (
              <Link
                to={ROUTES.SUBJECTS_WEEK.replace(
                  ":subject",
                  subject.name
                ).replace(":week", subject_week.id)}
                key={"weeks-list--a" + w + nanoid()}
              >
                <MenuItem
                  key={"weeks-list--a" + w + nanoid()}
                  onClick={() =>
                    week.id !== subject_week.id &&
                    handleClick(subject, subject_week)
                  }
                  sx={{
                    width: "100%",
                    paddingTop: "16px",
                    paddingLeft: "25px",
                    paddingBottom: "16px",
                    paddingRight: "73px",
                    backgroundColor:
                      subject_week.id === week.id ? "#eceff8" : "white",
                  }}
                >
                  {subject_week.name}
                </MenuItem>
              </Link>
            ))}
          </Select>
        )}

        {navType === navTypes.days_list && (
          <FormControl sx={{ width: "100%" }}>
            <Select
              renderValue={() => renderValue(weekName)}
              sx={{
                paddingTop: "6px",
                paddingLeft: "15px",
                paddingBottom: "6px",
                paddingRight: "15px",
                backgroundColor: "#e5eaf3",
                color: "#495057",
                width: "100%",
                "@media (max-width:767px)": {
                  paddingTop: "2px",
                  paddingBottom: "2px",
                },
              }}
            >
              {daysState?.map((day) =>
                ["readingsId", "videosId", "quizzesId", "assignmentsId"].map(
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
                        key={nanoid()}
                      >
                        <MenuItem
                          sx={{
                            width: "100%",
                            paddingTop: "16px",
                            paddingLeft: "25px",
                            paddingBottom: "16px",
                            paddingRight: "73px",
                            backgroundColor:
                              link.id === content ? "#eceff8" : "white",
                          }}
                          key={"days--links--" + type + i + "--" + ind}
                        >
                          <span className="icon mr-2.5">
                            {type === "readingsId" && <Subject />}
                            {type === "videosId" && <PlayCircle />}
                            {type === "quizzesId" && <Quiz />}
                            {type === "assignmentsId" && <TbClipboardList />}
                          </span>
                          <span className="title text-xs">{link.name}</span>
                        </MenuItem>
                      </Link>
                    ))
                )
              )}
            </Select>
          </FormControl>
        )}
      </div>
    </>
  );
};

export default SubjectAndWeeksDropDown;
