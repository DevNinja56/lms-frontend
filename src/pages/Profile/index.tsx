import React, { useState } from "react";
import Documents from "@components/Profile/Documents";
import Personal from "@components/Profile/Personal";
import { GrEdit } from "react-icons/gr";
import { useUi } from "@hooks/user-interface";
import { modalType } from "@slices/ui.slice";
import { useUserAuth } from "@hooks/auth-hook";
import { getAvatar } from "@utils/User/get-avatar";

const tabsList = [
  { title: "personal", element: <Personal /> },
  { title: "documents", element: <Documents /> },
];

const Profile = () => {
  const [activeTab, setActiveTab] = useState<string>(tabsList[0].title);
  const { updateModal } = useUi();
  const { user } = useUserAuth();

  return (
    <div className="bg-white w-4/5 mx-auto my-10 rounded-md shadow-md shadow-gray-200 flex flex-col lg:flex-row relative ">
      <div className="lg:w-3/12 border-r border-r-gray-200  py-5  ">
        <div className="img-box lg:p-5 ">
          <div
            className="rounded-full  lg:w-7/12 w-1/4 mx-auto border border-gray-200 p-1.5 cursor-pointer relative "
            onClick={() =>
              updateModal({
                type: modalType.profile_picture,
                state: { name: "profile" },
              })
            }
          >
            <span className="absolute bottom-2 right-2 bg-gray-900 bg-opacity-50 p-1 text-white rounded-full  ">
              <GrEdit />
            </span>
            <img
              src={getAvatar(user)}
              alt="main profile image"
              className="aspect-square object-cover max-w-full rounded-full "
            />
          </div>
        </div>
        <div className="lg:grid w-full mb-10 absolute lg:static hidden ">
          {tabsList.map((tab, i) => (
            <button
              key={"tabs-list-profile--" + i}
              className={`p-3 text-sm text-left border-b-gray-200 border-b capitalize hover:bg-grayBg ${
                tab.title === activeTab && "bg-grayBg"
              }`}
              onClick={() => setActiveTab(tab.title)}
            >
              {tab.title}
            </button>
          ))}
        </div>
      </div>
      <div className="lg:w-9/12 p-5  ">
        <h2 className="capitalize text-3xl ">{activeTab}</h2>
        {tabsList.map(({ title, element }, i) => (
          <React.Fragment key={"tabs-component--" + i}>
            {title === activeTab && element}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Profile;
