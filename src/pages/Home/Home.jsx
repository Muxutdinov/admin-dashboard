import React from "react";
import Chart from "../../components/chart/Chart";
import FeaturedInto from "../../components/FeaturedInfo/FeaturedInfo";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <FeaturedInto />
      <Chart/>
    </div>
  );
};

export default Home;
