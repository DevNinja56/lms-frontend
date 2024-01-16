import React, { useState } from "react";
import Button from "@components/button";
import Input from "@components/input";
import { ROUTES } from "@route/constants.route";
import { Link, useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Controller, useForm } from "react-hook-form";
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
    control,
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
    <div className="flex min-h-full flex-col justify-center items-center px-6 py-12 lg:px-8 bg-grayBg w-full h-screen ">
      <div className="w-full lg:w-4/6 max-w-[1200px] flex justify-center rounded-lg overflow-hidden min-h-[450px] ">
        <div className="w-2/5 bg-mainColor lg:grid place-items-center hidden ">
          <img src="/images/logo.png" alt="logo" />
        </div>
        <div className="w-full md:w-3/5 bg-white py-5 px-3 sm:px-10 grid place-items-center ">
          <div className="w-[90%]">
            <h2 className="text-center text-3xl mb-10 font-light ">Sign up</h2>
            <form className="space-y-10" onSubmit={fromSubmit(handleSubmit)}>
              <div>
                <Input
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="Full Name"
                  className={errors.name?.message ? "" : "mt-4 mb-5"}
                  autoComplete="name"
                  error={errors.name?.message}
                />
                <Input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="Email"
                  className={errors.email?.message ? "" : "mt-4 mb-5"}
                  autoComplete="email"
                  error={errors.email?.message}
                />
                <Input
                  {...register("password", { required: true })}
                  type="password"
                  placeholder="Password"
                  className={errors.password?.message ? "" : "mt-4 mb-5"}
                  autoComplete="password"
                  error={errors.password?.message}
                />
                <div className="my-3">
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
                </div>
              </div>
              <div className="w-full">
                <Button
                  type="submit"
                  text="Sign up"
                  className="w-4/5"
                  disabled={isLoading}
                />
                <p className="text-sm text-center mt-5 text-[#87A1C8] ">
                  Already have an account?{" "}
                  <Link
                    to={ROUTES.SIGN_IN}
                    className="text-mainColor font-medium  "
                  >
                    Log in
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

export default SignUp;
