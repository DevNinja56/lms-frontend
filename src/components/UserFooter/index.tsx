// Footer.tsx
import React from "react";
import logo from "../../../public/images/logo.svg";

import bg from "../../../public/images/app-bg.png";
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
        { text: "Home", href: "/" },
        { text: "Popular Courses", href: "/" },
        { text: "Buy", href: "/" },
      ],
    },
    {
      title: "Platform",
      links: [
        {
          text: "FAQs",
        },
      ],
    },
  ];
  const containerStyles = showDownloadApp
  ? "bg-footerBg py-[56px] px-[100px] border-b relative mt-[20%]"
  : "bg-footerBg py-[56px] px-[100px] border-b relative mt-0";

const innerContainerStyles = showDownloadApp
  ? "flex mx-auto w-full  pb-6 pt-24  gap-[88px] justify-between "
  : "flex mx-auto w-full pb-6 pt-14 gap-[88px] justify-between";
  return (
    <>
      <footer className={containerStyles}>
        {showDownloadApp && (
          <div
            className=" h-64 flex items-center justify-between p-16 rounded-xl absolute -top-[38%] w-[90%] left-[5%]"
            style={backgroundImageStyle}
          >
            <h2 className="text-5xl font-bold text-white w-1/2 leading-[57px]">
              Start learning by Downloading Apps.
            </h2>
            <div className="flex items-center gap-8 w-1/2">
              <button className=" flex gap-2 bg-transparent border border-white text-white py-5 px-11 rounded-[5px]">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                  >
                    <path
                      d="M13.0807 9.97527C13.0807 8.60178 13.8116 7.40359 14.8958 6.76901C14.3296 6.05541 13.478 5.41589 12.5392 5.22823C11.2591 4.97205 10.5288 5.3986 10.0564 5.5696C9.58404 5.74059 8.95658 5.8943 8.95658 5.8943C8.95658 5.8943 8.32972 5.74059 7.85672 5.5696C7.38493 5.3986 6.6547 4.97143 5.37454 5.22761C4.09438 5.48379 2.9765 6.58073 2.52213 7.55854C1.64585 9.44563 2.00646 11.8198 2.6255 13.5272C3.24395 15.2353 4.8793 17.6218 6.14744 17.8137C7.04956 17.9502 7.60791 17.31 8.95658 17.1477C10.3053 17.31 10.8636 17.9502 11.7657 17.8137C13.0339 17.6218 14.6692 15.2353 15.2877 13.5272C15.3027 13.4852 15.3183 13.442 15.3333 13.3988C14.0129 12.8544 13.0807 11.5265 13.0807 9.97527ZM8.63624 4.91587C8.63624 4.91587 9.89055 5.08687 11.0295 3.75844C12.1684 2.43001 11.8444 1.17318 11.8444 1.17318C11.8444 1.17318 10.5901 1.00219 9.45121 2.33062C8.31229 3.65905 8.63624 4.91587 8.63624 4.91587Z"
                      fill="white"
                    />
                  </svg>
                </span>
                Apple Store
              </button>
              <button className="bg-white rounded-[5px] flex gap-2 border border-white py-5 px-11">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.6875 11.9939L15.153 11.1798C16.4448 10.4621 16.4448 8.60429 15.153 7.88665L13.6874 7.07244L12.9542 7.80565L12.9428 7.81686L11.1518 9.53321L12.9428 11.2495L12.9542 11.2608L13.6875 11.9939ZM10.0629 10.5768L11.8944 12.3319L12.3175 12.7551L5.04837 16.7935C4.52892 17.082 3.96028 17.0958 3.47208 16.9111L3.90725 16.4759L10.0629 10.5768ZM10.0629 8.48961L11.8944 6.73445L12.3175 6.31134L5.04837 2.27295C4.52893 1.98437 3.96029 1.97059 3.47208 2.15534L3.90725 2.5905L10.0629 8.48961ZM2.38871 3.20302L2.8474 3.66171L2.85885 3.67292L8.97395 9.53321L2.85885 15.3935L2.8474 15.4047L2.38871 15.8634C2.29977 15.6457 2.25 15.4049 2.25 15.1469V3.91952C2.25 3.66156 2.29977 3.42065 2.38871 3.20302Z"
                      fill="#333333"
                    />
                  </svg>
                </span>
                Play Store
              </button>
            </div>
          </div>
        )}
        <div className={innerContainerStyles}>
          <div className="w-[25%] ">
            <div className="mb-[36px]  flex items-center justify-between py-4 px-2   bg-mainColor rounded-full w-14 ">
              <img className="" src={logo} />
            </div>
            <p className="text-base text-mainParaColor">
              Great lesson ideas and lesson plans for ESL teachers! Educators
              can customize lesson plans to best.
            </p>

            <div className="flex items-center gap-5 pt-12">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <rect width="40" height="40" rx="5" fill="#1260BC" />
                  <path
                    d="M25.2054 10.084H21.542C21.5337 10.0839 21.5253 10.0843 21.517 10.0851C17.8183 10.0968 17.3353 12.6809 17.3333 14.9395C17.3282 14.9609 17.3256 14.9828 17.3255 15.0048V16.5904H14.7942C14.7206 16.5904 14.65 16.6196 14.5979 16.6717C14.5459 16.7238 14.5166 16.7945 14.5166 16.8682V20.7784C14.5166 20.8521 14.5459 20.9228 14.5979 20.9749C14.65 21.0269 14.7206 21.0562 14.7942 21.0562H17.3255V29.637C17.3255 29.7107 17.3548 29.7814 17.4069 29.8335C17.4589 29.8856 17.5295 29.9148 17.6032 29.9148H21.2974C21.371 29.9148 21.4417 29.8856 21.4937 29.8335C21.5458 29.7814 21.575 29.7107 21.575 29.637V21.0565H25.2052C25.2788 21.0565 25.3494 21.0272 25.4015 20.9751C25.4535 20.923 25.4828 20.8524 25.4828 20.7787V16.8684C25.4828 16.7948 25.4535 16.7241 25.4015 16.672C25.3494 16.6199 25.2788 16.5907 25.2052 16.5907H21.2974V14.4887H25.2052C25.2788 14.4887 25.3494 14.4594 25.4015 14.4074C25.4535 14.3553 25.4828 14.2846 25.4828 14.2109V10.3618C25.4828 10.3253 25.4757 10.2892 25.4617 10.2555C25.4478 10.2218 25.4274 10.1912 25.4016 10.1654C25.3759 10.1396 25.3453 10.1191 25.3116 10.1051C25.278 10.0912 25.2419 10.084 25.2054 10.084Z"
                    fill="white"
                  />
                </svg>
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <rect width="40" height="40" rx="5" fill="#0FBDF4" />
                  <path
                    d="M27.5418 14.4948C27.9299 14.2942 28.8594 13.6984 29.2975 12.4195C29.2975 12.4195 28.2417 13.1834 26.8047 13.2734L26.7786 13.2878C26.4021 12.8756 25.9437 12.5464 25.4328 12.3215C24.9219 12.0965 24.3697 11.9807 23.8115 11.9814C21.5883 11.9814 19.7863 13.7848 19.7863 16.0092C19.7863 16.3467 19.8282 16.6745 19.9068 16.9878L19.8873 16.9587C19.8873 16.9587 15.5759 17.2059 11.5113 12.7567C11.5113 12.7567 9.71431 15.8126 12.7911 18.1495C12.1174 18.2617 10.9275 17.6551 10.9275 17.6551C10.9275 17.6551 10.9947 20.8678 14.1834 21.6545C13.667 21.7895 12.7012 21.8339 12.3869 21.6995C12.3869 21.6995 12.8583 24.1484 16.1148 24.5756C15.2839 25.0476 13.7345 26.4853 10.231 26.2156C10.231 26.2156 12.7467 28.2826 17.4176 27.9909C22.0886 27.6992 25.4797 24.5528 26.8494 21.2276C28.2192 17.9023 27.838 16.0089 27.838 16.0089C27.838 16.0089 28.9826 15.4078 29.7694 13.9701C29.406 14.0789 28.0582 14.4084 27.5565 14.5303C27.5515 14.5186 27.5466 14.5067 27.5418 14.4948Z"
                    fill="white"
                  />
                </svg>
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <rect width="40" height="40" rx="5" fill="#62D9FF" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.334 23.4787L25.4523 16.1568C25.8014 15.8081 25.365 15.721 24.9285 15.9825L14.9771 22.2583L10.6997 20.9509C9.73949 20.6894 9.73949 19.9921 10.8743 19.5562L27.7219 13.106C28.5075 12.7574 29.2059 13.2804 28.944 14.5007L26.0633 28.0112C25.8887 28.97 25.2777 29.2315 24.492 28.7957L20.1274 25.5706L18.0323 27.5754C17.7705 27.8369 17.4213 27.8369 17.4213 27.5754L17.334 23.4787Z"
                    fill="white"
                  />
                </svg>
              </span>
            </div>
          </div>

          {footerSections.map((section, index) => (
            <div key={index} className="mb-6">
              {section.title && (
                <h2 className=" text-xl font-bold text-gray-900 uppercase dark:text-white mb-4">
                  {section.title}
                </h2>
              )}

              {section.links && (
                <ul className="text-base font-normal text-mainParaColor ">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex} className="mb-2">
                      {link.text}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <div>
            <h2 className="mb-4 text-xl font-bold text-gray-900 uppercase dark:text-white">
              Subscribe
            </h2>
            <div>
              <form className="mx-auto mt-10 flex max-w-md ">
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
                  className="flex-none rounded-r-[5px] bg-mainColor px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M5 12H19M19 12L12 19M19 12L12 5"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
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
