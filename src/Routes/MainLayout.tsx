import ScreenLoader from "@components/ScreenLoader";
import { useUserAuth } from "@hooks/auth-hook";
import ModalWraper from "../Modal";
import React, { Suspense, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import AnimatedComponent from "./AnimatedComponent";
import { useQuize } from "@hooks/quize-hook";

const MainLayout = () => {
  const location = useLocation();
  const { refetchUser, isAuthenticated } = useUserAuth();
  const { isStarted, quizePath } = useQuize();
  const navigate = useNavigate();

  useEffect(() => {
    !isAuthenticated && refetchUser();
    isStarted && navigate(quizePath); // navigate to the current started quize path
  }, [location.pathname]);

  return (
    <AnimatedComponent key={"motion-div-" + location.pathname}>
      <Suspense fallback={<ScreenLoader />}>
        <Outlet />
        <ModalWraper />
      </Suspense>
    </AnimatedComponent>
  );
};

export default MainLayout;
