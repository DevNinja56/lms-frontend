import React, { useEffect } from "react";
import { useUi } from "@hooks/user-interface";
import { filterContentType } from "@components/SideFilter";
import SingleNote from "@components/Notes/SingleNote";

const Notes = () => {
  const { updateFilter } = useUi();
  useEffect(() => {
    updateFilter({
      type: filterContentType.bookmarksAndNotes,
      state: { name: "notes" },
    });
  }, []);

  return (
    <div className="p-5">
      <div className="mx-auto w-11/12 max-w-[1000px] flex flex-col gap-5 ">
        <SingleNote />
        <SingleNote />
        <SingleNote />
        <SingleNote />
      </div>
    </div>
  );
};

export default Notes;
