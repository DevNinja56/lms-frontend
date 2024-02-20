import QuizFilterSelect from "@components/Quiz/QuizFilterSelect";
import React from "react";
import SubjectBox from "./Components/SubjectBox";
import { useRightFilter } from "@hooks/right-filter";

const QuizzesFilter = () => {
  const { setQuizAttempted } = useRightFilter();
  const radiosValues = [
    { id: 1, name: "All", value: "all" },
    {
      id: 2,
      name: "Attempted",
      value: "attempted",
    },
    {
      id: 3,
      name: "Unattempted",
      value: "unAttempted",
    },
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
          onChange={() =>
            setQuizAttempted(value as "all" | "attempted" | "unAttempted")
          }
        />
      ))}
      <hr className="border border-gray-100 mt-9 mb-8" />
    </div>
  );
};

export default QuizzesFilter;
