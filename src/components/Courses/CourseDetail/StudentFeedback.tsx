import React from "react";
import SubHeading from "@components/Common/SubHeading";
import Paragraph from "@components/Common/Paragraph";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import NewRating from "@components/Home/Rating";
import { useGetCourseByIdQuery } from "@slices/fetch-all-queries.slice";
import { useParams } from "react-router-dom";


const StudentFeedback = () => {
  const { id } = useParams();
  const {
    data: SingleCourse,
  } = useGetCourseByIdQuery(id);

  return (
    <div className="mt-4 mb-12 ml-24">
      <SubHeading heading="Student feedback" className="font-medium" />
      <div className="flex gap-6">
        <div className="bg-mainBackgroundColor w-1/3 rounded text-center py-8">
          <span className="font-medium text-6xl">{SingleCourse?.avgRating.toFixed(1)}</span>
          <div className="flex gap-1 items-center mt-4 ml-16">
            <NewRating
              initialRating={SingleCourse?.avgRating}
              readonly
              emptySymbol={
                <AiOutlineStar color="orange" style={{ fontSize: "20px" }} />
              }
              fullSymbol={
                <AiFillStar color="orange" style={{ fontSize: "20px" }} />
              }
            />
          </div>
          <Paragraph paragraph="Course Rating" />
        </div>

        <div className="bg-mainBackgroundColor w-3/4 rounded px-4 py-8 flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <div className="w-4/6 bg-gray-200 h-1 relative rounded">
              <div className="w-full bg-mainColor absolute h-full rounded"></div>
            </div>
            <div>
              <NewRating
                initialRating={5 ?? 0}
                readonly
                emptySymbol={
                  <AiOutlineStar color="orange" style={{ fontSize: "20px" }} />
                }
                fullSymbol={
                  <AiFillStar color="orange" style={{ fontSize: "20px" }} />
                }
              />
            </div>
            <span className="font-normal text-base text-mainParaColor">
              70%
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-4/6 bg-gray-200 relative h-1 rounded">
              <div className="w-10/12 bg-mainColor absolute rounded h-full"></div>
            </div>
            <div>
              <NewRating
                initialRating={3 ?? 0}
                readonly
                emptySymbol={
                  <AiOutlineStar color="orange" style={{ fontSize: "20px" }} />
                }
                fullSymbol={
                  <AiFillStar color="orange" style={{ fontSize: "20px" }} />
                }
              />
            </div>
            <span className="font-normal text-base text-mainParaColor">
              50%
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-4/6 bg-gray-200 relative h-1 rounded">
              <div className="w-8/12 bg-mainColor absolute rounded h-full"></div>
            </div>
            <div>
              <NewRating
                initialRating={2.5 ?? 0}
                readonly
                emptySymbol={
                  <AiOutlineStar color="orange" style={{ fontSize: "20px" }} />
                }
                fullSymbol={
                  <AiFillStar color="orange" style={{ fontSize: "20px" }} />
                }
              />
            </div>
            <span className="font-normal text-base text-mainParaColor">
              30%
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-4/6 bg-gray-200 relative h-1 rounded">
              <div className="w-6/12 bg-mainColor absolute rounded h-full"></div>
            </div>
            <div>
              <NewRating
                initialRating={2 ?? 0}
                readonly
                emptySymbol={
                  <AiOutlineStar color="orange" style={{ fontSize: "20px" }} />
                }
                fullSymbol={
                  <AiFillStar color="orange" style={{ fontSize: "20px" }} />
                }
              />
            </div>
            <span className="font-normal text-base text-mainParaColor">
              20%
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-4/6 bg-gray-200 relative h-1 rounded">
              <div className="w-4/12 bg-mainColor absolute rounded h-full"></div>
            </div>
            <div>
              <NewRating
                initialRating={1.5 ?? 0}
                readonly
                emptySymbol={
                  <AiOutlineStar color="orange" style={{ fontSize: "20px" }} />
                }
                fullSymbol={
                  <AiFillStar color="orange" style={{ fontSize: "20px" }} />
                }
              />
            </div>
            <span className="font-normal text-base text-mainParaColor">
              10%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentFeedback;
