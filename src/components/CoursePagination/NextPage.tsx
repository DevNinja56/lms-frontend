import React from "react";

interface SvgIconProps {
  color?: string;
  disabled?: boolean;
}

const NextPage: React.FC<SvgIconProps> = ({
  color = "currentColor",
  disabled = false,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      style={{
        cursor: disabled
          ? "not-allowed"
          : "pointer",
        opacity: disabled ? 0.5 : 1,
        color,
      }}></svg>
  );
};

export default NextPage;
