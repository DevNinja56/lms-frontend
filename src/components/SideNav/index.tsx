import React from "react";
import whiteLogo from "../../../public/images/logo.svg";
import { ROUTES } from "@route/constants.route";
import { NavLink } from "react-router-dom";
import Home from "./icons/Home";
import Subject from "./icons/Subject";
import Quiz from "./icons/Quiz";
import ClipBoardList from "./icons/ClipBoardList";
import Support from "./icons/Support";
import LiveLecture from "./icons/LiveLecture";
import Stats from "./icons/Stats";
import LeaderBoard from "./icons/LeaderBoard";
import Notes from "./icons/Notes";
import Bookmark from "./icons/Bookmark";
import FeedBack from "./icons/FeedBack";

const navLinks = [
  { name: "Home", to: ROUTES.HOMEPAGE, Icon: Home },
  { name: "Subject", to: ROUTES.SUBJECTS, Icon: Subject },
  { name: "Quizzes", to: ROUTES.QUIZZES, Icon: Quiz },
  { name: "Assign/Tests", to: ROUTES.ASSIGN_TEST, Icon: ClipBoardList },
  { name: "Support", to: ROUTES.SUPPORT, Icon: Support },
  { name: "Live Lectures", to: ROUTES.LIVE_LECTURES, Icon: LiveLecture },
  { name: "Stats", to: ROUTES.STATS, Icon: Stats },
  { name: "Leaderboard", to: ROUTES.LEADERBOARD, Icon: LeaderBoard },
  { name: "Notes", to: ROUTES.NOTES, Icon: Notes },
  { name: "Bookmarks", to: ROUTES.BOOKMARKS, Icon: Bookmark },
  { name: "Feedback", to: ROUTES.FEEDBACK, Icon: FeedBack },

];

const SideNave = () => {
  return (
    <div className="h-screen overflow-y-auto overflow-x-hidden bg-mainColor flex flex-col w-[80px] pb-8 relative">
      <div className="flex flex-col items-center justify-center py-8 sticky top-0 bg-mainColor h-[70px]">
        <img className="" src={whiteLogo} />
      </div>
      {navLinks.map(({ name, to, Icon }, i) => (
        <NavLink
          to={to}
          className="flex flex-col items-center gap-1 text-iconsColor side-nav-links text-center hover:text-white w-full py-3 px-2 hover:bg-[#2d4694] group"
          key={"side-nav-links--" + i}
        >
          <Icon
            customClassName={"stroke-iconsColor group-hover:stroke-white"}
            height="22"
            width="22"
          />
          <span className="text-[10px] inline-block font-medium">{name}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default SideNave;
