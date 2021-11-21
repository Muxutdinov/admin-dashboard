import React from "react";
import Chart from "../../components/chart/Chart";
import FeaturedInto from "../../components/FeaturedInfo/FeaturedInfo";
import "./Home.css";
import { userData } from "../../components/dummyData";

const Home = () => {
  return (
    <div className="Home">
      <FeaturedInto />
      <Chart data={userData} title="User Analytics" grid dataKey="Active" />
      <div className="homeWidgets"></div>
    </div>
  );
};

export default Home;
