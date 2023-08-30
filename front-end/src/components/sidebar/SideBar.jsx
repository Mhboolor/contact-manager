import React from "react";
import { AddContact, Navbar, SearchBox } from "./content";

function SideBar({ menu }) {
  return (
    <aside
      className={`flex flex-col justify-between gap-5 bg-black h-screen z-50 absolute right-0 top-0 p-4 duration-150 ease-in-out lg:p-0 lg:flex lg:relative lg:translate-x-0 lg:h-auto lg:bg-transparent ${
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
