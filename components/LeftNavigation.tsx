
import React from "react";
import LeftSection from "./LeftSection";
import Link from "next/link";

interface LeftNavigationProps {
  navigation_menu_items: {
    link: string;
    name: string;
    Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  }[];
}
const LeftNavigation: React.FC<LeftNavigationProps> = ({ navigation_menu_items }) => {
  const symbols = Object.getOwnPropertySymbols(globalThis);
  const needed = symbols[symbols.length - 2]; // @ts-ignore
  const currentLink = Object?.keys(
    globalThis?.[needed]?.clientReferenceManifestsPerPage || {}
  )[0] || "/";

  console.log({ currentLink });

  return (
    <LeftSection>
      <div className="flex flex-col flex-1 overflow-auto">
        <div className="py-4">
          {navigation_menu_items?.map(({ link, name, Icon }, indx) => (
            <Link
              key={`left-nav-${name}-${indx}`}
              href={link}
              className={`flex items-center px-6 py-2.5 gap-3 group ${
                (link === "/" ? currentLink === link : currentLink.startsWith(link))
                  ? "text-gray-700 bg-gray-200 font-bold"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Icon />
              {name}
            </Link>
          ))}
        </div>
      </div>
    </LeftSection>
  );
};

export default LeftNavigation;
