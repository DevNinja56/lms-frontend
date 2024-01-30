import BreadCrumb from "@components/BreadCrumb";
import CourseCard from "@components/CourseCard";
import Navbar from "@components/Navbar";
import CoursePagination from "@components/CoursePagination";
import SecondaryHeading from "@components/SecondaryHeading";
import Footer from "@components/UserFooter";
import {useGetPaginatedCoursesQuery} from "@slices/fetch-all-queries.slice";
import React, {useState} from "react";
import ScreenLoader from "@components/ScreenLoader";
import Select from "react-select";

interface Option {
  value: string;
  label: string;
}

const options: Option[] = [
  {value: "MostPopular", label: "Most Popular"},
  {value: "Ascending", label: "Ascending"},
  {value: "Descending", label: "Descending"},
];
const PopularCoursesUI = () => {
  const [page, setPage] = useState(1);
  const [selectedOption, setSelectedOption] =
    useState<Option>(options[0]);
  const {data: paginatedCourses, isLoading} =
    useGetPaginatedCoursesQuery({
      limit: 8,
      page,
    });

  const totalPage = paginatedCourses?.totalPage;
  if (isLoading) {
    return (
      <>
        <ScreenLoader />
      </>
    );
  }

  const handleNextPage = (newPage: number) => {
    setPage(newPage);
  };

  const handlePrevPage = (newPage: number) => {
    setPage(newPage);
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
    <>
      <div className="bg-white">
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
              <p className="text-sm text-mainParaColor text-[23px] font-bold">
                Showing 250 total results
              </p>
              <div className="flex items-center gap-x-5">
                <p className="text-sm text-mainParaColor">
                  Sort by:
                </p>
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
                      backgroundColor:
                        "#435FB50D",
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
          <div className="grid grid-cols-3 xl:grid-cols-4 gap-5 pt-9 pb-7">
            {paginatedCourses.data.map(
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
      </div>

      <Footer showDownloadApp={false} />
    </>
  );
};

export default PopularCoursesUI;
