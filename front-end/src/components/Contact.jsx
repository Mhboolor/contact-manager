import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { delContact } from "../future/contacts/contactsSlice";

function Contact({ grid, id, name, last, image, phone, email, relation }) {

  const dispatch = useDispatch();

  const deleteContact = (id) => {
    dispatch(delContact(id))
  }

  return (
    <div
      className={`text-zinc-300 gap-4 rounded-md p-2 duration-150 ease-in-out hover:bg-gray-2 flex flex-col items-center ${
        grid ? "sm:flex-col" : "sm:flex-row sm:text-start"
      }`}
    >
      <Link
        to={`/user/${id}`}
        className={`text-zinc-300 flex-1 gap-4 flex flex-col items-center text-center w-full h-full hover:text-white ${
          grid ? "sm:flex-col" : "sm:flex-row sm:text-start"
        }`}
      >
        <div>
          <img
            src={image}
            alt="user_image"
            className="rounded-full w-14 h-14"
          />
        </div>
        <div className="md:flex-1 flex flex-col">
          <p className="text-white">{`${name} ${last}`}</p>
          <p>{relation}</p>
        </div>
        <div className="flex-1 flex flex-col">
          <p>{phone}</p>
          <p>{email}</p>
        </div>
      </Link>
        <div className="flex items-center justify-center text-center rounded bg-black border border-gray-400 divide-x divide-x-reverse">
          <Link to={`/edit-contact/${id}`} className="w-full px-2 py-1 hover:bg-gray-2 duration-150 ease-in-out hover:text-white">ویرایش</Link>
          <button value={id} onClick={e => deleteContact(e.target.value)} className="w-full px-2 py-1 hover:bg-gray-2 duration-150 ease-in-out hover:text-white">حذف</button>
        </div>
    </div>
  );
}

export default Contact;
