import EmptyBox from "@components/EmptyBox";
import { filterContentType } from "@components/SideFilter";
import { useUi } from "@hooks/user-interface";
import React, { useEffect } from "react";

const AssignTest = () => {
  const { updateFilter } = useUi();

  useEffect(() => {
    updateFilter({
      type: filterContentType.leaderboard,
      state: { name: "filter" },
    });
  }, []);

  return (
    <div className="flex flex-col items-center grow h-full overflow-y-auto overflow-x-hidden pt-20 md:pt-8 pb-14 ">
      <h2 className="text-2xl mt-2 mb-3 font-semibold text-lightBlackColor">
        Assignment / Test
      </h2>
      <p className="mb-10 w-11/12 md:w-9/12 lg:w-[45vw] mx-auto text-center text-mainParaColor text-sm md:text-base">
        Get the latest information related to your course and remain updated
        with upcoming events and changes in the scheme of studies or the system.
      </p>
      <div className="w-full px-4 md:px-6 lg:px-0 mx-auto">
        <EmptyBox
          img={"/images/homepage/subs-oops.svg"}
          desc="No Assignment / Test Available"
        />
      </div>
    </div>
  );
};

export default AssignTest;
