import React from "react";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { MdCamera, MdEmail, MdPhone } from "react-icons/md";
import { TbDots } from "react-icons/tb";

function Header({ name, last, image, single, job , company , tags }) {
  return (
    <div className="flex flex-col items-center justify-center gap-5 text-gray-400 sm:flex-row relative">
      <div className="flex items-center gap-2 text-xl absolute top-0 right-8">
        <button>
          <TbDots />
        </button>
        <button>
          <IoMdHeartEmpty />
        </button>
      </div>
      <div>
        <img src={image} alt="User_Image" className="rounded-full w-40 h-40" />
      </div>
      <div className="flex flex-col gap-3 items-center justify-center text-center sm:items-start sm:justify-normal sm:text-start">
        <p className="text-white text-xl font-semibold">{`${name} ${last}`}</p>
        <p>{single}</p>
        <div className="flex gap-2 items-center text-white text-xl">
          <button className="bg-zinc-800 hover:bg-zinc-600 rounded-md p-1">
            <MdPhone />
          </button>
          <button className="bg-zinc-800 hover:bg-zinc-600 rounded-md p-1">
            <MdCamera />
          </button>
          <button className="bg-zinc-800 hover:bg-zinc-600 rounded-md p-1">
            <MdEmail />
          </button>
        </div>
        {tags && (
          <div className="flex flex-wrap items-center gap-2 text-xs">
            {tags.map((tag) => (
              <p className=" bg-zinc-800 rounded-md px-1 py-0.5">{tag}</p>
            ))}
          </div>
        )}
        {
          job && company &&(
            <p>{`${company} , ${job}`}</p>
          )
        }
      </div>
    </div>
  );
}

export default Header;
