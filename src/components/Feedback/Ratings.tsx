import NewRating from "@components/Home/Rating";
import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

type FeedbackProps = {
  text: string;
};

const Ratings: React.FC<FeedbackProps> = ({ text }) => {
  return (
    <div className="border-b-2 border-b-grayBg">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-0 px-4 md:px-7 py-4">
        <h1 className="flex gap-1 text-base md:text-lg">
          <span className="text-red-500">*</span>
          {text}
        </h1>
        <div className="pl-1 md:pl-0">
          <NewRating
            emptySymbol={
              <AiOutlineStar className="text-lg ml-2 md:ml-1" color="orange" />
            }
            fullSymbol={
              <AiFillStar className="text-lg ml-1.5 md:ml-1" color="orange" />
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Ratings;
