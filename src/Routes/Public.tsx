import ScreenLoader from "@components/ScreenLoader";
import { useUserAuth } from "@hooks/auth-hook";
import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ROUTES } from "./constants.route";

const PublicRouteLayout = () => {
  const { isAuthenticated, isLoading } = useUserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      navigate(ROUTES.HOMEPAGE);
    }
  }, [isAuthenticated, isLoading]);

  if (isLoading) return <ScreenLoader />;

  return (
    <>
      <Outlet />
    </>
  );
};

export default PublicRouteLayout;
