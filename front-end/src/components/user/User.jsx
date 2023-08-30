import React from "react";
import { Header, Info, Note, Reminder } from "./content";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectContactById } from "../../future/contacts/contactsSlice";

function User() {

  const {userId} = useParams();
  const userInfo = useSelector(state => selectContactById(state , userId))

  return (
    <div className="flex flex-col gap-5 flex-1 rounded-2xl bg-gradient-to-t from-black to-gray-800 py-5 overflow-y-auto">
      <Header {...userInfo}/>
      <div className="bg-[rgb(24,24,24)] p-5 flex flex-col gap-5">
        <Info {...userInfo}/>
        <Reminder {...userInfo}/>
        <Note {...userInfo}/>
      </div>
    </div>
  );
}

export default User;
