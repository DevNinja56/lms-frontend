import React, {useState} from "react";
import download from "../../../public/images/dropdown.svg";

interface DropdownProps {
  title: string;
  options: string[];
}

const Dropdown: React.FC<DropdownProps> = ({
  title,
  options,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] =
    useState(false);
  const [selectedOption, setSelectedOption] =
    useState<string | null>(null);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={handleDropdownToggle}
        className="text-mainParaColor bg-footerBg font-normal py-4 rounded-lg text-sm px-5 text-center inline-flex items-center"
        type="button">
        {selectedOption ? selectedOption : title}
        <img
          src={download}
          alt=""
          className="ml-2"
        />
      </button>

      {isDropdownOpen && (
        <div className="absolute w-full z-10 top-full left-0 mt-1 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() =>
                handleOptionClick(option)
              }
              className={`block px-4 py-2 text-sm text-gray-700 w-full ${
                selectedOption === option
                  ? "bg-gray-200"
                  : ""
              }`}>
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
