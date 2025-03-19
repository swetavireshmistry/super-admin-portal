import React from "react";

const RightSection: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <section className="flex flex-col gap-4 p-4 w-full h-screen bg-gray-50">{children}</section>
  );
};

export default RightSection;
