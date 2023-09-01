import React, { useState } from "react";
import { Contact, FiltredBox, Header } from "./content";

import { useSelector } from "react-redux";
import {
  selectAllContacts,
  selectContactsStatus,
} from "../../future/contacts/contactsSlice";
import Loading from "../Loading";
import Error from "../Error";
import { useParams } from "react-router-dom";

function Contacts() {
  const [grid, setGrid] = useState(false);

  const { categoryName } = useParams();

  let content;

  const contacts = useSelector((state) => selectAllContacts(state));
  const status = useSelector((state) => selectContactsStatus(state));

  switch (categoryName) {
    case "favorites":
      content = contacts.filter((contact) => contact.favorites === true);
      break;
    case "family":
      content = contacts.filter((contact) => contact.relation === "خانواده");
      break;
    case "frends":
      content = contacts.filter((contact) => contact.relation === "دوست");
      break;
    case "collage":
      content = contacts.filter((contact) => contact.relation === "همکار");
      break;
    case "familiar":
      content = contacts.filter((contact) => contact.relation === "آشنا");
      break;
    default:
      content = contacts;
      break;
  }

  return (
    <div className="flex flex-col gap-5 flex-1">
      <Header contacts={content} />
      <FiltredBox setGrid={setGrid} />
      {status === "failed" ? (
        <Error />
      ) : status === "pending" ? (
        <Loading />
      ) : contacts.length <= 0 ? (
        <div className="w-full h-full flex items-center justify-center">
          <p className="text-center text-white font-semibold text-lg">
            هیچ مخاطبی وجود ندارد
          </p>
        </div>
      ) : (
        <div
          className={`grid grid-cols-1 gap-2 ${
            grid ? "lg:grid-cols-2" : "lg:grid-cols-1"
          }`}
        >
          {content.map((contact) => (
            <Contact grid={grid} {...contact} key={contact.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Contacts;
