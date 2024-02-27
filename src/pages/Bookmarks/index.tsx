import React, { useEffect, useState } from "react";
import { filterContentType } from "@components/SideFilter";
import { useUi } from "@hooks/user-interface";
import SingleBookmarked from "@components/Bookmark/SingleItem";
import { fetchRequest } from "@utils/axios/fetch";
import { API_ENDPOINTS } from "@constant/api-endpoints";
import { useRightFilter } from "@hooks/right-filter";
import { useCourse } from "@hooks/course";
import { bookmarkType } from "@utils/Types";
import ScreenLoader from "@components/ScreenLoader";
import Select from "react-select";

const Bookmarks = () => {
  const { updateFilter } = useUi();
  const [bookmarks, setBookmarks] = useState<bookmarkType[]>();
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const { subject, bookmark_attempted } = useRightFilter();
  const { course } = useCourse();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    updateFilter({
      type: filterContentType.bookmarksAndNotes,
      state: { name: "notes" },
    });
  }, []);

  const getPaginatedBookmarksAndNotes = async () => {
    try {
      setLoading(true);

      let payload: any = {
        type: bookmark_attempted,
        courseId: course?.id,
      };

      if (subject.id !== "null") {
        payload = {
          ...payload,
          subjectId: subject?.id,
        };
      }

      const response = await fetchRequest({
        url: `${API_ENDPOINTS.GET_PAGINATED_BOOKMARK}?page=${page}&limit=${limit}`,
        type: "post",
        body: payload,
      });
      if (response) {
        setBookmarks(response?.data?.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPaginatedBookmarksAndNotes();
  }, [subject, bookmark_attempted, page]);

  const goToNextPage = () => {
    setPage(page + 1);
  };

  const goToPreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const limitOptions = [
    { value: 10, label: "10" },
    { value: 20, label: "20" },
    { value: 30, label: "30" },
  ];

  return (
    <div className="pt-16 p-5 md:p-5">
      <div className="mx-auto w-full md:w-11/12 md:max-w-[1000px] flex flex-col gap-5 ">
        {loading ? (
          <ScreenLoader />
        ) : bookmarks && bookmarks.length > 0 ? (
          bookmarks?.map((bookmark: bookmarkType, i: number) => (
            <div key={"bookmark---" + i}>
              <SingleBookmarked
                data={bookmark}
                refetch={getPaginatedBookmarksAndNotes}
              />
            </div>
          ))
        ) : (
          <p className="w-full flex justify-center h-screen items-center">
            No Subject Found
          </p>
        )}
        {loading ? (
          <ScreenLoader />
        ) : (
          <>
            {bookmarks && bookmarks.length > 0 && (
              <div className="flex justify-end gap-4 mt-4">
                <button
                  onClick={goToPreviousPage}
                  disabled={page === 1}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Previous
                </button>
                <button
                  onClick={goToNextPage}
                  disabled={bookmarks && bookmarks?.length < limit}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Next
                </button>
                <Select
                  options={limitOptions}
                  value={{ value: limit, label: limit.toString() }}
                  onChange={(selectedOption: any) => {
                    setLimit(selectedOption.value);
                    getPaginatedBookmarksAndNotes();
                  }}
                  menuPlacement="auto"
                />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Bookmarks;
