import React, { useState } from "react";
import Button from "@components/button";
import Input from "@components/input";
import { ROUTES } from "@route/constants.route";
import { Link, useNavigate } from "react-router-dom";
import "react-phone-input-2/lib/style.css";
import { useForm } from "react-hook-form";
import { signUpForm } from "@utils/Types";
import { fetchRequest } from "@utils/axios/fetch";
import { API_ENDPOINTS } from "@constant/api-endpoints";
import { useUserAuth } from "@hooks/auth-hook";
import { signUpFormSchema } from "@utils/FormSchema";
import { toast } from "react-hot-toast";

const SignUp = () => {
  const { updateUserDetails } = useUserAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit: fromSubmit,
    formState: { errors },
  } = useForm<signUpForm>({ resolver: signUpFormSchema });

  const handleSubmit = (data: signUpForm) => {
    setIsLoading(true);
    fetchRequest({
      url: API_ENDPOINTS.AUTH.SIGNUP,
      type: "post",
      body: { ...data, phone_number: "+" + data.phone_number },
    })
      .then((res) => {
        updateUserDetails(res.data);
        navigate(ROUTES.OTP, { state: true });
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message);
      })
      .finally(() => setIsLoading(false));
  };
  return (
    <div className="flex min-h-full flex-col justify-center items-center px-4 md:px-6 py-12 lg:px-8 bg-grayBg w-full h-full">
      <div className="w-full max-w-[456px] flex justify-center rounded-lg overflow-hidden min-h-[510px]">
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
            <div className="px-4 md:px-6 h-12">
              <div className="h-16 w-16 rounded-full flex items-center justify-center bg-grayBg -translate-y-5">
                <img className="h-10 w-10" src="/images/logo-fill.png" />
              </div>
            </div>
            <form
              className="space-y-10 w-full px-4 md:px-6"
              onSubmit={fromSubmit(handleSubmit)}
            >
              <div className="flex flex-col gap-3 w-full">
                <Input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="Enter Email"
                  className="mt-2"
                  autoComplete="email"
                  error={errors.email?.message}
                  label="Email"
                />
                <Input
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="Enter Username"
                  className="mt-2"
                  autoComplete="name"
                  error={errors.name?.message}
                  label="Username"
                />
                <Input
                  {...register("password", { required: true })}
                  type="password"
                  placeholder="Enter Password"
                  className="mt-2"
                  autoComplete="password"
                  error={errors.password?.message}
                  label="Password"
                />
                {/* <div className="my-3">
                  <Controller
                    control={control}
                    {...register("phone_number")}
                    render={({ field }) => (
                      <>
                        <PhoneInput
                          {...field}
                          country={"pk"}
                          onlyCountries={["pk"]}
                          placeholder="Phone Number"
                          inputProps={{ required: true }}
                          isValid={!errors.phone_number?.message}
                        />
                        {errors.phone_number?.message && (
                          <p className="text-red-600 capitalize text-xs my-1 ">
                            {errors.phone_number?.message}
                          </p>
                        )}
                      </>
                    )}
                  />
                </div> */}
              </div>
              <div className="w-full flex flex-col gap-4">
                <Button
                  type="submit"
                  text="Register"
                  className="w-full hover:bg-opacity-70 transition-all duration-300"
                  disabled={isLoading}
                />
                <p className="text-center text-lightBlackColor hover:text-mainColor text-xs mb-3 mt-1 cursor-pointer transition-all duration-300">
                  By registering you agree to the{" "}
                  <span className="text-mainColor">Terms of Use</span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <p className="text-xs text-center mt-5 text-lightBlackColor pt-5 font-norma;">
        Don't have an account?{" "}
        <Link to={ROUTES.SIGN_IN} className="text-mainColor font-semibold">
          Login
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
