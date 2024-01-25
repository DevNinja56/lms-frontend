import React from "react";
interface ProgramCardProps {
  data: {
    icon: string;
    title: string;
    courseCount: string;
  };
}

const ProgramCard: React.FC<ProgramCardProps> = ({
  data,
}) => {
  return (
    <div className="bg-cardBg h-60 max-w-[180px] rounded-md py-11 px-6 flex items-center flex-col justify-center gap-7">
      <div className="bg-white p-5 rounded-full">
        <img
          src={data.icon}
          alt={data.title}
          className="h-11 w-11"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-3">
        <span className="font-medium text-lg  text-center leading-6">
          {data.title}
        </span>
        <span className="font-normal text-sm leading-5">
          {data.courseCount}
        </span>
      </div>
    </div>
  );
};

export default ProgramCard;
