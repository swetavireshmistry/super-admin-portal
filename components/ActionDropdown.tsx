'use client';
import React, { useState } from "react";

const ActionDropdown: React.FC<{
  actions: {
    label: string;
    href: string;
    isDanger?: boolean;
  }[];
}> = ({ actions }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex-1">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={
          "inline-flex items-center rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
        }
        type="button"
      >
        <span className="sr-only">Action button</span>
        Action
        <svg
          className="ms-2.5 size-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      {/* Dropdown menu */}
      <div
        className={
          "z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600 " +
          (isOpen ? "block" : "hidden")
        }
      >
        <ul
          className="py-1 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownActionButton"
        >
          {actions.map((action) => (
            <li key={action.label}>
              <a
                href={action.href}
                className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${action.isDanger ? "text-red-600 dark:text-red-500" : ""
                  }`}
              >
                {action.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ActionDropdown;
