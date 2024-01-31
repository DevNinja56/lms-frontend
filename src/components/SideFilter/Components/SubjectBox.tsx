import QuizFilterSelect from "@components/Quiz/QuizFilterSelect";
import {useCourse} from "@hooks/course";
import {useRightFilter} from "@hooks/right-filter";
import {useGetSubjectsQuery} from "@slices/fetch-all-queries.slice";
import React from "react";

const SubjectBox = () => {
  const {course} = useCourse();
  const {data} = useGetSubjectsQuery(course.id);
  const {subject, setSubject} = useRightFilter();

  return (
    <div className="whitespace-nowrap">
      <h1 className="font-medium text-[1.2rem] mb-5">
        Filters
      </h1>
      <hr className="border border-gray-100 mt-9 mb-6" />
      <ul>
        <QuizFilterSelect
          name="selected-Box"
          text={"All"}
          value={"All"}
          defaultChecked={
            subject?.name === "null"
          }
          onChange={() => {
            setSubject({
              id: "null",
              name: "null",
            });
          }}
        />
        {data?.map((sub, i) => {
          return (
            <QuizFilterSelect
              key={
                "side-filter-subject-box--" + i
              }
              name="selected-Box"
              text={sub.name}
              value={sub.name}
              defaultChecked={
                sub.id === subject?.id
              }
              onChange={() => {
                setSubject(sub);
              }}
            />
          );
        })}
      </ul>
      <hr className="border border-gray-100 mt-6 mb-6" />
    </div>
  );
};

export default SubjectBox;
