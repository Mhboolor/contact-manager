import React from "react";
import { MdClose, MdMenu } from "react-icons/md";

function Header({ menu, setMenu }) {
  return (
    <>
      <div className="flex items-center justify-between text-gray-500 gap-1">
        <div className="flex items-center gap-1">
          <p>تعداد : </p>
          <p>700</p>
        </div>
        <button className="flex items-center justify-center hover:text-white text-3xl md:hidden" onClick={() => setMenu(prev => !prev)}>
          {!menu ? <MdClose /> : <MdMenu />}
        </button>
      </div>
      <div className="text-3xl text-white font-bold">
        <p>مخاطبین</p>
      </div>
    </>
  );
}

export default Header;
