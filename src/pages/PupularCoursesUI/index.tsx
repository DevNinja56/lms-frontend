import BreadCrumb from "@components/BreadCrumb";
import CourseCard from "@components/CourseCard";
import Navbar from "@components/Navbar";
import CoursePagination from "@components/CoursePagination";

import SecondaryHeading from "@components/SecondaryHeading";
import Footer from "@components/UserFooter";

import { useGetPaginatedCoursesQuery } from "@slices/fetch-all-queries.slice";
import React, {  useState } from "react";

const PupularCoursesUI = () => {
  const [page, setPage] = useState(1);
  const { data: paginatedCourses, isLoading } = useGetPaginatedCoursesQuery({
    limit: 1,
    page,
  });

  const totalPage = paginatedCourses?.totalPage;
  if (isLoading) {
    return <p>Loading courses...</p>;
  }

  const handleNextPage = (newPage: number) => {
    setPage(newPage);
  };

  const handlePrevPage = (newPage: number) => {
    setPage(newPage);
  };

  if (!paginatedCourses || !Array.isArray(paginatedCourses.data)) {
    return <p>No courses available.</p>;
  }

  return (
    <>
      <div className="bg-white">
        <Navbar />
        <BreadCrumb />
        <div className="px-24">
          <div className="flex items-start py-11 flex-col">
            <SecondaryHeading text="User Interface Courses" />
            <p className="text-base text-mainParaColor py-1">
              Write an introductory description of the category.
            </p>
          </div>
          <div className="py-6 flex items-center justify-between w-full">
            <div className="flex items-center justify-between w-full">
              <p className="text-sm text-mainParaColor text-[23px] font-bold">
                Showing 250 total results
              </p>
              <div className="flex items-center gap-x-5">
                <p className="text-sm text-mainParaColor">Sort by:</p>
                <button
                id="dropdownHoverButton"
                data-dropdown-toggle="dropdownHover"
                data-dropdown-trigger="hover"
                className="text-mainParaColor bg-footerBg  focus:ring-4 focus:outline-none  font-normal py-4 rounded-lg text-sm px-5  text-center inline-flex items-center  "
                type="button"
              >
            Most Popular
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <path d="M4.5 11.25L9 6.75L13.5 11.25" stroke="#495057" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
              </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-5 pt-9">
            {paginatedCourses.data.map((program, index) => (
              <CourseCard key={index} data={program} />
            ))}
          </div>
          
          <CoursePagination
            currentPage={page}
            totalPage={totalPage}
            onNextPage={handleNextPage}
            onPrevPage={handlePrevPage}
          />
      </div>
        </div>
      

      <Footer showDownloadApp={false} />
    </>
  );
};

export default PupularCoursesUI;
