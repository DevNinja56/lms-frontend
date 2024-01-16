import React, { useEffect } from "react";
import { filterContentType } from "@components/SideFilter";
import { useUi } from "@hooks/user-interface";
import SingleBookmarked from "@components/Bookmark/SingleItem";
import { useGetBookmarkQuery } from "@slices/fetch-all-queries.slice";

const Bookmarks = () => {
  const { updateFilter } = useUi();
  const { data, refetch } = useGetBookmarkQuery();
  useEffect(() => {
    updateFilter({
      type: filterContentType.bookmarksAndNotes,
      state: { name: "notes" },
    });
  }, []);

  return (
    <div className="p-5">
      <div className="mx-auto w-11/12 max-w-[1000px] flex flex-col gap-5 ">
        {data?.map((bookmark, i) => (
          <SingleBookmarked
            data={bookmark}
            refetch={refetch}
            key={"bookmark---" + i}
          />
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
