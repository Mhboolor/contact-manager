import React, { useEffect, useState } from "react";
import { Contact, FiltredBox, Header } from "./content";

import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllContacts,
  selectAllContacts,
  selectContactsStatus,
  selectContactsError,
} from "../../future/contacts/contactsSlice";

function Contacts() {
  const [grid, setGrid] = useState(false);

  const dispatch = useDispatch();

  const contacts = useSelector((state) => selectAllContacts(state));
  const status = useSelector((state) => selectContactsStatus(state));
  const isError = useSelector((state) => selectContactsError(state));
  
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchAllContacts());
    }
  }, [status, dispatch]);

  return (
    <div className="flex flex-col gap-5 flex-1">
      <Header contacts={contacts}/>
      <FiltredBox grid={grid} setGrid={setGrid} />
      <div
        className={`grid grid-cols-1 gap-2 ${
          grid ? "sm:grid-cols-3" : "sm:grid-cols-1"
        }`}
      >
        {isError ? (
          <p className="text-white">error ...</p>
        ) : status === "pending" ? (
          <p className="text-white">Loading ...</p>
        ) : (
          contacts.map((contact) => <Contact grid={grid} {...contact} key={contact.id}/>)
        )}
      </div>
    </div>
  );
}

export default Contacts;
