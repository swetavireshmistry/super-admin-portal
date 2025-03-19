import * as React from "react";

interface DoubleArrowIconProps extends React.SVGProps<SVGSVGElement> {
  direction?: "left" | "right";
}

const DoubleArrowIcon: React.FC<DoubleArrowIconProps> = ({
  direction = "right",
  ...props
}) => {
  const transformDirection = direction === "left" ? "scale(-1, 1)" : "none";

  return (
    <svg
      className="w-3 h-3 mx-1 sm:mx-2 rtl:rotate-180"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 12 10"
      style={{ transform: transformDirection }}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m7 9 4-4-4-4M1 9l4-4-4-4"
      />
    </svg>
  );
};

export default DoubleArrowIcon;
