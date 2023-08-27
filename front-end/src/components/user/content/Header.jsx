import React from "react";
import { MdCamera, MdEmail, MdPhone } from "react-icons/md";

function Header() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 text-gray-400 sm:flex-row">
      <div>
        <img
          src="./images/users/user-1.jpeg"
          alt="User_Image"
          className="rounded-full w-40 h-40"
        />
      </div>
      <div className="flex flex-col gap-3 items-center justify-center text-center sm:items-start sm:justify-normal sm:text-start">
        <p className="text-white text-xl font-semibold">محمدحسین بولوری</p>
        <p>مجرد</p>
        <div className="flex gap-2 items-center text-white text-xl">
          <button className="bg-zinc-800 hover:bg-zinc-600 rounded-md p-1">
            <MdPhone />
          </button>
          <button className="bg-zinc-800 hover:bg-zinc-600 rounded-md p-1">
            <MdCamera />
          </button>
          <button className="bg-zinc-800 hover:bg-zinc-600 rounded-md p-1">
            <MdEmail />
          </button>
        </div>
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <p className=" bg-zinc-800 rounded-md px-1 py-0.5">خانواده</p>
          <p className=" bg-zinc-800 rounded-md px-1 py-0.5">همکار</p>
        </div>
        <p className="text-sm">پیشرو نوآوران , برنامه نویس فرانت </p>
      </div>
    </div>
  );
}

export default Header;
