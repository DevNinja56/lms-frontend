import React from "react";
import { useGetSubjectsQuery } from "@slices/fetch-all-queries.slice";
import { useUi } from "@hooks/user-interface";
import { modalType } from "@slices/ui.slice";
import { useCourse } from "@hooks/course";
import MessageTextCirice from "./supportIcon/MessageTextCirice";

const Support = () => {
  const { course } = useCourse();
  const { data } = useGetSubjectsQuery(course.id);
  const { updateModal } = useUi();

  return (
    <div className="bg-grayBg h-full overflow-auto py-5">
      <div className="w-full lg:w-10/12 grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto my-10 mb-20 px-6 lg:px-0">
        {data?.map((item, i) => (
          <div
            key={"subject-support--" + i}
            onClick={() =>
              updateModal({ type: modalType.teachers_support, state: item })
            }
            className="bg-white p-5 flex justify-between rounded-md shadow-lg shadow-gray-300 hover:shadow-xl cursor-pointer capitalize group items-center"
          >
            <span className="font-medium text-xl">{item.name}</span>
            <span className="icon bg-[#435FB540] h-[42px] w-[42px] rounded-full group-hover:bg-mainColor flex items-center justify-center">
              <MessageTextCirice />
            </span>
          </div>
        ))}
      </div>
      <div className="w-9/12 mx-auto grid place-items-center">
        <img
          src="/images/homepage/support.svg"
          draggable={false}
          alt="bg-image"
        />
        {/* <p className="text-center text-xs text-black ">
          Click to the the subject to talk to the concerned teachers
        </p> */}
      </div>
    </div>
  );
};

export default Support;
