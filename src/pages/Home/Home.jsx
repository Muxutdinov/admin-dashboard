import React from "react";
import Chart from "../../components/chart/Chart";
import FeaturedInto from "../../components/FeaturedInfo/FeaturedInfo";
import "./Home.css";
import { userData } from "../../components/dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLG from "../../components/widgetLg/WidgetLG";

const Home = () => {
  return (
    <div className="Home">
      <FeaturedInto />
      <Chart data={userData} title="User Analytics" grid dataKey="Active" />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLG />
      </div>
    </div>
  );
};

export default Home;
