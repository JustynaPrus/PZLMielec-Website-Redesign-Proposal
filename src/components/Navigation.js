import React from "react";
import { StyledNav } from "./Navigation.styles";
import logo from "../images/logo_pzlmielec.svg";
import MobileNavigation from "./MobileNavigation";
import DesktopNavigation from "./DesktopNavigation";

const Navigation = () => {
  return (
    <StyledNav>
      <img src={logo} alt="logo" />
      <MobileNavigation />
      <DesktopNavigation />
    </StyledNav>
  );
};

export default Navigation;
