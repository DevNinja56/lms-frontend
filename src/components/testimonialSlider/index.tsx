import React from "react";

interface TestimonialData {
  icon: string;
  testimonal: string;
  userImg: string;
  name: string;
  designation: string;
}

interface TestimonialSliderProps {
  data: TestimonialData;
}

const TestimonialSlider: React.FC<
  TestimonialSliderProps
> = ({data}) => {
  return (
    <div className="flex flex-col gap-8 lg:gap-12 bg-white rounded-[10px] p-7 lg:p-9">
      <div className="flex items-center gap-1">
        <img
          src={data.icon}
          className="h-4 w-4"
          alt={`icon`}
        />
        <img
          src={data.icon}
          className="h-4 w-4"
          alt={`icon`}
        />
        <img
          src={data.icon}
          className="h-4 w-4"
          alt={`icon`}
        />
      </div>
      <p className="text-lg lg:text-xl font-normal text-mainParaColor">
        {data.testimonal}
      </p>
      <div className="flex items-center gap-3">
        <img src={data.userImg} alt={`user`} />
        <div className="flex flex-col">
          <span className="text-xl font-semibold text-lightBlackColor">
            {data.name}
          </span>
          <span className="text-base text-mainColor">
            {data.designation}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
