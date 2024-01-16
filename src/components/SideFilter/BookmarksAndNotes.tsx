import React from "react";
import SubjectBox from "./Components/SubjectBox";
import QuizFilterSelect from "@components/Quiz/QuizFilterSelect";

const BookmarksAndNotes = () => {
  const radiosValues = [
    { id: 1, name: "All", value: "" },
    { id: 2, name: "Video", value: "Video" },
    { id: 3, name: "Reading", value: "Reading" },
  ];
  return (
    <div className="p-5 whitespace-nowrap">
      <SubjectBox />
      {radiosValues.map((value, i) => (
        <QuizFilterSelect
          key={value.name + value.id}
          text={value.name}
          value={value.name}
          defaultChecked={i === 0}
        />
      ))}
      <hr className="border border-gray-100 mt-9 mb-8" />
    </div>
  );
};

export default BookmarksAndNotes;
