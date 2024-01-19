import CourseCard from "@components/CourseCard";
import SecondaryHeading from "@components/SecondaryHeading";
import SubHeading from "@components/SubHeading";
import { ROUTES } from "@route/constants.route";
import { useGetPaginatedCoursesQuery } from "@slices/fetch-all-queries.slice";
import React from "react";
import { useNavigate } from "react-router-dom";

const PopularCourses = () => {
const navigate=useNavigate()
  const navigateToCourses=()=>{
navigate(ROUTES.POPULAR_COURSES)
  }
  const { data: paginatedCourses, isLoading } = useGetPaginatedCoursesQuery({ limit: 8, page:1});

  if (isLoading) {
    return <p>Loading courses...</p>;
  }

  if (!paginatedCourses || !Array.isArray(paginatedCourses.data)) {
    return <p>No courses available.</p>;
  }


  return (
    <>
      <div className="pb-24 px-24">
        <SubHeading text="POPULAR COURSE" />
        <SecondaryHeading text="Popular Courses" />
        <div className="grid grid-cols-4 gap-7 pt-10">
          {paginatedCourses?.data?.map((program, index) => (
            <CourseCard key={index} data={program} />
          ))}
        </div>
      </div>
      <button onClick={navigateToCourses} className="flex mx-auto bg-mainColor py-5 px-8 gap-2 text-white rounded-md justify-center items-center">
        View All Courses{" "}
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path
              d="M3.75 9H14.25M14.25 9L9 14.25M14.25 9L9 3.75"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </button>
    </>
  );
};

export default PopularCourses;