import Button from "@components/button";
import Input from "@components/input";
import { API_ENDPOINTS } from "@constant/api-endpoints";
import { useUi } from "@hooks/user-interface";
import { changePasswordFormSchema } from "@utils/FormSchema";
import { changePasswordForm } from "@utils/Types";
import { fetchRequest } from "@utils/axios/fetch";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { GrFormClose } from "react-icons/gr";

const ChangePassword = () => {
  const { hideModal } = useUi();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit: fromSubmit,
    formState: { errors },
    setError,
  } = useForm<changePasswordForm>({
    resolver: changePasswordFormSchema,
  });

  const handleSubmit = (data: changePasswordForm) => {
    setIsLoading(true);
    fetchRequest({
      url: API_ENDPOINTS.USER.CHANGE_PASSWORD,
      type: "post",
      body: data,
    })
      .then((res) => {
        toast.success(res.message);
        hideModal();
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message);
        setError("password", {
          type: "custom",
          message: err.response.data.message,
        });
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="bg-white p-5 w-full md:w-[450px] grid place-items-center rounded-md shadow shadow-gray-200 relative">
      <GrFormClose
        onClick={hideModal}
        className="absolute top-2 right-2 cursor-pointer text-mainTextColor text-3xl  "
      />
      <div className="w-full">
        <h3 className="text-lg mb-3 text-black ">Change Password</h3>
        <form onSubmit={fromSubmit(handleSubmit)}>
          <Input
            {...register("password", { required: true })}
            type="password"
            placeholder="Current Password"
            icon={false}
            error={errors.password?.message}
          />
          <Input
            {...register("new_password", { required: true })}
            type="password"
            placeholder="New Password"
            error={errors.new_password?.message}
          />
          <Button
            text="Change"
            type="submit"
            className="w-full mt-5"
            disabled={isLoading}
          />
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
