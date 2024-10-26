import SideBar from "./components/SideBar";
import Homepage from "./pages/Home";
import { Routes, Route } from "react-router-dom";

const App = () => {


  return (
    <>
      <main className="flex">
        <SideBar />
        <Routes>
            <Route path="/" element={<Homepage />} />
            {/* <Route path="/tasks" element={<Tasks />} />
            <Route path="/calender" element={<Calender />} /> */}
          </Routes>
      </main>
    </>
  )
}

export default App;
