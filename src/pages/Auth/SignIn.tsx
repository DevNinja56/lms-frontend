import React, { useState } from "react";
import Button from "@components/button";
import Input from "@components/input";
import { ROUTES } from "@route/constants.route";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { signInForm } from "@utils/Types";
import { signInFormSchema } from "@utils/FormSchema";
import { useUserAuth } from "@hooks/auth-hook";
import { fetchRequest } from "@utils/axios/fetch";
import { API_ENDPOINTS } from "@constant/api-endpoints";
import toast from "react-hot-toast";
import { AiOutlineGoogle } from "react-icons/ai";
import { RiFacebookFill } from "react-icons/ri";
import { SlLock } from "react-icons/sl";

const SignIn = () => {
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
    <div className="flex min-h-full flex-col justify-center items-center px-4 md:px-6 py-12 lg:px-8 bg-grayBg w-full h-full">
      <div className="w-full max-w-[456px] flex justify-center rounded-lg overflow-hidden min-h-[560px]">
        <div className="w-full bg-white pb-5 shadow-xl">
          <div className="w-full">
            <div className="w-full rounded-lg rounded-b-none bg-mainColor bg-opacity-25 relative min-h-28 flex items-end justify-between px-4 md:px-6">
              <div className="flex flex-col gap-1 h-28 justify-center">
                <h1 className="text-base font-semibold text-mainColor min-w-[122px]">
                  Welcome Back
                </h1>
                <p className="text-xs text-mainColor">
                  Sign in to continue to Dashboard.
                </p>
              </div>
              <img
                className="h-24 w-36 md:h-auto md:w-auto"
                src="/images/auth/authHeaderForm.png"
              />
            </div>
            <form
              className="space-y-10 w-full px-4 md:px-6 pt-4"
              onSubmit={fromSubmit(handleSubmit)}
            >
              <div className="flex flex-col gap-2 w-full">
                <Input
                  {...register("email", { required: true })}
                  type="text"
                  placeholder="Username or Email"
                  className="mt-2"
                  autoComplete="email"
                  error={errors.email?.message}
                  label="Email"
                />
                <Input
                  {...register("password", { required: true })}
                  type="password"
                  placeholder="Password"
                  className="mt-2"
                  autoComplete="password"
                  error={errors.password?.message}
                  label="Password"
                />
                <div className="flex items-center gap-2 pt-3">
                  <input className="h-5 w-5 cursor-pointer" type="checkbox" />
                  <p className="text-sm text-mainParaColor">Remember me</p>
                </div>
              </div>
              <div className="w-full flex flex-col gap-4">
                <Button
                  type="submit"
                  text="Log in"
                  className="w-full hover:bg-opacity-70 transition-all duration-300"
                  disabled={isLoading}
                />
                <div className="flex flex-col items-center gap-3">
                  <p className="text-xs font-semibold text-lightBlackColor">
                    Sign In with
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="flex justify-center items-center h-8 w-8 rounded-full bg-blue-500 text-white hover:rotate-[360deg] transition-all duration-300 cursor-pointer hover:bg-white hover:text-blue-500">
                      <RiFacebookFill className="h-5 w-5" />
                    </div>
                    <div className="flex justify-center items-center h-8 w-8 rounded-full bg-red-500 text-white hover:rotate-[360deg] transition-all duration-300 cursor-pointer hover:bg-white hover:text-red-500">
                      <AiOutlineGoogle className="h-5 w-5" />
                    </div>
                  </div>
                </div>
                <p className="text-center text-lightBlackColor hover:text-mainColor text-sm mb-3 mt-1 cursor-pointer transition-all duration-300">
                  <Link to={ROUTES.FORGOT_PASSWORD}>
                    <span className="select-none flex items-center justify-center w-full gap-2">
                      <SlLock /> Forgot your password?
                    </span>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <p className="text-xs text-center mt-5 text-lightBlackColor pt-5 font-norma;">
        Don't have an account?{" "}
        <Link to={ROUTES.SIGN_UP} className="text-mainColor font-semibold">
          Signup now
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
