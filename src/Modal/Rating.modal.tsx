import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Button from "@components/button";
import NewRating from "@components/Home/Rating";
import { useUi } from "@hooks/user-interface";
import { fetchRequest } from "@utils/axios/fetch";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { formatNumberToPoints, getAvrRatting } from "@utils/getAvrRatting";

interface feedback {
  feedback: string;
}

const RatingModal = () => {
  const { hideModal, modalState } = useUi();
  const {
    url,
    reviewField,
    avgRating,
    totalRating,
    callback,
    rating: userRating,
  }: {
    url: string;
    reviewField: { [key: string]: string };
    avgRating: number;
    totalRating: number;
    callback?: () => void;
    rating: { rating: number; feedback: string };
  } = modalState;
  const [rating, setRating] = useState(userRating.rating);
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit: fromSubmit } = useForm<feedback>();

  const handleSubmit = ({ feedback }: feedback) => {
    setIsLoading(true);

    fetchRequest({
      url: url,
      type: "post",
      body: {
        rating,
        feedback: feedback.length ? feedback : "no-feedback",
        ...reviewField,
      },
    })
      .then((res) => {
        callback?.();
        hideModal();
        toast.success(res.message);
      })
      .catch((err) => toast.error(err.response.data.message))
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full md:w-[508px] bg-white rounded-md shadow shadow-gray-200 px-5 py-2">
        <div className="img w-full flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="266.139"
            height="229.809"
            viewBox="0 0 266.139 229.809"
            className="max-h-[25vh] w-full"
          >
            <defs>
              <linearGradient
                id="linear-gradient"
                x1="0.468"
                y1={1}
                x2="0.471"
                y2="0.151"
                gradientUnits="objectBoundingBox"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={1} stopColor="#ffcd20" />
              </linearGradient>
              <clipPath id="clip-path">
                <path
                  id="Icon_awesome-star"
                  data-name="Icon awesome-star"
                  d="M15.487,1.155,11.252,9.742,1.777,11.123A2.076,2.076,0,0,0,.629,14.664l6.855,6.68L5.863,30.78a2.074,2.074,0,0,0,3.009,2.186l8.476-4.455,8.476,4.455a2.076,2.076,0,0,0,3.009-2.186l-1.621-9.436,6.855-6.68a2.076,2.076,0,0,0-1.148-3.541L23.444,9.742,19.209,1.155a2.077,2.077,0,0,0-3.723,0Z"
                  transform="translate(7.47 0) rotate(13)"
                  fill="#07d79b"
                />
              </clipPath>
              <filter
                id="Icon_awesome-star-2"
                x="40.975"
                y={0}
                width="225.164"
                height="221.743"
                filterUnits="userSpaceOnUse"
              >
                <feOffset dy={8} />
                <feGaussianBlur stdDeviation={8} result="blur" />
                <feFlood floodColor="#005a97" floodOpacity="0.2" />
                <feComposite operator="in" in2="blur" />
                <feComposite in="SourceGraphic" />
              </filter>
              <clipPath id="clip-path-2">
                <path
                  id="Icon_awesome-star-3"
                  data-name="Icon awesome-star"
                  d="M61.946,4.621,45.007,38.966l-37.9,5.525A8.305,8.305,0,0,0,2.516,58.654L29.935,85.373,23.45,123.116a8.3,8.3,0,0,0,12.036,8.742l33.9-17.821,33.9,17.821a8.3,8.3,0,0,0,12.036-8.742l-6.485-37.743,27.419-26.719a8.305,8.305,0,0,0-4.591-14.163l-37.9-5.525L76.835,4.621a8.308,8.308,0,0,0-14.89,0Z"
                  transform="translate(47.602 0) rotate(21)"
                  fill="#efbe15"
                />
              </clipPath>
            </defs>
            <g
              id="Group_7641"
              data-name="Group 7641"
              transform="translate(17288 -2512.5)"
            >
              <g id="Group_7640" data-name="Group 7640">
                <g
                  id="Group_7638"
                  data-name="Group 7638"
                  transform="translate(-17835 2336)"
                >
                  <path
                    id="Path_6572"
                    data-name="Path 6572"
                    d="M117.829,0C182.9,0,235.659,51.667,235.659,115.4a113.647,113.647,0,0,1-28.331,75.065c-31.762.638-51.992,0-87.848,0-35.921,0-57.265-.054-91.5-.4A113.408,113.408,0,0,1,0,115.4C0,51.667,52.754,0,117.829,0Z"
                    transform="translate(547 215.559)"
                    opacity="0.2"
                    fill="url(#linear-gradient)"
                  />
                </g>
              </g>
              <g
                id="Group_7639"
                data-name="Group 7639"
                transform="translate(-17253.395 2528.5)"
                className="relative"
              >
                <ellipse
                  id="Ellipse_357"
                  data-name="Ellipse 357"
                  cx="90.416"
                  cy="4.57"
                  rx="90.416"
                  ry="4.57"
                  transform="translate(1.775 156.82)"
                  fill="#344356"
                />
                <ellipse
                  id="Ellipse_363"
                  data-name="Ellipse 363"
                  cx="32.914"
                  cy="32.914"
                  rx="32.914"
                  ry="32.914"
                  transform="translate(8.334 80.258)"
                  fill="#344356"
                />
                <g
                  id="Group_6571"
                  data-name="Group 6571"
                  transform="matrix(0.819, 0.574, -0.574, 0.819, 33.928, 134.151)"
                >
                  <rect
                    id="Rectangle_1079"
                    data-name="Rectangle 1079"
                    width="9.999"
                    height="17.915"
                    transform="translate(14.821 17.125) rotate(162.915)"
                    fill="#344356"
                  />
                  <ellipse
                    id="Ellipse_364"
                    data-name="Ellipse 364"
                    cx="3.125"
                    cy="8.333"
                    rx="3.125"
                    ry="8.333"
                    transform="translate(6.277 23.233) rotate(-107.085)"
                    fill="#344356"
                  />
                </g>
                <g
                  id="Group_6570"
                  data-name="Group 6570"
                  transform="translate(45.32 136.21)"
                >
                  <rect
                    id="Rectangle_1080"
                    data-name="Rectangle 1080"
                    width="9.999"
                    height="17.915"
                    transform="matrix(-0.956, 0.294, -0.294, -0.956, 14.82, 17.125)"
                    fill="#344356"
                  />
                  <ellipse
                    id="Ellipse_365"
                    data-name="Ellipse 365"
                    cx="3.125"
                    cy="8.333"
                    rx="3.125"
                    ry="8.333"
                    transform="translate(6.105 22.847) rotate(-107.085)"
                    fill="#344356"
                  />
                </g>
                <ellipse
                  id="Ellipse_366"
                  data-name="Ellipse 366"
                  cx="11.249"
                  cy="11.249"
                  rx="11.249"
                  ry="11.249"
                  transform="translate(28.347 93.713)"
                  fill="#fff"
                />
                <ellipse
                  id="Ellipse_367"
                  data-name="Ellipse 367"
                  cx="3.75"
                  cy="3.75"
                  rx="3.75"
                  ry="3.75"
                  transform="translate(35.901 101.459)"
                  fill="#344356"
                />
                <ellipse
                  id="Ellipse_369"
                  data-name="Ellipse 369"
                  cx="5.073"
                  cy="17.063"
                  rx="5.073"
                  ry="17.063"
                  transform="translate(57.082 69.159) rotate(70)"
                  fill="#005a97"
                />
                <path
                  id="Path_6526"
                  data-name="Path 6526"
                  d="M613.927,469.108c-6.037-10.6-1.449-24.588,10.247-31.252s26.8-1.41,30.972,7.4-3.516,10.031-16.545,17.928S619.964,479.7,613.927,469.108Z"
                  transform="translate(-611.268 -373.971)"
                  fill="#0071bd"
                />
                <ellipse
                  id="Ellipse_385"
                  data-name="Ellipse 385"
                  cx={1}
                  cy="1.5"
                  rx={1}
                  ry="1.5"
                  transform="translate(36.395 101.5)"
                  fill="#fff"
                />
                <g
                  transform="matrix(1, 0, 0, 1, -34.61, -16)"
                  filter="url(#Icon_awesome-star-2)"
                >
                  <path
                    id="Icon_awesome-star-4"
                    data-name="Icon awesome-star"
                    d="M61.946,4.621,45.007,38.966l-37.9,5.525A8.305,8.305,0,0,0,2.516,58.654L29.935,85.373,23.45,123.116a8.3,8.3,0,0,0,12.036,8.742l33.9-17.821,33.9,17.821a8.3,8.3,0,0,0,12.036-8.742l-6.485-37.743,27.419-26.719a8.305,8.305,0,0,0-4.591-14.163l-37.9-5.525L76.835,4.621a8.308,8.308,0,0,0-14.89,0Z"
                    transform="translate(112.58 16) rotate(21)"
                    fill="#e6b60d"
                  />
                </g>
                <g
                  id="Mask_Group_20"
                  data-name="Mask Group 20"
                  transform="translate(30.368 0)"
                  clipPath="url(#clip-path-2)"
                  className="relative"
                >
                  <path
                    id="Icon_awesome-star-5"
                    data-name="Icon awesome-star"
                    d="M58.327,3.629l-15.451,33.1L7.108,45.811A8.305,8.305,0,0,0,2.516,59.974L29.935,86.692,23.45,124.436a8.3,8.3,0,0,0,12.036,8.742l33.9-17.821,33.9,17.821a8.3,8.3,0,0,0,12.036-8.742l-6.485-37.743,27.419-26.719a8.305,8.305,0,0,0-4.591-14.163l-37.9-5.525L76.835,5.94C73.8-.182,61.388-2.571,58.327,3.629Z"
                    transform="translate(51.765 -3.077) rotate(21)"
                    fill="#ffcd20"
                  />
                </g>
                <ellipse
                  id="Ellipse_368"
                  data-name="Ellipse 368"
                  cx="16.457"
                  cy="5.166"
                  rx="16.457"
                  ry="5.166"
                  transform="translate(78 124.123) rotate(163)"
                  fill="#344356"
                />
                <text
                  x="100"
                  y="105"
                  fill="#ffff"
                  className="text-3xl font-bold select-none  "
                >
                  {formatNumberToPoints(getAvrRatting(avgRating, totalRating))}
                </text>
              </g>
            </g>
          </svg>
          <h3 className="text-center text-lg mt-3 text-lightBlackColor">
            Average Rating
          </h3>
        </div>
        <div className="w-full py-3 border-opacity-40 flex justify-center">
          <NewRating
            initialRating={rating}
            emptySymbol={
              <AiOutlineStar color="orange" style={{ fontSize: "24px" }} />
            }
            fullSymbol={
              <AiFillStar color="orange" style={{ fontSize: "24px" }} />
            }
            onChange={(val) => setRating(val)}
          />
        </div>
        <form
          onReset={() => setRating(0)}
          onSubmit={fromSubmit(handleSubmit)}
          className="w-full "
        >
          <textarea
            placeholder="Your feedback here..."
            {...register("feedback")}
            className="resize-none bg-gray-100 w-full p-3 rounded-md text-sm text-mainParaColor outline-none"
            defaultValue={userRating.feedback}
            cols={30}
            rows={4}
          ></textarea>
          <div className="flex flex-wrap-reverse gap-4 justify-end mt-4 mb-2">
            <Button
              isLoader={false}
              padding="py-[14px] px-16 md:px-[85px]"
              type="reset"
              text="Clear"
              disabled={!rating || isLoading}
              className="mx-0 rounded-[5px] border border-mainColor w-full md:w-auto"
              color="text-mainColor"
              background="bg-white"
            />
            <Button
              type="submit"
              text="Submit"
              padding="py-[14px] px-16 md:px-[85px]"
              disabled={!rating || isLoading}
              className="mx-0 rounded-[5px] w-full md:w-auto"
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

export default RatingModal;
