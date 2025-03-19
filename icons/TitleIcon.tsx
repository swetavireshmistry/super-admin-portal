import * as React from "react";
const TitleIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
  fill = "#000000",
  width = "20px",
  height = "20px",
  ...props
}) => (
  <svg
    fill={fill}
    width={width}
    height={height}
    viewBox="-2 0 16 16"
    id="company-16px"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      id="TitleIcon"
      data-name="TitleIcon"
      d="M323.5-192h-9a1.5,1.5,0,0,0-1.5,1.5V-176h12v-14.5A1.5,1.5,0,0,0,323.5-192ZM318-177v-3h2v3Zm6,0h-3v-3.5a.5.5,0,0,0-.5-.5h-3a.5.5,0,0,0-.5.5v3.5h-3v-13.5a.5.5,0,0,1,.5-.5h9a.5.5,0,0,1,.5.5Zm-8-12h2v2h-2Zm4,0h2v2h-2Zm-4,4h2v2h-2Zm4,0h2v2h-2Z"
      transform="translate(-313 192)"
    />
  </svg>
);
export default TitleIcon;
