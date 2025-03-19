import * as React from "react";
const TransactionIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
  width = "20px",
  height = "20px",
  ...props
}) => (
  <svg
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill="#000000"
      d="M21 7c0 2.21-4.03 4-9 4S3 9.21 3 7s4.03-4 9-4 9 1.79 9 4z"
    />
    <path
      stroke="#000000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 7c0 2.21-4.03 4-9 4S3 9.21 3 7m18 0c0-2.21-4.03-4-9-4S3 4.79 3 7m18 0v5M3 7v5m18 0c0 2.21-4.03 4-9 4s-9-1.79-9-4m18 0v5c0 2.21-4.03 4-9 4s-9-1.79-9-4v-5"
    />
  </svg>
);
export default TransactionIcon;
