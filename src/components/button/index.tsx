import LoaderSpinner from "@components/LoaderSpinner";
import React from "react";
import { Link, LinkProps } from "react-router-dom";

interface propsTypes {
  text?: string | React.ReactElement;
  isLoader?: boolean;
  padding?: string;
  background?: string;
  spinnerColor?: string;
}
type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & propsTypes;
type PropsLink = LinkProps & propsTypes;

const Button: React.FC<Props> = ({
  text,
  type,
  className,
  color = "text-white",
  disabled,
  padding = "px-5 py-2.5",
  isLoader = true,
  spinnerColor = "#fff",
  background = "bg-mainColor",
  ...props
}) => {
  return (
    <button
      {...{ type, disabled, ...props }}
      className={`flex max-w-full justify-center rounded-[3.5px] ${color} text-sm mx-auto ${background} ${padding} disabled:bg-opacity-60 disabled:cursor-not-allowed ${className} transition-all duration-300`}
    >
      {text}
      {isLoader && disabled && <LoaderSpinner color={spinnerColor} />}
    </button>
  );
};

export const LinkButton: React.FC<PropsLink> = ({
  text,
  to,
  className,
  color = "text-white",
  isLoader,
  ...props
}) => {
  return (
    <Link
      to={to! ?? "/"}
      {...props}
      className={`flex max-w-full min-w-max justify-center rounded-[3.5px] ${color} text-sm mx-auto bg-mainColor px-5 py-2.5 disabled:bg-opacity-60 disabled:cursor-not-allowed ${className}`}
    >
      <>{text}</>
      {isLoader && <LoaderSpinner />}
    </Link>
  );
};

export default Button;
