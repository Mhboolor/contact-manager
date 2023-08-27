import { useState } from "react";
import SideBar from "./components/sidebar/SideBar";
import { MdClose, MdMenu } from "react-icons/md";
import { Outlet } from "react-router-dom";

function App() {
  const [menu, setMenu] = useState(false);

  return (
    <div className="bg-[url('../public/images/bg-dark.jpg')] bg-center bg-cover bg-no-repeat h-screen p-5">
      <div className="bg-gray-3 rounded-xl h-full p-1.5">
        <div className="bg-black rounded-xl shadow-container flex gap-5 p-5 h-full relative">
          <button
            className="flex items-center justify-center text-gray-500 hover:text-white text-3xl absolute left-12 top-8 z-50 md:hidden"
            onClick={() => setMenu((prev) => !prev)}
          >
            {!menu ? <MdClose /> : <MdMenu />}
          </button>
          <div className={`absolute left-0 top-0 w-full h-full bg-black/40 z-20 ${!menu ? "block" : "hidden"} md:hidden`} onClick={() => setMenu((prev) => !prev)}></div>
          <SideBar menu={menu} setMenu={setMenu} />
          <Outlet/>
        </div>
      </div>
    </div>
  );
}

export default App;
