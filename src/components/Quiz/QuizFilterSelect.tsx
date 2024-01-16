import React, { InputHTMLAttributes } from "react";

interface QuizPropsType extends InputHTMLAttributes<HTMLInputElement> {
  text: string;
  name?: string;
}

const QuizFilterSelect: React.FC<QuizPropsType> = ({
  text,
  name = "select",
  ...props
}) => {
  return (
    <>
      <label className="flex gap-3 items-center mb-4 text-base cursor-pointer">
        <input
          {...props}
          name={name}
          type="radio"
          className="h-5 w-5 rounded-full border-2 border-mainColor cursor-pointer accent-mainColor"
        />
        <p className="capitalize">{text}</p>
      </label>
    </>
  );
};

export default QuizFilterSelect;
