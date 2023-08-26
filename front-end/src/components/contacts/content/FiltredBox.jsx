import React from "react";
import { CiGrid2H, CiGrid41 } from "react-icons/ci";

function FiltredBox({grid , setGrid}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-2 contacts-select">
        <select className="rounded-md p-1 bg-gray-3 text-white font-semibold outline-none">
          <option value="1">ajab</option>
        </select>
        <select className="rounded-md p-1 bg-gray-3 text-white font-semibold outline-none">
          <option value="1">ajab</option>
        </select>
      </div>
      <div className="text-white text-2xl items-center gap-1 hidden sm:flex">
        <button className="hover:bg-gray-2 p-1 rounded-md duration-150 ease-in-out" onClick={() => setGrid(false)}>
          <CiGrid2H />
        </button>
        <button className="hover:bg-gray-2 p-1 rounded-md duration-150 ease-in-out" onClick={() => setGrid(true)}>
          <CiGrid41 />
        </button>
      </div>
    </div>
  );
}

export default FiltredBox;
