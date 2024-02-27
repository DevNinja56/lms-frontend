import React from "react";

interface propsType {
  img: string;
  desc: string;
}

const EmptyBox: React.FC<propsType> = ({ img, desc }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg shadow-gray-300 md:w-full lg:w-4/5 flex flex-col items-center gap-5 mx-auto">
      <h2 className="text-2xl text-center font-semibold text-mainParaColor">
        <span className="block">Oops!</span> This look empty
      </h2>
      <img src={img} alt="no product" draggable={false} />
      <p className="text-mainParaColor font-medium my-2 text-sm md:text-base">
        {desc}
      </p>
    </div>
  );
};

export default EmptyBox;
