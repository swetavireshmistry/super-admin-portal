import React from "react";

const LeftSection: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <section className="w-64 border-r h-full border-gray-200">
      {children}
    </section>
  );
};

export default LeftSection;
