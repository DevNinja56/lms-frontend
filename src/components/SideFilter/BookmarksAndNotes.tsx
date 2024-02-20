import React from "react";
import SubjectBox from "./Components/SubjectBox";
import QuizFilterSelect from "@components/Quiz/QuizFilterSelect";
import { useRightFilter } from "@hooks/right-filter";

const BookmarksAndNotes = () => {
  const { setBookmarkAttempted, setNotesAttempted } = useRightFilter();

  const radiosValues = [
    { id: 1, name: "All", value: "All" },
    { id: 3, name: "Reading", value: "Reading" },
    { id: 2, name: "Video", value: "Video" },
  ];
  return (
    <div className="p-5 whitespace-nowrap">
      <SubjectBox />
      {radiosValues.map(({ name, value }, i) => (
        <QuizFilterSelect
          key={name + i}
          text={name}
          value={name}
          defaultChecked={i === 0}
          onChange={() => {
            setBookmarkAttempted(value as "All" | "Reading" | "Video");
            setNotesAttempted(value as "All" | "Reading" | "Video");
          }}
        />
      ))}
      <hr className="border border-gray-100 mt-9 mb-8" />
    </div>
  );
};

export default BookmarksAndNotes;
