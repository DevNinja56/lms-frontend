import EmptyBox from "@components/EmptyBox";
import Course from "@components/Home/Course";
import { useUserAuth } from "@hooks/auth-hook";
import { useGetCoursesQuery } from "@slices/fetch-all-queries.slice";
import starImg from "../../../public/images/homepage/01 1.svg";
import rocketImg from "../../../public/images/homepage/02.svg";
import paperImg from "../../../public/images/homepage/06.svg";
import React, { useState } from "react";
import dotBox from "../../../public/images/homepage/dot-box-2.svg";
import { getAvatar } from "@utils/User/get-avatar";

const Home = () => {
  const { data: courses } = useGetCoursesQuery();
  const { user } = useUserAuth();
  const [hoverAnimationOnStar, setHoverAnimationOnStar] = useState(false);
  const [hoverAnimationOnRocket, setHoverAnimationOnRocket] = useState(false);
  const [hoverAnimationOnPaper, setHoverAnimationOnPaper] = useState(false);

  return (
    <div className="flex flex-col gap-8 items-center pb-10 relative max-w-[1142px] mx-auto px-2">
      <img
        className={`absolute left-[40px] lg:left-[80px] top-[153px] ${
          hoverAnimationOnStar && "animate-slowBounce"
        }`}
        src={starImg}
        onMouseEnter={() => setHoverAnimationOnStar(true)}
      />
      <img
        className={`absolute right-[140px] lg:right-[220px] top-[50px] ${
          hoverAnimationOnRocket && "animate-slowBounce"
        }`}
        src={rocketImg}
        onMouseEnter={() => setHoverAnimationOnRocket(true)}
      />
      <img
        className={`absolute right-[50px] lg:right-[80px] top-[294px] ${
          hoverAnimationOnPaper && "animate-slowBounce"
        }`}
        src={paperImg}
        onMouseEnter={() => setHoverAnimationOnPaper(true)}
      />

      <div className="top mt-16 mb-12 flex flex-col items-center relative">
        <div className="log my-5 bg-white rounded-full h-[110px] w-[110px] flex items-center justify-center z-10">
          <img
            src={getAvatar(user, 480)}
            alt="main logo"
            className="w-[90%] h-[90%] bg-mainColor rounded-full"
            draggable={false}
          />
        </div>
        <img
          src={dotBox}
          className="absolute left-[100px] top-8 h-[90px] w-[92px]"
        />
        <h1 className="capitalize text-4xl text-center font-medium text-lightBlackColor">
          Hello, {user.name}
        </h1>
        <p className="text-base my-3 text-mainParaColor">
          What would you like to learn today?
        </p>
      </div>
      {courses?.length ? (
        courses.map((item, i) => (
          <Course data={item} key={"course-list--" + i} />
        ))
      ) : (
        <EmptyBox
          img={"/images/homepage/oops.svg"}
          desc="You have not subscribed to any course"
        />
      )}
    </div>
  );
};

export default Home;
