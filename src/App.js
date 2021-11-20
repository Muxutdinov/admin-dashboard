import React from "react";
import "./App.css";
import Sidbar from "./components/Sidebar/Sidbar";
import  Topbar  from "./components/topbar/Topbar";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <div>
      <Topbar />
      <div className="Container">
        <Sidbar />
        <Home />
      </div>
    </div>
  );
};

export default App;
