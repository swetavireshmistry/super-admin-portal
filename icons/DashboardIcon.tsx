import * as React from "react";
const DashboardIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
  fill = "#000000",
  width = "20px",
  height = "20px",
  ...props
}) => (
  <svg
    fill={fill}
    width={width}
    height={height}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    enableBackground="new 0 0 100 100"
    {...props}
  >
    <path d="M22.5,19.7h20c1.4,0,2.5,1.1,2.5,2.5v54.9c0,1.4-1.1,2.5-2.5,2.5h-20c-1.4,0-2.5-1.1-2.5-2.5V22.2                 C20,20.8,21.1,19.7,22.5,19.7z" />
    <path d="M57.5,19.6h20c1.4,0,2.5,1.1,2.5,2.5V42c0,1.4-1.1,2.5-2.5,2.5h-20c-1.4,0-2.5-1.1-2.5-2.5V22.1                 C55,20.7,56.1,19.6,57.5,19.6z" />
    <path d="M57.5,54.6h20c1.4,0,2.5,1.1,2.5,2.5v19.9c0,1.4-1.1,2.5-2.5,2.5h-20c-1.4,0-2.5-1.1-2.5-2.5V57.1                 C55,55.8,56.1,54.6,57.5,54.6z" />
  </svg>
);
export default DashboardIcon;
