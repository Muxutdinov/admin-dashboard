import styled from "styled-components";

export const Topbar = styled.div`
  width: 100%;
  height: 50px;
  background-color: #fff;
  position: sticky;
  top: 0;
  z-index: 999;
`;
export const TopbarWrapper = styled.div`
  height: 100%;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Logo = styled.div`
  font-weight: bold;
  font-size: 30px;
  color: darkblue;
  cursor: pointer;
`;
export const TopLeft = styled.div``;
export const TopRight = styled.div`
  display: flex;
  align-items: center;
`;
export const TopbarIconContainer = styled.div`
  position: relative;
  cursor: pointer;
  margin-right: 10px;
  color: #555;
`;
export const TopAdmin = styled.img`
  height: 35px;
  width: 35px;
  border-radius: 50%;
`;
export const TopIconBadge = styled.span`
  position: absolute;
  top: -5px;
  right: 5px;
  background-color: red;
  border-radius: 50%;
  color: #fff;
  height: 15px;
  width: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
`;
