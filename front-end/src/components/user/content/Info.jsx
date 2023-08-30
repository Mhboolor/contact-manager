import React from "react";
import { MdEmail, MdHome, MdLocationPin, MdPhone } from "react-icons/md";
import { IoMdHeart } from "react-icons/io";

function Info({ phone, email, address, home, relation }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white font-semibold">
      <div className="flex items-center gap-2 bg-black rounded-md p-3">
        <MdPhone className="text-xl" />
        <input
          type="text"
          className="bg-transparent border-none outline-none flex-1 tracking-wider"
          value={phone}
          readOnly
        />
      </div>
      <div className="flex items-center gap-2 bg-black rounded-md p-3">
        <MdEmail className="text-xl" />
        <input
          type="text"
          className="bg-transparent border-none outline-none flex-1 tracking-wider"
          value={email}
          readOnly
        />
      </div>
      <div className="flex items-center gap-2 bg-black rounded-md p-3">
        <MdLocationPin className="text-xl" />
        <input
          type="text"
          className="bg-transparent border-none outline-none flex-1 tracking-wider"
          value={address}
          readOnly
        />
      </div>
      <div className="flex items-center gap-2 bg-black rounded-md p-3">
        <MdHome className="text-xl" />
        <input
          type="text"
          className="bg-transparent border-none outline-none flex-1 tracking-wider"
          value={home}
          readOnly
        />
      </div>
      <div className="flex items-center gap-2 bg-black rounded-md p-3 sm:col-span-2">
        <IoMdHeart className="text-xl" />
        <input
          type="text"
          className="bg-transparent border-none outline-none flex-1 tracking-wider"
          value={relation}
          readOnly
        />
      </div>
    </div>
  );
}

export default Info;
