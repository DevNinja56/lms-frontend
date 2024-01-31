import NewRating from "@components/Home/Rating";
import React from "react";
import {
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";

type FeedbackProps = {
  text: string;
};

const Ratings: React.FC<FeedbackProps> = ({
  text,
}) => {
  return (
    <div className="border-b-2 border-b-grayBg">
      <div className="flex justify-between items-center px-7 py-4">
        <h1 className="flex gap-1 text-lg">
          <span className="text-red-500">*</span>
          {text}
        </h1>
        <NewRating
          emptySymbol={
            <AiOutlineStar
              color="orange"
              style={{
                fontSize: "18px",
                marginLeft: "4px",
              }}
            />
          }
          fullSymbol={
            <AiFillStar
              color="orange"
              style={{
                fontSize: "18px",
                marginLeft: "4px",
              }}
            />
          }
        />
      </div>
    </div>
  );
};

export default Ratings;
