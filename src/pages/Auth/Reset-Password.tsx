import React, { useEffect, useState } from "react";
import Button from "@components/button";
import Input from "@components/input";
import { ROUTES } from "@route/constants.route";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { resetForm } from "@utils/Types";
import { resetFormSchema } from "@utils/FormSchema";
import { fetchRequest } from "@utils/axios/fetch";
import { API_ENDPOINTS } from "@constant/api-endpoints";
import toast from "react-hot-toast";
import jwtDecode from "jwt-decode";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit: fromSubmit,
    formState: { errors },
  } = useForm<resetForm>({ resolver: resetFormSchema });
  const [param] = useSearchParams();

  const token = param.get("token");
  const { _id: email }: { _id: string | null } = token
    ? jwtDecode(token)
    : { _id: null };

  useEffect(() => {
    (!email || !token) && navigate(ROUTES.HOMEPAGE);
  }, []);

  const handleSubmit = (body: resetForm) => {
    setIsLoading(true);
    fetchRequest({
      url: API_ENDPOINTS.AUTH.RESET_PASSWORD,
      type: "post",
      body: { password: body.password, email, token },
    })
      .then((res) => {
        navigate(ROUTES.SIGN_IN);
        toast.success(res.message);
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
            <h2 className="text-center text-3xl mb-10 font-light ">
              Reset Password
            </h2>
            <p className="text-sm text-center ">
              Your Email <span className="text-red-600">{email}</span>
            </p>
            <form className="space-y-10" onSubmit={fromSubmit(handleSubmit)}>
              <div>
                <Input
                  {...register("password", { required: true })}
                  type="password"
                  placeholder="Password"
                  className=""
                  autoComplete="password"
                  error={errors.password?.message}
                />
                <Input
                  {...register("c_password", { required: true })}
                  type="password"
                  placeholder="Confirm Password"
                  className=""
                  autoComplete="password"
                  error={errors.c_password?.message}
                />
              </div>
              <div className="w-full">
                <Button
                  type="submit"
                  text="Change"
                  className="w-4/5"
                  disabled={isLoading}
                />
                <p className="text-sm text-center mt-5 text-[#87A1C8] ">
                  For Sign In{" "}
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

export default ResetPassword;
