import React from "react";
import { TbDots } from "react-icons/tb";
import { Link } from "react-router-dom";

function Contact({ grid }) {
  return (
    <Link
      className={`text-zinc-300 gap-4 rounded-md p-2 duration-150 ease-in-out hover:bg-gray-2 flex flex-col items-center text-center hover:text-white ${
        grid ? "sm:flex-col" : "sm:flex-row sm:text-start"
      }`}
    >
      <div>
        <img
          src="./images/users/user-1.jpeg"
          alt="user_image"
          width={60}
          height={60}
          className="rounded-full"
        />
      </div>
      <div className="flex-1 flex flex-col">
        <p className="text-white">پدر</p>
        <p>خانواده</p>
      </div>
      <div className="flex-1 flex flex-col">
        <p>0903-542-5899</p>
        <p>mohammadhosein.boolori@gmail.com</p>
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
