import Contacts from "./components/contacts/Contacts";
import SideBar from "./components/sidebar/SideBar";

function App() {
  
  return (
    <div className="bg-[url('../public/images/bg-dark.jpg')] bg-center bg-cover bg-no-repeat h-screen p-5">
      <div className="bg-gray-3 rounded-xl h-full p-1.5">
        <div className="bg-black rounded-xl shadow-container flex gap-5 p-5 h-full">
          <SideBar/>
          <Contacts/>
        </div>
      </div>
    </div>
  )
}

export default App;
