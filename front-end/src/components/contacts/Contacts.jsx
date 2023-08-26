import React, { useState } from "react";
import { Contact, FiltredBox, Header } from "./content";

function Contacts() {
  const [grid, setGrid] = useState(false);

  return (
    <div className="flex flex-col gap-5 flex-1">
      <Header />
      <FiltredBox grid={grid} setGrid={setGrid} />
      <div
        className={`grid grid-cols-1 ${
          grid ? "sm:grid-cols-3" : "sm:grid-cols-1"
        }`}
      >
        <Contact grid={grid} />
      </div>
    </div>
  );
}

export default Contacts;
