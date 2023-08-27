import React from "react";
import { AddContact, Navbar, SearchBox } from "./content";

function SideBar({ menu }) {
  return (
    <aside
      className={`flex flex-col justify-between gap-5 bg-black h-full z-50 absolute right-0 top-0 p-4 duration-150 ease-in-out md:p-0 md:flex md:relative md:translate-x-0 md:h-auto md:bg-transparent ${
        menu ? "translate-x-[500px]" : "translate-x-0"
      }`}
    >
      <SearchBox />
      <Navbar />
      <AddContact />
    </aside>
  );
}

export default SideBar;
