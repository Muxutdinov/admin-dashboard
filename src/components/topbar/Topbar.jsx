import React from "react";
import {
  Logo,
  TopAdmin,
  Topbar,
  TopbarIconContainer,
  TopIconBadge,
  TopLeft,
  TopRight,
  TopbarWrapper
} from "./TopbarStyle";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import myfoto from "../../assets/imgs/admin.png";
const Topbor = () => {
  return (
    <Topbar>
      <TopbarWrapper>
        <TopLeft>
          <Logo>Jaxongir-admin</Logo>
        </TopLeft>
        <TopRight>
          <TopbarIconContainer>
            <NotificationsNone />
            <TopIconBadge>2</TopIconBadge>
          </TopbarIconContainer>
          <TopbarIconContainer>
            <Language />
            <TopIconBadge>2</TopIconBadge>
          </TopbarIconContainer>
          <TopbarIconContainer>
            <Settings />
          </TopbarIconContainer>
          <TopAdmin src={myfoto} alt="" />
        </TopRight>
      </TopbarWrapper>
    </Topbar>
  );
};

export default Topbor;
