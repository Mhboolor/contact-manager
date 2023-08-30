import React from "react";

function Header({contacts}) {
  return (
    <>
      <div className="flex items-center justify-between text-gray-500 gap-1">
        <div className="flex items-center gap-1">
          <p>تعداد : </p>
          <p>{contacts.length}</p>
        </div>
      </div>
      <div className="text-3xl text-white font-bold">
        <p>مخاطبین</p>
      </div>
    </>
  );
}

export default Header;
