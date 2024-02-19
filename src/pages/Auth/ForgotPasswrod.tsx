import Button from "@components/button";
import Input from "@components/input";
import { API_ENDPOINTS } from "@constant/api-endpoints";
import { ROUTES } from "@route/constants.route";
import { forgotFormSchema } from "@utils/FormSchema";
import { forgotForm } from "@utils/Types";
import { fetchRequest } from "@utils/axios/fetch";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit: fromSubmit,
    formState: { errors },
    setError,
  } = useForm<forgotForm>({ resolver: forgotFormSchema });
  const [isLoading, setIsLoading] = useState(false);
  const [isSendMail, setIsSendMail] = useState(false);

  const handleSubmit = (body: forgotForm) => {
    setIsLoading(true);
    fetchRequest({
      url: API_ENDPOINTS.AUTH.FORGOT_PASSWORD,
      type: "post",
      body,
    })
      .then((res) => {
        console.log(res);
        setIsSendMail(true);
      })
      .catch((err) => {
        console.log(err);
        setError("email", {
          type: "custom",
          message: err.response.data.message,
        });
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="flex min-h-full flex-col justify-center items-center px-4 md:px-6 lg:px-8 bg-grayBg w-full h-screen">
      <div className="w-full max-w-[456px] flex justify-center rounded-lg overflow-hidden min-h-[350px]">
        <div className="w-full bg-white pb-5 shadow-xl">
          <div className="w-full">
            <div className="w-full rounded-lg rounded-b-none bg-mainColor bg-opacity-25 relative min-h-28 flex items-end justify-between px-4 md:px-6">
              <div className="flex flex-col gap-1 h-28 justify-center">
                <h1 className="text-base font-semibold text-mainColor min-w-[122px]">
                  Free Register
                </h1>
                <p className="text-xs text-mainColor">
                  Get your free account now.
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
            {isSendMail && (
              <div className="px-4 md:px-6">
                <div className="w-full rounded-md flex justify-center items-center bg-green-600 border border-green-600 border-opacity-40 bg-opacity-10 min-h-11 my-3">
                  <h2 className="text-center text-mainParaColor text-xs">
                    Reset link are sended to your mailbox, check there first
                  </h2>
                </div>
              </div>
            )}
            <form
              className="space-y-10 w-full px-4 md:px-6"
              onSubmit={fromSubmit(handleSubmit)}
            >
              <div className="flex flex-col gap-3 w-full">
                <Input
                  {...register("email", { required: true })}
                  type="text"
                  placeholder="Enter your username or Email"
                  className=""
                  autoComplete="email"
                  error={errors.email?.message}
                  label="Email"
                />
              </div>
              <div className="w-full">
                <Button
                  type="submit"
                  text="Reset"
                  className="w-full hover:bg-opacity-70 transition-all duration-300"
                  disabled={isLoading}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <p className="text-xs text-center mt-5 text-lightBlackColor pt-5 font-normal">
        Go back to{" "}
        <Link to={ROUTES.SIGN_IN} className="text-mainColor font-semibold">
          Login
        </Link>
      </p>
    </div>
    // <div className="w-[450px] p-5 relative bg-white rounded-sm shadow-gray-500 shadow-sm ">
    //   <h3 className=" text-xl mb-5 font-semibold ">Forgot Password</h3>
    //   <span
    //     className="absolute top-2 right-5 text-gray-300 cursor-pointer text-2xl "
    //     onClick={hideModal}
    //   >
    //     x
    //   </span>
    //   {isSendMail ? (
    //     <h2>
    //       Please Check your Mail, Rest Password Link Has been Sent to your Email
    //       Address
    //     </h2>
    //   ) : (
    //     <form className="px-2" onSubmit={fromSubmit(handleSubmit)}>
    //       <Input
    //         {...register("email", { required: true })}
    //         type="text"
    //         placeholder="Enter your username or Email"
    //         className=""
    //         autoComplete="email"
    //         error={errors.email?.message}
    //       />
    //       <div className="w-full mt-5">
    //         <Button
    //           type="submit"
    //           text="Send"
    //           className="w-full"
    //           disabled={isLoading}
    //         />
    //       </div>
    //     </form>
    //   )}
    // </div>
  );
};

export default ForgotPassword;
