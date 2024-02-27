import React, { useState } from "react";
import Button from "@components/button";
import { useUi } from "@hooks/user-interface";
import { fetchRequest } from "@utils/axios/fetch";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

interface feedback {
  feedback: string;
}

const ReportModal = () => {
  const { hideModal, modalState } = useUi();
  const {
    url,
    reviewField,
    callback,
  }: {
    url: string;
    reviewField: { [key: string]: string };
    callback: () => void;
  } = modalState;
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit: fromSubmit } = useForm<feedback>();

  const handleSubmit = ({ feedback }: feedback) => {
    setIsLoading(true);

    fetchRequest({
      url: url,
      type: "post",
      body: {
        feedback: feedback.length ? feedback : "no-feedback",
        resourceType: "report",
        ...reviewField,
      },
    })
      .then((res) => {
        hideModal();
        toast.success(res.message);
      })
      .catch((err) => toast.error(err.response.data.message))
      .finally(() => {
        callback?.();
        setIsLoading(false);
      });
  };

  return (
    <div className="bg-white px-4 md:px-8 pt-8 pb-5 w-full md:w-[508px] grid place-items-center rounded-md shadow shadow-gray-200 relative max-h-[85vh] ">
      <div className="h-full w-full flex flex-col">
        <div className="img w-full">
          <h3 className="text-[23px] font-bold text-lightBlackColor">Report</h3>
        </div>
        <form onSubmit={fromSubmit(handleSubmit)} className="w-full mt-5">
          <textarea
            placeholder="Report any problem here..."
            {...register("feedback")}
            className="resize-none bg-gray-100 w-full p-3 rounded-md text-sm text-mainParaColor outline-none"
            cols={30}
            rows={5}
          ></textarea>
          <div className="flex gap-4 justify-end mt-5 w-full">
            <Button
              isLoader={false}
              type="reset"
              text="Clear"
              disabled={isLoading}
              padding="py-[14px] px-0 md:px-[85px]"
              className="rounded-[5px] border border-mainColor text-sm md:text-base w-full"
              color="text-mainColor"
              background="bg-white"
            />
            <Button
              type="submit"
              text="Submit"
              disabled={isLoading}
              padding="py-[14px] px-0 md:px-[85px]"
              className="rounded-[5px] text-sm md:text-base w-full"
              color="text-white"
              background="bg-mainColor"
              isLoader={isLoading}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReportModal;
