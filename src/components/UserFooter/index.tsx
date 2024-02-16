// Footer.tsx
import React, { useState } from "react";
import logo from "../../../public/images/logo.svg";

import playStoreIcon from "../../../public/images/playStore.svg";
import facebookIcon from "../../../public/images/facebook.svg";
import twitterIcon from "../../../public/images/twitter.svg";
import telegramIcon from "../../../public/images/telegram.svg";
import nextBtn from "../../../public/images/nextBtn.svg";
import bg from "../../../public/images/app-bg.png";
import { Link } from "react-router-dom";
import { ROUTES } from "@route/constants.route";
import AppleStore from "@components/SideNav/icons/AppleStore";
interface FooterProps {
  showDownloadApp?: boolean;
}

const Footer: React.FC<FooterProps> = ({ showDownloadApp }) => {
  const backgroundImageStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const footerSections = [
    {
      title: "Company",
      links: [
        { text: "Home", to: ROUTES.USERHOME },
        {
          text: "Popular Courses",
          to: ROUTES.POPULAR_COURSES,
        },
        { text: "Buy", to: ROUTES.BUY_COURSES },
      ],
    },
    {
      title: "Platform",
      links: [
        {
          text: "FAQs",
          to: ROUTES.FAQ,
        },
      ],
    },
  ];

  const containerStyles = showDownloadApp
    ? "bg-footerBg py-[56px] px-[60px] lg:px-[100px] border-b relative mt-[20%] xs:mt-40"
    : "bg-footerBg py-[56px] px-[60px] lg:px-[100px] border-b relative mt-0";

  const innerContainerStyles = showDownloadApp
    ? "flex mx-auto w-full pb-4 gap-[60px] lg:pb-6 pt-24 justify-between lg:flex-row md:flex-col sm:flex-col xs:flex-col md:pt-40 sm:pt-40 xs:pt-40 "
    : "flex mx-auto w-full pb-4 gap-[60px] lg:pb-6 pt-4 justify-between";
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <footer className={containerStyles}>
        {showDownloadApp && (
          <div
            className=" h-64 flex items-center file:justify-between p-16 rounded-xl absolute -top-[25%] lg:-top-[38%] w-[90%] left-[5%] xs:h-auto sm:auto xs:p-4 sm:p-4 xs:mt-40 sm:mt-40"
            style={backgroundImageStyle}
          >
            <div className="flex lg:flex-row md:flex-col xs:flex-col lg:p-16">
              <h2 className="xl:text-5xl text-4xl font-bold text-white lg:w-1/2 md:w-4/5 leading-[60px] md:mb-5 lg:mb-0 sm:text-center xs:text-center">
                Start learning by Downloading Apps.
              </h2>
              <div className="flex items-center justify-end gap-5 lg:gap-8 md:float-left md:mx-auto sm:flex-col xs:flex-col md:flex-row lg:flex-row">
                <button
                  className="text-sm flex gap-2 bg-transparent border border-white text-white py-4 px-8 lg:py-5 lg:px-11 rounded-[5px] hover:bg-white hover:text-black tra md:px-4 sm:px-16 xs:px-16"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <AppleStore isButtonHovered={isHovered} />
                  Apple Store
                </button>
                <button className="text-sm  bg-white rounded-[5px] flex gap-2 border border-white py-4 px-8 lg:py-5 lg:px-11  sm:px-16 xs:px-16">
                  <img src={playStoreIcon} alt="" />
                  Play Store
                </button>
              </div>
            </div>
          </div>
        )}
        <div className={innerContainerStyles}>
          <div className="w-full ">
            <div className="mb-[36px]  flex items-center justify-between py-4 px-2 bg-mainColor rounded-full w-14 ">
              <img className="" src={logo} />
            </div>
            <p className="text-base text-mainParaColor">
              Great lesson ideas and lesson plans for ESL teachers! Educators
              can customize lesson plans to best.
            </p>

            <div className="flex items-center gap-5 pt-12">
              <img src={facebookIcon} alt="" />
              <img src={twitterIcon} alt="" />
              <img src={telegramIcon} alt="" />
            </div>
          </div>
          {footerSections.map((section, index) => (
            <div key={index} className="mb-6 w-full">
              {section.title && (
                <h2 className=" text-xl font-bold text-gray-900 uppercase dark:text-white mb-4">
                  {section.title}
                </h2>
              )}

              {section.links && (
                <ul className="text-base font-normal text-mainParaColor w-full">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex} className="mb-2">
                      <Link to={link.to}>{link.text}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <div className="w-full">
            <h2 className="mb-4 text-xl font-bold text-gray-900 uppercase">
              Subscribe
            </h2>
            <div>
              <form className="lg:mx-auto  mt-10 flex max-w-md ">
                <label className="sr-only">Email address</label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  className="min-w-0 flex-auto rounded-l-md border-0 bg-white px-3.5 py-2  shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                  placeholder="Your email address"
                />

                <button
                  type="submit"
                  className="flex-none rounded-r-[5px] bg-mainColor px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm "
                >
                  <img src={nextBtn} alt="" />
                </button>
              </form>
              <p className="text-base font-normal text-mainParaColor py-4">
                Get the latest news and updates right at your inbox.
              </p>
            </div>
          </div>
        </div>
      </footer>
      <div className="border-t bg-footerBg">
        <p className="py-[25px] text-base font-normal text-mainParaColor text-center">
          Copyright © 2023 Educo. All Rights Reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
