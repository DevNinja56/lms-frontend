import React, {MouseEventHandler} from "react";
interface propsTypes {
  text: string;
  className: string;
  onClick?:
    | MouseEventHandler<HTMLButtonElement>
    | undefined;
}

const Button = ({
  text,
  className,
  onClick,
}: propsTypes) => {
  return (
    <button
      className={`rounded ${className}`}
      onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
