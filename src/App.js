import React from "react";
import "./App.css";
import Sidbar from "./components/Sidebar/Sidbar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";

const App = () => {
  return (
    // <Router>
    //     <div className="Container">
    //       <Sidbar />
    //     </div>
    //   <Routes>
    //     <Route path="/" element={<Home />}>
    //     <Route path="/users" element={<UserList/>}>
    //     <Topbar />
    //   </Routes>
    // </Router>
  );
};

export default App;
