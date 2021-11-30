import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Topbar from "../components/topbar/Topbar";
import Sidebar from "../components/Sidebar/Sidebar";
import UserList from "../pages/userList/UserList";
const Routers = () => {
  return (
      <Routes>
      {/* <Topbar /> */}
          {/* <Sidebar /> */}
          <Route path="/" element={<Home/>} />
          <Route path="/users" element={<UserList/>} />
      </Routes>
  );
};

export default Routers;
