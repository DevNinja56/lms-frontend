import React, { useState } from "react";
import Button from "@components/button";
import Input from "@components/input";
import { ROUTES } from "@route/constants.route";
import { Link, useNavigate } from "react-router-dom";
import { useUi } from "@hooks/user-interface";
import { modalType } from "@slices/ui.slice";
import { useForm } from "react-hook-form";
import { signInForm } from "@utils/Types";
import { signInFormSchema } from "@utils/FormSchema";
import { useUserAuth } from "@hooks/auth-hook";
import { fetchRequest } from "@utils/axios/fetch";
import { API_ENDPOINTS } from "@constant/api-endpoints";
import toast from "react-hot-toast";

const SignIn = () => {
  const { updateModal } = useUi();
  const { updateUserDetails, loggedInUser } = useUserAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit: fromSubmit,
    formState: { errors },
    setError,
  } = useForm<signInForm>({ resolver: signInFormSchema });

  const handleSubmit = (body: signInForm) => {
    setIsLoading(true);
    fetchRequest({
      url: API_ENDPOINTS.AUTH.SIGNIN,
      type: "post",
      body,
    })
      .then((res) => {
        updateUserDetails(res.data.user);
        loggedInUser({
          access: res.data.accessToken,
          refresh: res.data.refreshToken,
        });
        navigate(ROUTES.HOMEPAGE);
        toast.success("User Logged In Success");
      })
      .catch((err) => {
        setError("email", {
          type: "custom",
          message: err.response.data.message,
        });
        setError("password", {
          type: "custom",
          message: err.response.data.message,
        });
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="flex min-h-full flex-col justify-center items-center px-6 py-12 lg:px-8 bg-grayBg w-full h-screen ">
      <div className="w-full lg:w-4/6 max-w-[1200px] flex justify-center rounded-lg overflow-hidden min-h-[450px] ">
        <div className="w-2/5 bg-mainColor lg:grid place-items-center hidden ">
          <img src="/images/logo.png" alt="logo" />
        </div>
        <div className="w-full md:w-3/5 bg-white py-5 px-3 sm:px-10 grid place-items-center ">
          <div className="w-[90%]">
            <h2 className="text-center text-3xl mb-10 font-light ">Log in</h2>
            <form className="space-y-10" onSubmit={fromSubmit(handleSubmit)}>
              <div>
                <Input
                  {...register("email", { required: true })}
                  type="text"
                  placeholder="Username or Email"
                  className={errors.email?.message ? "" : "mt-4 mb-5"}
                  autoComplete="email"
                  error={errors.email?.message}
                />
                <Input
                  {...register("password", { required: true })}
                  type="password"
                  placeholder="Password"
                  className=""
                  autoComplete="password"
                  error={errors.password?.message}
                />
                <p className="text-right text-mainColor hover:text-blue-600 text-sm mb-3 mt-1 cursor-pointer ">
                  <span
                    className=" select-none  "
                    onClick={() =>
                      updateModal({
                        type: modalType.forgot,
                        state: { name: "forgot" },
                      })
                    }
                  >
                    Forgot Password?
                  </span>
                </p>
              </div>
              <div className="w-full">
                <Button
                  type="submit"
                  text="Log in"
                  className="w-4/5"
                  disabled={isLoading}
                />
                <p className="text-sm text-center mt-5 text-[#87A1C8] ">
                  Don't have an account?{" "}
                  <Link
                    to={ROUTES.SIGN_UP}
                    className="text-mainColor font-medium  "
                  >
                    Sign up
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
