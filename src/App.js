import React from "react";
import "./App.css";
import Sidbar from "./components/Sidebar/Sidbar";
import Topbor from "./components/topbor/Topbor";

const App = () => {
  return (
    <div>
      <Topbor />
      <div className="Container">
        <Sidbar />
        <div className="others">others</div>
      </div>
    </div>
  );
};

export default App;
