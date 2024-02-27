import React, { useEffect, useState } from "react";
import Header from "@components/Header";
import SideFilter from "@components/SideFilter";
import SideNave from "@components/SideNav";
import { layoutType } from "@slices/ui.slice";
import { motion } from "framer-motion";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import SubjectNav from "@components/SubjectNav";
import { ROUTES } from "@route/constants.route";
import { useUi } from "@hooks/user-interface";
import { useCourse } from "@hooks/course";
import { getPathname } from "@utils/function";

const PaidLayout = () => {
  const { pathname, search } = useLocation();
  const { rightFilter, routeBlock } = useUi();
  const { available } = useCourse();
  const navigate = useNavigate();
  const [showMobileSideBar, setShowMobileSideBar] = useState<boolean>(false);

  useEffect(() => {
    !available && navigate(ROUTES.HOMEPAGE);
  }, [pathname]);

  const onShowMobileSidebar = () => {
    setShowMobileSideBar(!showMobileSideBar);
  };

  const params = new URLSearchParams(search);
  const content = params.get("type");

  return (
    <motion.div className="flex">
      {!routeBlock && <SideNave showMobileSideBar={showMobileSideBar} />}
      <main className="w-screen h-screen overflow-y-hidden overflow-x-hidden z-10 flex flex-col bg-mainBackgroundColor">
        <Header
          onShowMobileSidebar={onShowMobileSidebar}
          layout={layoutType.paid}
        />
        <motion.div
          className={`w-full h-full overflow-y-auto overflow-x-hidden flex flex-col md:flex-row  ${
            rightFilter !== false && "justify-between"
          }`}
        >
          {content !== "quizzes" && !pathname.includes("/subjects") && (
            <SubjectNav />
          )}
          <div className="grow">
            <div className="block md:hidden pl-5 translate-y-[26px]">
              {"/" + getPathname(pathname, [2, 3]) ===
              ROUTES.SUBJECTS_WEEK.replace("/:subject", "").replace(
                "/:week",
                ""
              ) ? (
                ""
              ) : "/" + getPathname(pathname, [2, 3, 4]) ===
                ROUTES.SUBJECTS_WEEKS_DAY.replace("/:subject", "")
                  .replace("/:week", "")
                  .replace("/:content", "") ? (
                ""
              ) : "/" + getPathname(pathname, [3]) ===
                ROUTES.QUIZZES_DETAILS.replace("/:id", "") ? (
                ""
              ) : "/" + getPathname(pathname, [3]) ===
                ROUTES.QUIZZES_TEST.replace("/:id", "") ? (
                ""
              ) : pathname.includes("/subjects") ||
                pathname.includes("/assign-test") ? (
                ""
              ) : (
                <h1 className="text-2xl font-bold text-mainParaColor uppercase">
                  {pathname.split("/course/")[1]}
                </h1>
              )}
            </div>
            <Outlet />
          </div>
          {rightFilter !== false && <SideFilter />}
        </motion.div>
      </main>
    </motion.div>
  );
};

export default PaidLayout;
