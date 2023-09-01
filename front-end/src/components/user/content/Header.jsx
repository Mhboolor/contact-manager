import React, { useState } from "react";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { MdCamera, MdEmail, MdPhone } from "react-icons/md";
import { TbDots } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { delContact } from "../../../future/contacts/contactsSlice";

function Header({
  name,
  id,
  last,
  image,
  single,
  job,
  company,
  tags,
  favorites,
  favHandler,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [drop , setDrop] = useState(false)

  const deleteContact = (id) => {
    dispatch(delContact(id));
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center gap-5 text-gray-400 sm:flex-row relative">
      <div className="flex items-center gap-2 text-xl absolute top-0 right-8">
        <button className="relative" onClick={() => setDrop(prev => !prev)}>
          <TbDots />
          <div className={`items-center justify-center text-center rounded bg-black border border-gray-400 divide-x divide-x-reverse text-sm absolute top-6 ${drop ? "flex" : "hidden"}`}>
            <Link
              to={`/edit-contact/${id}`}
              className="w-full px-2 py-1 hover:bg-gray-2 duration-150 ease-in-out hover:text-white"
            >
              ویرایش
            </Link>
            <button
              value={id}
              onClick={(e) => deleteContact(e.target.value)}
              className="w-full px-2 py-1 hover:bg-gray-2 duration-150 ease-in-out hover:text-white"
            >
              حذف
            </button>
          </div>
        </button>
        <button onClick={favHandler}>
          {favorites ? <IoMdHeart /> : <IoMdHeartEmpty />}
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
        {job && company && <p>{`${company} , ${job}`}</p>}
      </div>
    </div>
  );
}

export default Header;
