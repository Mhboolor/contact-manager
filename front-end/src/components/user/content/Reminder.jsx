import React from "react";
import { MdAdd } from "react-icons/md";
import { TbDots } from "react-icons/tb";

function Reminder({ reminder }) {
  return (
    <div className="text-white flex flex-col gap-2">
      <div className="text-lg font-semibold">
        <p>یادآوری</p>
      </div>
      {reminder ? (
        <div>
          <div className="flex items-center bg-black rounded-md p-3">
            <div className="flex items-center gap-2 flex-1">
              <p>تماس با بولوری</p>
            </div>
            <div className="flex items-center justify-center">
              <button className="p-1 mx-4 hover:bg-gray-2 rounded-md duration-150 ease-in-out z-10">
                <TbDots />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center font-semibold bg-black rounded-md p-3">
          هیچ یادآوری وجود ندارد
        </div>
      )}
      <button className="flex items-center gap-2 justify-center bg-black rounded-md py-3 font-semibold">
        <MdAdd className="text-xl" />
        اضافه کردن یادآوری
      </button>
    </div>
  );
}

export default Reminder;
