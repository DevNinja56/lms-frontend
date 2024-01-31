import React from "react";
import {useForm} from "react-hook-form";
import SubHeading from "@components/Common/SubHeading";
import Paragraph from "@components/Common/Paragraph";
import {FaStar} from "react-icons/fa";

const ReviewWrite = () => {
  const {register, handleSubmit} = useForm();

  const onSubmit = async (e: any) => {
    console.log(e);
  };
  return (
    <div>
      <SubHeading heading="Write a Review" />
      <Paragraph paragraph="What is it like to Course?" />
      <div>
        <div className="text-base text-yellow-500 flex gap-1 items-center ">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
      </div>
      <div className="w-full">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col">
          <label
            htmlFor="#"
            className="font-normal text-base py-4">
            Review Title
          </label>
          <input
            type="text"
            className="rounded-lg outline-none p-4 border-2"
            placeholder="Great Course"
            {...register("comment")}
          />
          <label
            htmlFor="#"
            className="font-normal text-base py-4">
            Review Content
          </label>
          <textarea
            {...register("message")}
            name="message"
            id="#"
            cols={30}
            rows={10}
            className="rounded-lg outline-none p-4 border-2"
            placeholder="Message"></textarea>
        </form>
      </div>
    </div>
  );
};

export default ReviewWrite;
