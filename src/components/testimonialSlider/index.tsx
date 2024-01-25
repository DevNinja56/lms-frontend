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
    <div className="flex flex-col gap-12 bg-white rounded-[10px] p-9">
      <img
        src={data.icon}
        className="h-6 w-6"
        alt={`icon`}
      />
      <p className="text-xl font-normal text-mainParaColor">
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
