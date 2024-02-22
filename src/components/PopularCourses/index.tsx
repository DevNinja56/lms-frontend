import CourseCard from "@components/CourseCard";
import ScreenLoader from "@components/ScreenLoader";
import SecondaryHeading from "@components/SecondaryHeading";
import SubHeading from "@components/SubHeading";
import {ROUTES} from "@route/constants.route";
import {useGetPaginatedCoursesQuery} from "@slices/fetch-all-queries.slice";
import React from "react";
import {useNavigate} from "react-router-dom";

const PopularCourses = () => {
  const navigate = useNavigate();
  const navigateToCourses = () => {
    navigate(ROUTES.POPULAR_COURSES);
  };
  const {data: paginatedCourses, isLoading} =
    useGetPaginatedCoursesQuery({
      limit: 8,
      page: 1,
    });

  if (isLoading) {
    return (
      <>
        <ScreenLoader />
      </>
    );
  }

  if (
    !paginatedCourses ||
    !Array.isArray(paginatedCourses.data)
  ) {
    return <p>No courses available.</p>;
  }

  return (
    <>
      <div className="lg:pb-12 px-24 xs:px-8 sm:px-8 lg:px-24 md:pt-8 sm:pt-8 xs:pt-8 md:pb-8 xs:pb-8 sm:pb-8">
        <SubHeading text="POPULAR COURSE" />
        <SecondaryHeading text="Popular Courses" />
        <div className="grid grid-cols-3 xl:grid-cols-4 gap-7 pt-10 md:grid-cols-2 lg:grid-cols-4 xs:grid-cols-1 sm:grid-cols-1">
          {paginatedCourses?.data?.map(
            (program, index) => (
              <CourseCard
                key={index}
                data={program}
              />
            )
          )}
        </div>
      </div>
      <button
        onClick={navigateToCourses}
        className="flex mx-auto bg-mainColor py-4 px-8 lg:py-5 lg:px-8 gap-2 text-white rounded-md justify-center items-center hover:bg-blueColor sm:mt-8 xs:mt-8 md:mt-4 xs:mb-16 sm:mb-16 lg:my-0">
        View All Courses
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none">
            <path
              d="M3.75 9H14.25M14.25 9L9 14.25M14.25 9L9 3.75"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
    </>
  );
};

export default PopularCourses;
