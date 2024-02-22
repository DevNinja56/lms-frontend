import React from "react";
import TopBanner from "@components/TopBanner";
import CourseDetailBanner from "@components/Courses/CourseDetail/CourseDetailBanner";
import Navbar from "@components/Navbar";
import Footer from "@components/UserFooter";

const CourseDetail = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col">
        <TopBanner />
        <CourseDetailBanner />
      </div>
      <Footer showDownloadApp={false} />
    </>
  );
};

export default CourseDetail;
