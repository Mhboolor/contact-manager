import React from "react";
import { MdSearch } from "react-icons/md";
import { Link } from "react-router-dom";

function SearchBox() {
  return (
    <div className="flex flex-col gap-5">
      <Link to={"/"} className="flex items-center gap-1 text-white font-semibold">
        <img src="./images/logo.png" alt="Logo_Image" width={30} height={30}/>
        <p>بولوری</p>
      </Link>
      <div className="flex text-gray-500 border border-gray-500 bg-gray-1 rounded-md">
        <input type="text" className="outline-none bg-transparent pr-2 text-white placeholder:text-gray-500 text-sm" placeholder="جستجو ..."/>
        <button className="text-xl px-2 py-[5px]">
          <MdSearch />
        </button>
      </div>
    </div>
  );
}

export default SearchBox;
