import React, { InputHTMLAttributes, useState } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { MdErrorOutline } from "react-icons/md";

interface propsType extends InputHTMLAttributes<HTMLInputElement> {
  icon?: boolean;
  error?: string;
  label?: string;
}

const Input = React.forwardRef<HTMLInputElement, propsType>(
  (
    {
      type = "text",
      name = "",
      id,
      className,
      icon = true,
      error,
      label,
      ...props
    },
    ref
  ) => {
    const [newType, setNewType] = useState(type);
    return (
      <>
        <div className="mt-2 relative ">
          <p className="font-semibold text-sm text-lightBlackColor my-1">
            {label}
          </p>
          <span className="relative">
            <input
              {...{ name, id, ...props, ref }}
              type={newType}
              className={`block w-full rounded-[5px] border border-gray px-4 py-2.5 focus:ring-0 outline-none focus:border-mainColor transition-all duration-300 text-xs text-black ${className} ${
                error && "border border-red-500 focus:border-red-500"
              }`}
            />
            {error
              ? ""
              : type === "password" &&
                icon && (
                  <span
                    className="absolute top-[50%] right-0 translate-y-[-50%] h-full grid place-items-center cursor-pointer px-4 z-10 "
                    onClick={() =>
                      setNewType(newType === "password" ? "text" : "password")
                    }
                  >
                    {newType !== "text" ? <BsEyeFill /> : <BsEyeSlashFill />}
                  </span>
                )}
            {error && (
              <span
                className="absolute top-[50%] right-0 translate-y-[-50%] h-full grid place-items-center cursor-pointer px-4 z-10 "
                onClick={() =>
                  setNewType(newType === "password" ? "text" : "password")
                }
              >
                <MdErrorOutline className="text-red-500" />
              </span>
            )}
          </span>
          {error && (
            <p className="text-red-600 capitalize text-xs my-1 ">{error}</p>
          )}
        </div>
      </>
    );
  }
);
export default Input;
