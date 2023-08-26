import React from "react";
import { FiltredBox, Header } from "./content";

function Contacts() {
  return (
    <div className="flex flex-col gap-5 flex-1">
      <Header/>
      <FiltredBox/>
    </div>
  );
}

export default Contacts;
