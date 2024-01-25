import Input from "@components/input";
import React, {useState} from "react";
import PhoneInput from "react-phone-input-2";
import timeZone from "./timezone.json";
import {motion} from "framer-motion";
import Button from "@components/button";
import {useUserAuth} from "@hooks/auth-hook";
import {userType} from "@utils/Types";
import toast from "react-hot-toast";
import {fetchRequest} from "@utils/axios/fetch";
import {API_ENDPOINTS} from "@constant/api-endpoints";
import {
  Controller,
  useForm,
} from "react-hook-form";

const Personal = () => {
  const {updateUserDetails, user} = useUserAuth();
  const [isLoading, setIsLoading] =
    useState(false);
  const {
    register,
    control,
    handleSubmit: fromSubmit,
    formState: {errors},
  } = useForm<userType>(); // { resolver: signInFormSchema }

  const handleSubmit = (body: userType) => {
    setIsLoading(true);
    fetchRequest({
      url: API_ENDPOINTS.USER.UPDATE_PROFILE.replace(
        ":id",
        user.id
      ),
      type: "patch",
      body,
    })
      .then((res) => {
        updateUserDetails(res.data);
        toast.success(res.message);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <motion.div
      initial={{opacity: 0, y: -10}}
      animate={{opacity: 1, y: 0}}
      exit={{opacity: 0, y: -10}}
      className="my-5">
      <form onSubmit={fromSubmit(handleSubmit)}>
        <div className="flex gap-5 lg:flex-nowrap my-4 flex-wrap">
          <div className="w-full">
            <label htmlFor="name">
              Name
              <span className="text-red-600">
                *
              </span>
            </label>
            <Input
              {...register("name")}
              id="name"
              placeholder="Name"
              defaultValue={user.name}
              error={errors.name?.message}
            />
          </div>
          <div className="w-full">
            <label>
              Phone Number
              <span className="text-red-600">
                *
              </span>
            </label>
            <div className="mt-2">
              <Controller
                {...register("phone_number")}
                control={control}
                defaultValue={user.phone_number}
                key={"phone number controller"}
                render={({field}) => (
                  <PhoneInput
                    {...field}
                    value={user.phone_number}
                    country={"pk"}
                    disabled
                    key={"phone number input"}
                  />
                )}
              />
            </div>
          </div>
        </div>
        <div className="flex gap-5 lg:flex-nowrap my-4 flex-wrap">
          <div className="w-full">
            <label htmlFor="email">
              Email
              <span className="text-red-600">
                *
              </span>
            </label>
            <Input
              {...register("email")}
              id="email"
              placeholder="Email"
              defaultValue={user.email}
              readOnly
              className="disabled:cursor-not-allowed   "
              error={errors.email?.message}
            />
          </div>
          <div className="w-full  ">
            <label>
              Gender
              <span className="text-red-600">
                *
              </span>
            </label>
            <div className="mt-2 flex gap-3">
              <input
                {...register("gender")}
                type="radio"
                defaultValue="male"
                id="male"
                defaultChecked={
                  user.gender === "male"
                }
              />
              <label
                htmlFor="male"
                className="font-semibold">
                Male
              </label>
              <input
                {...register("gender")}
                type="radio"
                defaultValue="female"
                id="female"
                defaultChecked={
                  user.gender === "female"
                }
              />
              <label
                htmlFor="female"
                className="font-semibold">
                Female
              </label>
            </div>
          </div>
        </div>
        <div className="flex gap-5 lg:flex-nowrap my-4 flex-wrap">
          <div className="w-full">
            <label htmlFor="name">
              Date of Birth
              <span className="text-red-600">
                *
              </span>
            </label>
            <Input
              {...register("dob")}
              id="dob"
              placeholder="Date Of Birth"
              defaultValue={user.dob! ?? ""}
              type="date"
              error={errors.dob?.message}
            />
          </div>
          <div className="w-full">
            <label htmlFor="timeZone">
              Time Zone
              <span className="text-red-600">
                *
              </span>
            </label>
            <div className="mt-2">
              <select
                {...register("timezone")}
                id="timeZone"
                defaultValue={
                  user.timezone! ?? "null"
                }
                className="block w-full rounded-[5px] border border-gray px-4 py-2.5 focus:ring-0 focus:outline-none text-xs text-black">
                {timeZone.map((t, i) => (
                  <option
                    key={`time-zone-list-item-${i}`}
                    value={
                      t.offset
                    }>{`(${t.offset}) ${t.name}`}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="my-4">
          <label htmlFor="address">
            Address
            <span className="text-red-600">
              *
            </span>
          </label>
          <textarea
            {...register("address")}
            id="address"
            className="my-3 w-full border border-gray-200 p-2"
            rows={3}
            defaultValue={
              user.address! ?? ""
            }></textarea>
        </div>
        <div className="my-4 ">
          <Button
            type="submit"
            disabled={isLoading}
            text="Save"
            color="text-gray-400"
            className="bg-white hover:bg-mainColor  hover:text-white border border-gray-300 w-[100px] uppercase ml-0 "
          />
        </div>
      </form>
    </motion.div>
  );
};

export default Personal;
