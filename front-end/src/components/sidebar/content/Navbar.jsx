import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineUser, AiOutlineTags } from "react-icons/ai";
import {
  MdOutlineFavoriteBorder,
  MdArrowDropDown,
  MdArrowDropUp,
} from "react-icons/md";

function Navbar() {
  const [drop, setDrop] = useState(false);

  return (
    <nav className="text-white flex-1">
      <ul className="flex flex-col gap-1">
        <li>
          <NavLink
            className={`flex items-center gap-2 py-1 px-1 rounded-md duration-200 ease-in-out hover:bg-gray-2`}
            to={"/"}
          >
            <AiOutlineUser className="text-xl" />
            همه مخاطبین
          </NavLink>
        </li>
        <li>
          <NavLink
            className={`flex items-center gap-2 py-1 px-1 rounded-md duration-200 ease-in-out hover:bg-gray-2`}
            to={"/"}
          >
            <MdOutlineFavoriteBorder className="text-xl" />
            علاقه مندی ها
          </NavLink>
        </li>
        <li>
          <button
            className={`flex items-center justify-between py-1 px-1 rounded-md duration-200 ease-in-out hover:bg-gray-2 w-full`}
            onClick={() => setDrop((prev) => !prev)}
          >
            <div className="flex items-center justify-center gap-2">
              <AiOutlineTags className="text-xl" />
              برچسب ها
            </div>
            {drop ? <MdArrowDropUp /> : <MdArrowDropDown />}
          </button>
          <ul
            className={`flex-col gap-1 text-sm font-semibold text-gray-400 ${
              drop ? "flex" : "hidden"
            }`}
          >
            <li>
              <NavLink
                className={`flex items-center gap-2 py-1 pr-8 rounded-md duration-200 ease-in-out hover:bg-gray-2 hover:text-white`}
              >
                خانواده
              </NavLink>
            </li>
            <li>
              <NavLink
                className={`flex items-center gap-2 py-1 pr-8 rounded-md duration-200 ease-in-out hover:bg-gray-2 hover:text-white`}
              >
                دوست
              </NavLink>
            </li>
            <li>
              <NavLink
                className={`flex items-center gap-2 py-1 pr-8 rounded-md duration-200 ease-in-out hover:bg-gray-2 hover:text-white`}
              >
                همکار
              </NavLink>
            </li>
            <li>
              <NavLink
                className={`flex items-center gap-2 py-1 pr-8 rounded-md duration-200 ease-in-out hover:bg-gray-2 hover:text-white`}
              >
                ورزش
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
