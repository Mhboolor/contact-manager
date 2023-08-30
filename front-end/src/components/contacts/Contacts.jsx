import React, { useState } from "react";
import { Contact, FiltredBox, Header } from "./content";

import { useSelector } from "react-redux";
import {
  selectAllContacts,
  selectContactsStatus,
  selectContactsError,
} from "../../future/contacts/contactsSlice";
import Loading from "../Loading";
import Error from "../Error";

function Contacts() {
  const [grid, setGrid] = useState(false);

  const contacts = useSelector((state) => selectAllContacts(state));
  const status = useSelector((state) => selectContactsStatus(state));
  const isError = useSelector((state) => selectContactsError(state));

  return (
    <div className="flex flex-col gap-5 flex-1">
      <Header contacts={contacts} />
      <FiltredBox setGrid={setGrid} />
      {isError ? (
        <Error />
      ) : status === "pending" ? (
        <Loading />
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
