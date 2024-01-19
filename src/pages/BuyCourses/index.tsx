import BreadCrumb from "@components/BreadCrumb";
import CourseCard from "@components/CourseCard";

import Navbar from "@components/Navbar";
import CoursePagination from "@components/CoursePagination";
import SecondaryHeading from "@components/SecondaryHeading";

import Footer from "@components/UserFooter";
import { useGetPaginatedCoursesQuery } from "@slices/fetch-all-queries.slice";

import React, { useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const BuyCourses: React.FC<{}> = ({}) => {
  const [page, setPage] = useState(1);
  const { data: paginatedCourses, isLoading } = useGetPaginatedCoursesQuery({
    limit: 4,
    page,
  });

  const totalPage = paginatedCourses?.totalPage;
  if (isLoading) {
    return <p>Loading courses...</p>;
  }

  const handleNextPage = () => {
    if (page) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };
  if (!paginatedCourses || !Array.isArray(paginatedCourses.data)) {
    return <p>No courses available.</p>;
  }

  return (
    <div className="buyCourses bg-white">
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
            <p className="text-sm text-mainParaColor font-bold text-[23px]">
              Our Most Popular Courses
            </p>
            <div className="flex items-center gap-x-5">
            <button
                id="dropdownHoverButton"
                data-dropdown-toggle="dropdownHover"
                data-dropdown-trigger="hover"
                className="text-mainParaColor bg-footerBg  focus:ring-4 focus:outline-none  font-normal py-4 rounded-lg text-sm px-5  text-center inline-flex items-center  "
                type="button"
              >
          Default Soring
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <path d="M4.5 11.25L9 6.75L13.5 11.25" stroke="#495057" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
              </button>

            </div>
          </div>
        </div>

        <Swiper
          slidesPerView={3}
          spaceBetween={12}
          direction="horizontal"
          centeredSlides={false}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
          }}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          {paginatedCourses.data.map((program, index) => (
            <SwiperSlide key={index}>
              <CourseCard key={index} data={program} />
            </SwiperSlide>
          ))}
          {/* Add Navigation */}
          <div className="swiper-button-next ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M5 12H19M19 12L12 19M19 12L12 5"
                stroke="#495057"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="swiper-button-prev ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M19 12H5M5 12L12 19M5 12L12 5"
                stroke="#495057"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </Swiper>
        <div className="py-6 flex items-center justify-between w-full pt-16">
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

              <div
                id="dropdownHover"
                className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownHoverButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Earnings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-7 pt-9">
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
      <Footer showDownloadApp={false} />
    </div>
  );
};
export default BuyCourses;
