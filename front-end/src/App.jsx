import { useState } from "react";
import Contacts from "./components/contacts/Contacts";
import SideBar from "./components/sidebar/SideBar";

function App() {
  
  const [menu , setMenu] = useState(false)


  return (
    <div className="bg-[url('../public/images/bg-dark.jpg')] bg-center bg-cover bg-no-repeat h-screen p-5">
      <div className="bg-gray-3 rounded-xl h-full p-1.5">
        <div className="bg-black rounded-xl shadow-container flex gap-5 p-5 h-full">
          <SideBar menu={menu} setMenu={setMenu}/>
          <Contacts menu={menu} setMenu={setMenu}/>
        </div>
      </div>
    </div>
  )
}

export default App;
