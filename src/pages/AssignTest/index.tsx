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
    <div className="flex flex-col items-center grow h-full overflow-y-auto overflow-x-hidden pt-8 pb-14 ">
      <h2 className="text-2xl mt-2 mb-3 font-semibold text-lightBlackColor">Assignment / Test</h2>
      <p className=" mb-10 w-[45vw] mx-auto text-center text-mainParaColor">
        Get the latest information related to your course and remain updated
        with upcoming events and changes in the scheme of studies or the system.
      </p>
      <EmptyBox
        img={"/images/homepage/subs-oops.svg"}
        desc="No Assignment / Test Available"
      />
    </div>
  );
};

export default AssignTest;
