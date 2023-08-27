import { useState } from "react";
import SideBar from "./components/sidebar/SideBar";
import { MdClose, MdMenu } from "react-icons/md";
import User from "./components/user/User";

function App() {
  const [menu, setMenu] = useState(false);

  return (
    <div className="bg-[url('../public/images/bg-dark.jpg')] bg-center bg-cover bg-no-repeat h-screen p-5">
      <div className="bg-gray-3 rounded-xl h-full p-1.5">
        <div className="bg-black rounded-xl shadow-container flex gap-5 p-5 h-full relative">
          <button
            className="flex items-center justify-center text-gray-500 hover:text-white text-3xl absolute left-8 md:hidden"
            onClick={() => setMenu((prev) => !prev)}
          >
            {!menu ? <MdClose /> : <MdMenu />}
          </button>
          <SideBar menu={menu} setMenu={setMenu} />
          <User/>
        </div>
      </div>
    </div>
  );
}

export default App;
