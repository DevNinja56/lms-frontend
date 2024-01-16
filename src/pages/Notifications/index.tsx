import EmptyBox from "@components/EmptyBox";
import { filterContentType } from "@components/SideFilter";
import { useUi } from "@hooks/user-interface";
import React, { useEffect } from "react";

const Notifications = () => {
  const { updateFilter } = useUi();

  useEffect(() => {
    updateFilter({
      type: filterContentType.notification,
      state: { name: "filter" },
    });
  }, []);

  return (
    <div className="flex flex-col items-center grow h-full overflow-y-auto overflow-x-hidden pt-8 pb-14 ">
      <h2 className="text-2xl mt-2 mb-5 font-semibold">Notification</h2>
      <p className=" text-mainTextColor mb-10 text-sm w-[45vw] mx-auto text-center">
        Get the latest information related to your course and remain updated
        with upcoming events and changes in the scheme of studies or the system.
      </p>
      <EmptyBox
        img={"/images/homepage/subs-oops.svg"}
        desc="No Notification Available"
      />
    </div>
  );
};

export default Notifications;
