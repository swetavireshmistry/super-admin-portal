import * as React from "react";
const BillingIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
  width = "20px",
  height = "20px",
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 12 12"
    enableBackground="new 0 0 12 12"
    id="\u0421\u043B\u043E\u0439_1"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11,1.5H1c-0.5517578,0-1,0.4482422-1,1v7c0,0.5517578,0.4482422,1,1,1h10c0.5517578,0,1-0.4482422,1-1v-7  C12,1.9482422,11.5517578,1.5,11,1.5z M4,8.5H2v-1h2V8.5z M8,8.5H5v-1h3V8.5z"
      fill="#1D1D1B"
    />
  </svg>
);
export default BillingIcon;
