import React, { useEffect } from "react";
import EmptyBox from "@components/EmptyBox";
import { useUi } from "@hooks/user-interface";
import { filterContentType } from "@components/SideFilter";

const Subscription = () => {
  const { updateFilter } = useUi();
  useEffect(() => {
    updateFilter({
      type: filterContentType.subscription,
      state: { name: "notes" },
    });
  }, []);

  return (
    <div className="flex pt-5 relative grow">
      <div className="flex  flex-col items-center w-full">
        <h2 className="text-2xl mt-2 mb-5 font-semibold">My Subscription</h2>
        <EmptyBox
          img={"/images/homepage/subs-oops.svg"}
          desc="No Subscription Available"
        />
      </div>
    </div>
  );
};

export default Subscription;
