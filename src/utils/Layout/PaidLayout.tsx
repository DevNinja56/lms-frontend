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

const PaidLayout = () => {
  const { pathname } = useLocation();
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

  return (
    <motion.div className="flex">
      {!routeBlock && <SideNave showMobileSideBar={showMobileSideBar} />}
      <main className="w-screen h-screen overflow-y-auto overflow-x-hidden z-10 flex flex-col bg-mainBackgroundColor">
        <Header
          onShowMobileSidebar={onShowMobileSidebar}
          layout={layoutType.paid}
        />
        <motion.div
          className={`w-full h-full overflow-y-auto overflow-x-hidden flex flex-col md:flex-row  ${
            rightFilter !== false && "justify-between"
          }`}
        >
          {!pathname.includes("/subjects") && <SubjectNav />}
          <div className="grow">
            <Outlet />
          </div>
          {rightFilter !== false && <SideFilter />}
        </motion.div>
      </main>
    </motion.div>
  );
};

export default PaidLayout;
