import AddUser from "./Component/AddUser";
import DisplayUsers from "./Component/DisplayUsers";

function App() {
  return (
    <div className="mx-auto px-4 md:px-20 lg:px-56 xl:px-[30%] bg-[#1e222a] min-h-screen">
      <AddUser />
      <DisplayUsers />
    </div>
  );
}

export default App;
