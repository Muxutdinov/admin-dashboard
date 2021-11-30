import React from "react";
import "./UserList.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbor from "../../components/topbar/Topbar.jsx";

const UserList = () => {
  return (
    <>
    <Topbor />
  <div className="Container">
    <div className="SidebarWrapper">
      <Sidebar />
    </div>
    <div className="UserList">
        UserList
    </div>
  </div>
</>
  );
};

export default UserList;
