import {
  loggedIn,
  logout,
  updateUser,
} from "@slices/auth.slice";
import {userType} from "@utils/Types";
import {
  useAppDispatch,
  useAppSelector,
} from "./redux-hook";
import {verifyUser} from "@actions/verify-user";
import {
  deleteCookie,
  setCookie,
} from "@utils/cookies";
import {fetchRequest} from "@utils/axios/fetch";
import {API_ENDPOINTS} from "@constant/api-endpoints";
import {useNavigate} from "react-router-dom";
import {ROUTES} from "@route/constants.route";

type logInUserType = {
  access: string;
  refresh?: string;
};

export const useUserAuth = () => {
  const state = useAppSelector(
    (state) => state.auth
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const updateUserDetails = (obj: userType) =>
    dispatch(updateUser(obj));
  const refetchUser = () =>
    dispatch(verifyUser());

  const logoutUser = () => {
    fetchRequest({
      url: API_ENDPOINTS.AUTH.LOG_OUT,
    }).then(() => {
      dispatch(logout());
      deleteCookie("access_token");
      deleteCookie("refresh_token");
      localStorage.clear();
      navigate(ROUTES.SIGN_IN);
    });
  };

  const loggedInUser = ({
    access,
    refresh,
  }: logInUserType) => {
    dispatch(loggedIn());
    setCookie("access_token", access);
    refresh &&
      setCookie("refresh_token", refresh);
  };

  return {
    ...state,
    refetchUser,
    updateUserDetails,
    logoutUser,
    loggedInUser,
  };
};
