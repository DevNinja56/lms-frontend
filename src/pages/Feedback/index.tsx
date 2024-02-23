import Button from "@components/button";
import React, { useEffect, useState } from "react";
import General from "./General";
import Academics from "./Academics";
import LiveLectures from "./LiveLectures";
import OverallRating from "./OverallRating";
import { fetchRequest } from "@utils/axios/fetch";
import { API_ENDPOINTS } from "@constant/api-endpoints";
import { useGetUserFeedbackQuery } from "@slices/fetch-all-queries.slice";
import ScreenLoader from "@components/ScreenLoader";
import toast from "react-hot-toast";

enum feedBackBtnEnum {
  "general" = "general",
  "academic" = "academic",
  "live Lectures/QA Formums" = "live Lectures/QA Formums",
  "overAllRating" = "overAllRating",
}
const initialValue = {
  general: {},
  academic: {},
  liveLectures: {},
  overAllRating: {},
};
const Feedback = () => {
  const { data, isLoading } = useGetUserFeedbackQuery();
  const [loader, setLoader] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(
    feedBackBtnEnum.general
  );
  const [feedback, setFeedback] = useState(initialValue);

  console.log(feedback);

  useEffect(() => {
    setFeedback({
      ...initialValue,
      general: data?.["general"] ?? {},
      academic: data?.["academic"] ?? {},
      liveLectures: data?.["liveLectures"] || {},
      overAllRating: data?.["overAllRating"] || {},
    });
  }, [data]);

  const currentActiveTab = {
    [feedBackBtnEnum.general]: (
      <General
        setValue={(val: any) =>
          setFeedback((prev) => ({ ...prev, general: val }))
        }
        value={feedback.general}
      />
    ),
    [feedBackBtnEnum.academic]: (
      <Academics
        setValue={(val: any) =>
          setFeedback((prev) => ({ ...prev, academic: val }))
        }
        value={feedback.academic}
      />
    ),
    [feedBackBtnEnum["live Lectures/QA Formums"]]: (
      <LiveLectures
        setValue={(val: any) =>
          setFeedback((prev) => ({ ...prev, liveLectures: val }))
        }
        value={feedback.liveLectures}
      />
    ),
    [feedBackBtnEnum.overAllRating]: (
      <OverallRating
        setValue={(val: any) =>
          setFeedback((prev) => ({ ...prev, overAllRating: val }))
        }
        value={feedback.overAllRating}
      />
    ),
  };
  const handleSubmitApi = async () => {
    setLoader(true);
    toast.promise(
      fetchRequest({
        url:
          data?.data === null
            ? API_ENDPOINTS.FEEDBACK
            : `${API_ENDPOINTS.FEEDBACK}/${data?.id}`,
        type: data?.data === null ? "post" : "patch",
        body: feedback,
      }),
      {
        loading: "Please Wait!..",
        success: "Feedback successfully updated",
        error: "Some thing went wrong",
      }
    );
    setLoader(false);
  };
  return (
    <>
      {isLoading ? (
        <ScreenLoader />
      ) : (
        <div className="p-10 pr-0 w-[95%]">
          <div className="flex gap-5 mb-7">
            {Object.values(feedBackBtnEnum).map((btn, i) => (
              <Button
                key={"feedback-rating-btn--" + i}
                padding={"py-[13px] px-9"}
                onClick={() => setSelectedFilter(btn)}
                className={`ml-0 mr-0 transition-all duration-150 text-lg rounded-[5px] capitalize`}
                text={btn}
                background={
                  selectedFilter === btn
                    ? " bg-mainColor border-2 border-mainColor"
                    : "bg-mainBackgroundColor border text-mainColor border-mainColor"
                }
                color={`${
                  selectedFilter === btn ? "text-white" : "text-black"
                }`}
              />
            ))}
          </div>
          {currentActiveTab[selectedFilter]}

          <Button
            text={"Save"}
            className={"ml-0 text-lg font-medium"}
            padding="py-[13px] px-[50px]"
            onClick={handleSubmitApi}
            disabled={loader}
            isLoader={loader}
          />
        </div>
      )}
    </>
  );
};
export default Feedback;
