import React from "react";
import "./WidgetSm.css";
import { Visibility } from "@material-ui/icons";
import myfoto from "../../assets/imgs/admin.png";

const WidgetSm = () => {
  return (
    <div className="WidgetSm">
      <span className="WidgetSmTitle">New join Members</span>
      <ul className="WidgetSmList">
        <li className="WidgetSmListItem">
          <img src={myfoto} alt="" className="WidgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Jaxongir Muxutdinov</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="WidgetSmIcon" />
            display
          </button>
        </li>
        <li className="WidgetSmListItem">
          <img src={myfoto} alt="" className="WidgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Jaxongir Muxutdinov</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="WidgetSmIcon" />
            display
          </button>
        </li>
        <li className="WidgetSmListItem">
          <img src={myfoto} alt="" className="WidgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Jaxongir Muxutdinov</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="WidgetSmIcon" />
            display
          </button>
        </li>
        <li className="WidgetSmListItem">
          <img src={myfoto} alt="" className="WidgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Jaxongir Muxutdinov</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="WidgetSmIcon" />
            display
          </button>
        </li>
        <li className="WidgetSmListItem">
          <img src={myfoto} alt="" className="WidgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Jaxongir Muxutdinov</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="WidgetSmIcon" />
            display
          </button>
        </li>
        <li className="WidgetSmListItem">
          <img src={myfoto} alt="" className="WidgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Jaxongir Muxutdinov</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="WidgetSmIcon" />
            display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSm;
