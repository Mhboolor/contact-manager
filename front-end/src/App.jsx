import SideBar from "./components/sidebar/SideBar";

function App() {
  return (
    <div className="bg-[url('../public/images/bg-dark.jpg')] bg-center bg-cover bg-no-repeat h-screen p-4">
      <div className="bg-gray-3 rounded-xl p-1">
        <div className="bg-black rounded-xl p-2 shadow-container flex">
          <SideBar/>
        </div>
      </div>
    </div>
  )
}

export default App;
