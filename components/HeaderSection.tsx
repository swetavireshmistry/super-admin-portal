import React from "react";
import { BellIcon } from "icons";
import UserMenu from "./UserMenu";

interface Props {
  header_title: string;
  user_name: string;
}


const HeaderSection: React.FC<Props> = ({ header_title, user_name }) => {
  return (
    <header className="border-b border-gray-200 py-4 px-5 w-full flex justify-between items-center shadow">
      <h5 className="text-2xl text-gray-900 font-bold">{header_title}</h5>
      <div className="flex flex-between items-center gap-4">
        <div className="flex items-center justify-center w-10 h-10 min-w-10 border border-slate-400 rounded-md">
          <BellIcon />
        </div>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gray-200"></div>
          <UserMenu username={user_name} />
          {/* <h4 className="text-gray-900 text-lg">{user_name}</h4> */}
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
