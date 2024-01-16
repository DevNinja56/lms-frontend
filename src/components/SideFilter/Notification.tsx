import QuizFilterSelect from "@components/Quiz/QuizFilterSelect";
import React from "react";

const Notification = () => {
  const radiosValues = [
    { id: 1, name: "All", value: "" },
    { id: 2, name: "Read", value: "Read" },
    { id: 2, name: "Unread", value: "Unread" },
  ];
  return (
    <div className="p-5">
      <h2 className="text-xl font-semibold capitalize">Filter</h2>
      <div className="mt-8">
        {radiosValues.map((value, i) => (
          <QuizFilterSelect
            key={value.name + value.id}
            text={value.name}
            value={value.name}
            defaultChecked={i === 0}
            name="filters"
          />
        ))}
      </div>
      <hr className="border border-gray-100 mt-9 mb-8" />
    </div>
  );
};

export default Notification;
