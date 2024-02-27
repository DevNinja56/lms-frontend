import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SubHeading from "@components/Common/SubHeading";
import Paragraph from "@components/Common/Paragraph";
import Button from "@components/button";
import { ROUTES } from "@route/constants.route";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import NewRating from "@components/Home/Rating";
import { fetchRequest } from "@utils/axios/fetch";
import { API_ENDPOINTS } from "@constant/api-endpoints";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authStateType } from "@slices/auth.slice";

interface RootState {
  auth: authStateType;
}

const ReviewWrite = () => {
  const { register, handleSubmit } = useForm();
  const [rating, setRating] = useState(0);
  const { id } = useParams();
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.auth.user);

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };

  const onSubmit = (e: any) => {
    if (user) {
      toast.error("You are not Log In...");
      return navigate(ROUTES.SIGN_IN);
    }

    toast.promise(
      fetchRequest({
        url: API_ENDPOINTS.REVIEWS.POST_REVIEW,
        type: "post",
        body: {
          courseId: id,
          rating: rating,
          feedback: e.feedback,
          type: "Course",
        },
      }),
      {
        loading: "Loading....",
        success: "Review Added",
        error: "An error accord",
      }
    );
  };

  return (
    <div className="ml-24">
      <SubHeading heading="Write a Review" />
      <Paragraph paragraph="What is it like to Course?" />
      <div>
        <div className="flex gap-1 items-center mt-4">
          <NewRating
            initialRating={rating}
            onChange={handleRatingChange}
            emptySymbol={
              <AiOutlineStar color="orange" style={{ fontSize: "20px" }} />
            }
            fullSymbol={
              <AiFillStar color="orange" style={{ fontSize: "20px" }} />
            }
          />
        </div>
      </div>
      <div className="w-full">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <label htmlFor="#" className="font-normal text-base py-2">
            Review Content
          </label>
          <textarea
            {...register("feedback")}
            name="feedback"
            id="#"
            cols={28}
            rows={10}
            className="rounded outline-none p-4 mr-5"
            placeholder="Message"
          ></textarea>
            <div className="mt-4 mr-[39rem]">
              <Button text="Submit Reviews" type="submit" />
            </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewWrite;
