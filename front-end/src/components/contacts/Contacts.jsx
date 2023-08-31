import React, { useState } from "react";
import { Contact, FiltredBox, Header } from "./content";

import { useSelector } from "react-redux";
import {
  selectAllContacts,
  selectContactsStatus,
} from "../../future/contacts/contactsSlice";
import Loading from "../Loading";
import Error from "../Error";

function Contacts() {
  const [grid, setGrid] = useState(false);

  const contacts = useSelector((state) => selectAllContacts(state));
  const status = useSelector((state) => selectContactsStatus(state));

  return (
    <div className="flex flex-col gap-5 flex-1">
      <Header contacts={contacts} />
      <FiltredBox setGrid={setGrid} />
      {status === "failed" ? (
        <Error />
      ) : status === "pending" ? (
        <Loading />
      ) : contacts.length <= 0 ? (
        <div className="w-full h-full flex items-center justify-center">
          <p className="text-center text-white font-semibold text-lg">هیچ مخاطبی وجود ندارد</p>
        </div>
      ) : (
        <div
          className={`grid grid-cols-1 gap-2 ${
            grid ? "lg:grid-cols-2" : "lg:grid-cols-1"
          }`}
        >
          {contacts.map((contact) => (
            <Contact grid={grid} {...contact} key={contact.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Contacts;
