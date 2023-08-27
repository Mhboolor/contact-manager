import React from "react";
import { MdAdd } from "react-icons/md";
import { TbDots } from "react-icons/tb";

function Note() {
  return (
    <div className="text-white flex flex-col gap-2">
      <div className="text-lg font-semibold">
        <p>یادداشت</p>
      </div>
      <div className="flex gap-2 flex-col bg-black rounded-md p-3">
        <div className="flex items-center justify-between">
          <div className="">
            هدیه دادن
          </div>
          <div className="flex items-center justify-center">
            <button className="p-1 mx-4 hover:bg-gray-2 rounded-md duration-150 ease-in-out z-10">
              <TbDots />
            </button>
          </div>
        </div>
        <div className="text-sm text-gray-400">
          گرفتن هدیه برای تولد محمد حسین و این هدیه چیزی نیست جز سرکار رفتن و پول درآوردن
        </div>
      </div>
      <button className="flex items-center gap-2 justify-center bg-black rounded-md py-3 font-semibold">
        <MdAdd className="text-xl" />
        اضافه کردن یادداشت
      </button>
    </div>
  );
}

export default Note;
