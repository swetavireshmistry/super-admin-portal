import * as React from "react";
const BuildingIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
  fill = "#000",
  width = "32px",
  height = "32px",
  ...props
}) => (
  <svg
    fill={fill}
    width={width}
    height={height}
    viewBox="0 0 50 50"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M8 2v4H4v42h42V14H30V6h-4V2Zm2 2h14v4h4v38h-9v-7h-4v7H6V8h4Zm0 6v2h2v-2Zm4 0v2h2v-2Zm4 0v2h2v-2Zm4 0v2h2v-2Zm-12 5v4h2v-4Zm4 0v4h2v-4Zm4 0v4h2v-4Zm4 0v4h2v-4Zm8 1h14v30H30Zm2 2v2h2v-2Zm4 0v2h2v-2Zm4 0v2h2v-2Zm-30 3v4h2v-4Zm4 0v4h2v-4Zm4 0v4h2v-4Zm4 0v4h2v-4Zm10 1v2h2v-2Zm4 0v2h2v-2Zm4 0v2h2v-2Zm-8 4v2h2v-2Zm4 0v2h2v-2Zm4 0v2h2v-2Zm-30 1v4h2v-4Zm4 0v4h2v-4Zm4 0v4h2v-4Zm4 0v4h2v-4Zm10 3v2h2v-2Zm4 0v2h2v-2Zm4 0v2h2v-2Zm-30 3v4h2v-4Zm4 0v4h2v-4Zm4 0v4h2v-4Zm4 0v4h2v-4Zm10 1v2h2v-2Zm4 0v2h2v-2Zm4 0v2h2v-2Zm-8 4v2h2v-2Zm4 0v2h2v-2Zm4 0v2h2v-2Zm-30 1v5h2v-5Zm12 0v5h2v-5Zm10 3v2h2v-2Zm4 0v2h2v-2Zm4 0v2h2v-2Z" />
  </svg>
);

export default BuildingIcon;
