import Button from "@components/button";
import Input from "@components/input";
import { API_ENDPOINTS } from "@constant/api-endpoints";
import { useUi } from "@hooks/user-interface";
import { forgotFormSchema } from "@utils/FormSchema";
import { forgotForm } from "@utils/Types";
import { fetchRequest } from "@utils/axios/fetch";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ForgotModal = () => {
  const { hideModal } = useUi();
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
    <div className="w-[450px] p-5 relative bg-white rounded-sm shadow-gray-500 shadow-sm ">
      <h3 className=" text-xl mb-5 font-semibold ">Forgot Password</h3>
      <span
        className="absolute top-2 right-5 text-gray-300 cursor-pointer text-2xl "
        onClick={hideModal}
      >
        x
      </span>
      {isSendMail ? (
        <h2>
          Please Check your Mail, Rest Password Link Has been Sent to your Email
          Address
        </h2>
      ) : (
        <form className="px-2" onSubmit={fromSubmit(handleSubmit)}>
          <Input
            {...register("email", { required: true })}
            type="text"
            placeholder="Enter your username or Email"
            className=""
            autoComplete="email"
            error={errors.email?.message}
          />
          <div className="w-full mt-5">
            <Button
              type="submit"
              text="Send"
              className="w-full"
              disabled={isLoading}
            />
          </div>
        </form>
      )}
    </div>
  );
};

export default ForgotModal;
