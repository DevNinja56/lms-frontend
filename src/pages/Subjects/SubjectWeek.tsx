import { useSubjectNavigation } from "@hooks/subject-nav";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Accordion from "@components/Accordion";
import SubjectWeekHeader from "@components/Subject/SubjectWeekHeader";
import { ROUTES } from "@route/constants.route";
import { TbClipboardList } from "react-icons/tb";
import { dayType, daysContent, navTypes } from "@utils/Types";
import { useUi } from "@hooks/user-interface";
import { sendParams } from "@utils/link-param";
import Subject from "@components/SubjectNav/subjectNavIcons/Subject";
import PlayCircle from "@components/SubjectNav/subjectNavIcons/PlayCircle";
import Quiz from "@components/SubjectNav/subjectNavIcons/Quiz";

const SubjectWeek = () => {
  const { subject: paramSubject = "" } = useParams();
  const {
    updateSubjectNav,
    subject,
    week,
    setDay,
    daysState,
    getDays,
    setDayState,
  } = useSubjectNavigation();
  const { setNav } = useUi();

  useEffect(() => {
    setNav(true);
    updateSubjectNav(navTypes.weeks_list);
    getDays();
  }, [paramSubject]);

  const handleClickSubjectWeekDay = (data: dayType) => {
    updateSubjectNav(navTypes.days_list);
    setDay(data);
    setDayState(data);
  };

  return (
    <div className="w-11/12 p-5 relative">
      <h1 className="text-base font-medium mb-3 text-lightBlackColor uppercase hidden lg:block">
        {subject?.name}
      </h1>
      <SubjectWeekHeader />
      {daysState.map((day, i) => (
        <Accordion title={day.name} active={i === 0} key={"weeks-lists--" + i}>
          <>
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
                      search: sendParams({ type: type.slice(0, -2) }),
                    }}
                    key={"days--links--" + i + "--" + ind}
                    onClick={() => handleClickSubjectWeekDay(day)}
                    className="flex items-center py-2 hover:text-mainColor px-[14px] text-mainParaColor group"
                  >
                    <span className="icon mr-2.5">
                      {type === "readingsId" && <Subject />}
                      {type === "videosId" && <PlayCircle />}
                      {type === "quizzesId" && <Quiz />}
                      {type === "assignmentsId" && <TbClipboardList />}
                    </span>
                    <span className="title">{link.name}</span>
                  </Link>
                ))
            )}
          </>
        </Accordion>
      ))}
    </div>
  );
};

export default SubjectWeek;
