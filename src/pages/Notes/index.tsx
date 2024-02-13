import React, { useEffect, useState } from "react";
import { useUi } from "@hooks/user-interface";
import { filterContentType } from "@components/SideFilter";
import SingleNote from "@components/Notes/SingleNote";
import { filterNotesType } from "@utils/Types";
import { useRightFilter } from "@hooks/right-filter";
import { useCourse } from "@hooks/course";
import { API_ENDPOINTS } from "@constant/api-endpoints";
import { fetchRequest } from "@utils/axios/fetch";
import Select from "react-select";
import ScreenLoader from "@components/ScreenLoader";

const Notes = () => {
  const { updateFilter } = useUi();
  const [notes, setNotes] = useState<filterNotesType[]>();
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const { subject, notes_attempted } = useRightFilter();
  const { course } = useCourse();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    updateFilter({
      type: filterContentType.bookmarksAndNotes,
      state: { name: "notes" },
    });
  }, []);

  const getPaginatedNotes = async () => {
    try {
      setLoading(true);

      let payload: any = {
        type: notes_attempted,
        courseId: course?.id,
      };

      if (subject.id !== "null") {
        payload = {
          ...payload,
          subjectId: subject?.id,
        };
      }

      const response = await fetchRequest({
        url: `${API_ENDPOINTS.GET_PAGINATED_NOTES}?page=${page}&limit=${limit}`,
        type: "post",
        body: payload,
      });
      if (response) {
        setNotes(response?.data?.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPaginatedNotes();
  }, [subject, notes_attempted, page]);

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
    <div className="p-5">
      <div className="mx-auto w-11/12 max-w-[1000px] flex flex-col gap-5 ">
        {loading ? (
          <ScreenLoader />
        ) : notes && notes.length > 0 ? (
          notes?.map((note: filterNotesType, i: number) => (
            <div key={"bookmark---" + i}>
              <SingleNote data={note} refetch={getPaginatedNotes} />
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
            {notes && notes.length > 0 && (
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
                  disabled={notes && notes?.length < limit}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Next
                </button>
                <Select
                  options={limitOptions}
                  value={{ value: limit, label: limit.toString() }}
                  onChange={(selectedOption: any) => {
                    setLimit(selectedOption.value);
                    getPaginatedNotes();
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

export default Notes;
