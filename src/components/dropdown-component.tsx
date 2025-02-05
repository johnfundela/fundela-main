"use client";

import { ReactNode, useState } from "react";

type Props = {
  hover?: boolean;
  children: ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options: any[];
  titleKey: string;
  onSelect: CallableFunction;
  column?: number;
};

const DropDownComponent = ({
  hover,
  children,
  options,
  titleKey,
  onSelect,
  column,
}: Props) => {
  const [open, setOpen] = useState(false);

  const openDropDown = () => {
    setOpen((e) => !e);
  };
  return (
    <div
      onMouseEnter={hover ? openDropDown : () => {}}
      onMouseLeave={hover ? openDropDown : () => {}}
    >
      <button
        id="dropdownHoverButton"
        data-dropdown-toggle="dropdownHover"
        data-dropdown-trigger="hover"
        className="focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
        type="button"
        onClick={openDropDown}
      >
        {children}
        <span className="material-symbols-outlined">keyboard_arrow_down</span>
      </button>
      {open ? (
        <div
          id="dropdownHover"
          className={`z-10 absolute bg-white divide-y divide-gray-100 rounded-xl shadow grid shadow-2xl grid-cols-${
            column || 1
          } shadow-outer`}
        >
          {(options || []).map((item, index) => (
            <div
              key={`drop_down_options_${index}`}
              className={`py-2 text-sm  `}
              aria-labelledby="dropdownHoverButton"
              onClick={() => onSelect(item)}
            >
              <div>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-teal-700 hover:text-white"
                >
                  {item[titleKey]}
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default DropDownComponent;
