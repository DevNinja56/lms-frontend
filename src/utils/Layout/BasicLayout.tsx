import React from "react";
import Header from "@components/Header";
import SideFilter from "@components/SideFilter";
import { useUi } from "@hooks/user-interface";
import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";

const BasicLayout = () => {
  const { rightFilter } = useUi();
  return (
    <>
      <Header />
      <main className="w-screen h-screen overflow-y-auto overflow-x-hidden z-10 pt-[50px] flex bg-mainBackgroundColor">
        <motion.div
          className={`w-full  overflow-y-auto overflow-x-hidden  ${
            rightFilter !== false && "flex justify-between"
          }`}
        >
          <Outlet />
          {rightFilter !== false && <SideFilter />}
        </motion.div>
        {/*         
        <img
          src="/images/logo-fill.png"
          alt="background-image"
          className="fixed z-[-1] bottom-[-10%] right-0 opacity-25 min-w-[40vw] "
        /> */}
      </main>
    </>
  );
};

export default BasicLayout;
