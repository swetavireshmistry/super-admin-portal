import * as React from "react";
const UpDownArrowIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
  className = "h-4 w-4 mr-1",
  ...props
}) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 15v3m0 0l3-3m-3 3l-3-3m3-3V6m0 0l3 3m-3-3L9 9"
    />
  </svg>
);
export default UpDownArrowIcon;
