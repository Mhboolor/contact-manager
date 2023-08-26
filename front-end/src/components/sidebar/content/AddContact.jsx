import React from "react";
import { MdAdd } from "react-icons/md";

function AddContact() {
  return (
    <div className="flex flex-col gap-5">
      <button className="text-white flex items-center gap-1 justify-center bg-btnBlue rounded-md py-1.5">
        <MdAdd className="text-lg" /> اضافه کردن مخاطب
      </button>
    </div>
  );
}

export default AddContact;
