import React from "react";
import { MdAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import { TbDots } from "react-icons/tb";

function Reminder() {
  return (
    <div className="text-white flex flex-col gap-2">
      <div className="text-lg font-semibold">
        <p>یادآوری</p>
      </div>
      <div>
        <div className="flex items-center bg-black rounded-md p-3">
          <div className="flex items-center gap-2 flex-1">
            <p>تماس با</p>
            <Link className="flex items-center gap-2">
              <img
                src="./images/users/user-1.jpeg"
                alt=""
                className="w-10 h-10 rounded-full"
              />
              <p>بولوری</p>
            </Link>
            <p>برای کار</p>
          </div>
          <div className="flex items-center justify-center">
            <button className="p-1 mx-4 hover:bg-gray-2 rounded-md duration-150 ease-in-out z-10">
              <TbDots />
            </button>
          </div>
        </div>
      </div>
      <button className="flex items-center gap-2 justify-center bg-black rounded-md py-3 font-semibold">
        <MdAdd className="text-xl" />
        اضافه کردن یادآوری
      </button>
    </div>
  );
}

export default Reminder;
