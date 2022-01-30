import React from "react";
import { StyledNav } from "./Navigation.styles";
import logo from "../images/logo_pzlmielec.svg";
import Links from "../atoms/Links";
import MobileNavigation from "./MobileNavigation";

const Navigation = () => {
  return (
    <StyledNav>
      <img src={logo} alt="logo" />
      <MobileNavigation />
      <Links />
    </StyledNav>
  );
};

export default Navigation;
