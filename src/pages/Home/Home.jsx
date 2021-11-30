import React from "react";
import Chart from "../../components/chart/Chart";
import FeaturedInto from "../../components/FeaturedInfo/FeaturedInfo";
import "./Home.css";
import { userData } from "../../components/dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLG from "../../components/widgetLg/WidgetLG";
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbor from "../../components/topbar/Topbar";
// import { Topbar } from "../../components/topbar/TopbarStyle";

const Home = () => {
  return (
    <>
        <Topbor />
      <div className="Container">
        <div className="SidebarWrapper">
          <Sidebar />
        </div>
        <div className="Home">
          <FeaturedInto />
          <Chart data={userData} title="User Analytics" grid dataKey="Active" />
          <div className="homeWidgets">
            <WidgetSm />
            <WidgetLG />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
