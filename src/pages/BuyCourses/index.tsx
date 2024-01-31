import BreadCrumb from "@components/BreadCrumb";
import CourseCard from "@components/CourseCard";
import Navbar from "@components/Navbar";
import CoursePagination from "@components/CoursePagination";
import SecondaryHeading from "@components/SecondaryHeading";
import Footer from "@components/UserFooter";
import {useGetPaginatedCoursesQuery} from "@slices/fetch-all-queries.slice";
import arrowNextIcon from "../../../public/images/arrowNext.svg";
import arrowPrevIcon from "../../../public/images/arrowPrev.svg";
import React, {useState} from "react";
import Select from "react-select";
import {
  Navigation,
  Pagination,
} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ScreenLoader from "@components/ScreenLoader";

interface Option {
  value: string;
  label: string;
}
interface OptionSec {
  value: string;
  label: string;
}

const options: Option[] = [
  {value: "MostPopular", label: "Most Popular"},
  {value: "Ascending", label: "Ascending"},
  {value: "Descending", label: "Descending"},
];
const optionSec: OptionSec[] = [
  {
    value: "DefaultSorting",
    label: "Default Sorting",
  },
  {value: "Ascending", label: "Ascending"},
  {value: "Descending", label: "Descending"},
];
const BuyCourses = () => {
  const [page, setPage] = useState(1);
  const swiperPage = 1;
  const [selectedOption, setSelectedOption] =
    useState<Option>(options[0]);
  const [
    selectedOptionSec,
    setSelectedOptionSec,
  ] = useState<OptionSec>(optionSec[0]);

  const {
    data: paginatedCourses,
    isLoading: coursesLoading,
  } = useGetPaginatedCoursesQuery({
    limit: 8,
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
    return (
      <>
        <ScreenLoader />
      </>
    );
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
        <div className="py-6 flex items-center justify-between w-full relative z-10">
          <div className="flex items-center justify-between w-full">
            <p className="text-sm text-mainParaColor font-bold text-[23px]">
              Our Most Popular Courses
            </p>
            <div className="flex items-center gap-x-5">
              <Select
                options={options}
                placeholder="Select option"
                value={selectedOption}
                onChange={(selectedOption) => {
                  setSelectedOption(
                    selectedOption as Option
                  );
                }}
                styles={{
                  control: (base: any) => ({
                    ...base,
                    backgroundColor: "#435FB50D",
                    border: "none",
                    padding: "4px 8px",
                    color: "#495057",
                    fontSize: "14px",
                  }),
                  menu: (base: any) => ({
                    ...base,
                    fontSize: "14px",
                  }),
                }}
              />
            </div>
          </div>
        </div>

        <Swiper
          slidesPerView={4}
          spaceBetween={8}
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
          breakpoints={{
            1200: {slidesPerView: 4},
            1024: {slidesPerView: 3},
          }}>
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
        <div className="py-6 flex items-center justify-between w-full relative z-10 pt-16">
          <div className="flex items-center justify-between w-full">
            <p className="text-sm text-mainParaColor text-[23px] font-bold">
              Showing 250 total results
            </p>
            <div className="flex items-center gap-x-5">
              <p className="text-sm text-mainParaColor">
                Sort by:
              </p>

              <Select
                options={optionSec}
                placeholder="Select option"
                value={selectedOptionSec}
                onChange={(selectedOption) => {
                  setSelectedOptionSec(
                    selectedOption as OptionSec
                  );
                }}
                styles={{
                  control: (base: any) => ({
                    ...base,
                    backgroundColor: "#435FB50D",
                    border: "none",
                    padding: "4px 8px",
                    color: "#495057",
                    fontSize: "14px",
                  }),
                  menu: (base: any) => ({
                    ...base,
                    fontSize: "14px",
                  }),
                }}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 xl:grid-cols-4 gap-7 pt-9">
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
