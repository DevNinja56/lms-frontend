import React from "react";
import Subject from "@components/Subject";
import { useCourse } from "@hooks/course";
import { useGetSubjectsQuery } from "@slices/fetch-all-queries.slice";

const Subjects = () => {
  const { course } = useCourse();
  const { data: subjects } = useGetSubjectsQuery(course.id);

  return (
    <div className="w-full px-6 md:px-12">
      <div className="max-w-[1425px] py-3 mx-auto flex flex-col">
        <div className="mt-5 md:mt-10 flex flex-col gap-2">
          <h1 className="uppercase text-2xl font-bold text-lightBlackColor block md:hidden">
            {course.name}
          </h1>
          <p className="text-base font-medium capitalize text-mainParaColor">
            End on {new Date(course.endDate).toLocaleDateString()}
          </p>
        </div>
        <div className="bottom-subjects grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-5 xl:gap-x-8 py-6">
          {subjects?.map((item, i) => (
            <Subject data={item} key={"subject-list-" + i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subjects;
