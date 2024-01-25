import Hero from "@components/Hero";
import Navbar from "@components/Navbar";
import React from "react";
import Features from "@components/Features";
import Footer from "@components/UserFooter";
import StudentsFeedback from "@components/StudentFeedback";
import {programCardData} from "@components/data";
import OurPrograms from "@components/OurProgram";

import PopularCourses from "@components/PopularCourses";

const UserHome: React.FC = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <div className="p-24">
        <OurPrograms
          programCards={programCardData}
        />
      </div>

      <PopularCourses />
      <Features />
      <StudentsFeedback />

      <Footer showDownloadApp={true} />
    </div>
  );
};

export default UserHome;
