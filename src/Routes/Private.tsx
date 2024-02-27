import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "@route/constants.route";
import { useUserAuth } from "@hooks/auth-hook";
import ScreenLoader from "@components/ScreenLoader";
import BasicLayout from "@utils/Layout/BasicLayout";
import PaidLayout from "@utils/Layout/PaidLayout";

const PrivateRouteLayout = () => {
  const { isAuthenticated, isLoading } = useUserAuth();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      if (!isLoading && !isAuthenticated && isAuthenticated !== null) {
        navigate(ROUTES.SIGN_IN);
      }
    }, 1000);
  }, [isAuthenticated, isLoading]);

  if (isLoading) return <ScreenLoader />;

  return (
    <>
      {isAuthenticated ? (
        pathname.includes(ROUTES.HOMEPAGE) ? (
          <BasicLayout />
        ) : (
          <PaidLayout />
        )
      ) : (
        <ScreenLoader />
      )}
    </>
  );
};

export default PrivateRouteLayout;
