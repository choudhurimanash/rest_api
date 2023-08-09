import "./App.css";
import Navbar from "./components/Navbar";
import AddUser from "./components/AddUser";
import Allusers from "./components/Allusers";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditUser from "./components/EditUser";
import CrudApk from "./components/CrudApk";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<CrudApk />}  />
        <Route path="/add" element={<AddUser />} />
        <Route path="/all" element={<Allusers />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
