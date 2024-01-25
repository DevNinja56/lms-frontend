import BreadCrumb from "@components/BreadCrumb";
import CourseCard from "@components/CourseCard";
import Navbar from "@components/Navbar";
import CoursePagination from "@components/CoursePagination";
import SecondaryHeading from "@components/SecondaryHeading";
import Footer from "@components/UserFooter";
import {useGetPaginatedCoursesQuery} from "@slices/fetch-all-queries.slice";
import dropdownIcon from "../../../public/images/dropdown.svg";
import arrowNextIcon from "../../../public/images/arrowNext.svg";
import arrowPrevIcon from "../../../public/images/arrowPrev.svg";
import download from "../../../public/images/dropdown.svg";
import React, {useState} from "react";
import {
  Navigation,
  Pagination,
} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ScreenLoader from "@components/ScreenLoader";
const BuyCourses: React.FC<{}> = ({}) => {
  const [page, setPage] = useState(1);
  const swiperPage = 1;

  const {
    data: paginatedCourses,
    isLoading: coursesLoading,
  } = useGetPaginatedCoursesQuery({
    limit: 4,
    page,
  });

  const {
    data: swiperPaginatedCourses,
    isLoading: swiperLoading,
  } = useGetPaginatedCoursesQuery({
    limit: 6,
    page: swiperPage,
  });

  const totalPage = paginatedCourses?.totalPage;
  if (coursesLoading || swiperLoading) {
    return (
      <>
        <ScreenLoader />
      </>
    );
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
  if (
    !paginatedCourses ||
    !Array.isArray(paginatedCourses.data)
  ) {
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
            Write an introductory description of
            the category.
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
                type="button">
                Default Soring
                <img src={download} alt="" />
              </button>
            </div>
          </div>
        </div>

        <Swiper
          slidesPerView={4}
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
          className="mySwiper">
          {swiperPaginatedCourses?.data.map(
            (program, index) => (
              <SwiperSlide key={index}>
                <CourseCard
                  key={index}
                  data={program}
                />
              </SwiperSlide>
            )
          )}
          {/* Add Navigation */}
          <div className="swiper-button-next ">
            <img src={arrowNextIcon} alt="" />
          </div>
          <div className="swiper-button-prev ">
            <img src={arrowPrevIcon} alt="" />
          </div>
        </Swiper>
        <div className="py-6 flex items-center justify-between w-full pt-16">
          <div className="flex items-center justify-between w-full">
            <p className="text-sm text-mainParaColor text-[23px] font-bold">
              Showing 250 total results
            </p>
            <div className="flex items-center gap-x-5">
              <p className="text-sm text-mainParaColor">
                Sort by:
              </p>
              <button
                id="dropdownHoverButton"
                data-dropdown-toggle="dropdownHover"
                data-dropdown-trigger="hover"
                className="text-mainParaColor bg-footerBg  focus:ring-4 focus:outline-none  font-normal py-4 rounded-lg text-sm px-5  text-center inline-flex items-center  "
                type="button">
                Most Popular
                <img src={dropdownIcon} alt="" />
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-7 pt-9">
          {paginatedCourses?.data.map(
            (program, index) => (
              <CourseCard
                key={index}
                data={program}
              />
            )
          )}
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
