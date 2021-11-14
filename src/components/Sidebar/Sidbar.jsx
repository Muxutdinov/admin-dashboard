import React from "react";
import "./Sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PersonOutlineSharp,
  CreditCard,
  AttachMoney,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  LocalMallOutlined,
  ShowChartOutlined,
  Report,
} from "@material-ui/icons";

const Sidbar = () => {
  return (
    <div className="Sidebar">
      <div className="SidebarWrapper">
        <div className="SidebarMenu">
          <h3 className="SidebarTitle">Dashboard</h3>
          <ul className="SidebarList">
            <li className="SidebarListItem active">
              <LineStyle className="SidebarIcon" />
              Home
            </li>
            <li className="SidebarListItem">
              <Timeline className="SidebarIcon" />
              Analytics
            </li>
            <li className="SidebarListItem">
              <TrendingUp className="SidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="SidebarMenu">
          <h3 className="SidebarTitle">Quick Menu</h3>
          <ul className="SidebarList">
            <li className="SidebarListItem">
              <PersonOutlineSharp className="SidebarIcon" />
              Users
            </li>
            <li className="SidebarListItem">
              <CreditCard className="SidebarIcon" />
              Products
            </li>
            <li className="SidebarListItem">
              <AttachMoney className="SidebarIcon" />
              Transactions
            </li>
          </ul>
        </div>
        <div className="SidebarMenu">
          <h3 className="SidebarTitle">Notifications</h3>
          <ul className="SidebarList">
            <li className="SidebarListItem">
              <MailOutline className="SidebarIcon" />
              Mail
            </li>
            <li className="SidebarListItem">
              <DynamicFeed className="SidebarIcon" />
              Feedback
            </li>
            <li className="SidebarListItem">
              <ChatBubbleOutline className="SidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="SidebarMenu">
          <h3 className="SidebarTitle">Staff</h3>
          <ul className="SidebarList">
            <li className="SidebarListItem">
              <LocalMallOutlined className="SidebarIcon" />
              Manage
            </li>
            <li className="SidebarListItem">
              <ShowChartOutlined className="SidebarIcon" />
              Analytics
            </li>
            <li className="SidebarListItem">
              <Report className="SidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidbar;
