import { useUserAuth } from "@hooks/auth-hook";
import { useUi } from "@hooks/user-interface";
import { ROUTES } from "@route/constants.route";
import { modalType } from "@slices/ui.slice";
import React from "react";
import { AiOutlinePoweroff } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import { GoKey } from "react-icons/go";
import { HiOutlineUser } from "react-icons/hi";
import { TbFileInvoice } from "react-icons/tb";
import { Link } from "react-router-dom";

const ListItem = ({ icon, text, to, onClick }: any) => (
  <div className="hover:bg-gray-200 py-1 border-b border-b-gray-300">
    <Link
      to={to}
      className="flex gap-3 items-center py-3 px-5 cursor-pointer"
      onClick={onClick}
    >
      <span className="text-xl">{icon}</span>
      <span className="text-sm">{text}</span>
    </Link>
  </div>
);

const Settings = () => {
  const { logoutUser } = useUserAuth();
  const { updateModal } = useUi();
  const list = [
    { text: "Edit Your Profile", icon: <HiOutlineUser />, to: ROUTES.PROFILE },
    { text: "Change Password", icon: <GoKey />, to: "#" },
    { text: "My Invoices", icon: <TbFileInvoice />, to: ROUTES.INVOICES },
    {
      text: "My Subscriptions",
      icon: <BsCart3 />,
      to: ROUTES.SUBSCRIPTION,
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-3xl text-center my-5">Settings</h2>
      <div className="w-5/6 mx-auto">
        <h5 className="text-lg font-bold">Accounts</h5>
        {list.map(({ icon, text, to }, i) => (
          <ListItem
            key={`settings-list-item-${i}`}
            icon={icon}
            text={text}
            to={to}
            onClick={() =>
              to === "#" &&
              updateModal({
                type: modalType.change_password,
                state: { name: "change password" },
              })
            }
          />
        ))}
      </div>

      <div className="w-5/6 mx-auto my-8">
        <h5 className="text-lg font-bold">Accounts Action</h5>
        <div className="hover:bg-gray-200 py-1" onClick={logoutUser}>
          <div className="flex gap-3 items-center py-3 px-5 cursor-pointer">
            <span className="text-xl">
              <AiOutlinePoweroff />
            </span>
            <span className="text-sm">Log out</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
