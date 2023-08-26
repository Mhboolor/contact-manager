import React from "react";

function Contacts() {
  return (
    <div>
      <div className="flex items-center text-gray-500 gap-1">
        <p>تعداد : </p>
        <p>700</p>
      </div>
      <div className="text-3xl text-white font-bold">
        <p>مخاطبین</p>
      </div>
      <div>
        <div className="flex gap-2 contacts-select">
          <select className="rounded-md p-1 bg-gray-3 text-white font-semibold outline-none">
            <option value="1">ajab</option>
          </select>
          <select className="rounded-md p-1 bg-gray-3 text-white font-semibold outline-none">
            <option value="1">ajab</option>
          </select>
        </div>
        <div>
          <button></button>
          <button></button>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
