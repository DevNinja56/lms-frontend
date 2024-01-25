import React from "react";

type propsType = {
  checked?: boolean;
  onChange?: () => void;
  option: string;
  background: string;
  disable: boolean;
};

const QuizRadioButton: React.FC<propsType> = ({
  checked,
  onChange,
  option,
  background,
  disable,
}) => {
  return (
    <label className="cursor-pointer">
      <button
        disabled={disable}
        className={`h-6 w-6 rounded-full flex items-center justify-center ${background} ${
          checked
            ? "border-mainColor text-white bg-mainColor transition-all duration-300 border-2"
            : "text-mainColor"
        }`}
        onClick={onChange}>
        {option}
      </button>
    </label>
  );
};

export default QuizRadioButton;
