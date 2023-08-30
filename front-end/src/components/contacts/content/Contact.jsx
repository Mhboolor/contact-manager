import React from "react";
import { TbDots } from "react-icons/tb";
import { Link } from "react-router-dom";

function Contact({ grid, id, name, last, image, phone, email, relation }) {
  return (
    <Link
      to={`/${id}`}
      className={`text-zinc-300 gap-4 rounded-md p-2 duration-150 ease-in-out hover:bg-gray-2 flex flex-col items-center text-center hover:text-white ${
        grid ? "sm:flex-col" : "sm:flex-row sm:text-start"
      }`}
    >
      <div>
        <img src={image} alt="user_image" className="rounded-full w-14 h-14" />
      </div>
      <div className="md:flex-1 flex flex-col">
        <p className="text-white">{`${name} ${last}`}</p>
        <p>{relation}</p>
      </div>
      <div className="flex-1 flex flex-col">
        <p>{phone}</p>
        <p>{email}</p>
      </div>
      <div className="flex items-center justify-center">
        <button className="p-1 mx-4 hover:bg-gray-1 rounded-md duration-150 ease-in-out z-10">
          <TbDots />
        </button>
      </div>
    </Link>
  );
}

export default Contact;
