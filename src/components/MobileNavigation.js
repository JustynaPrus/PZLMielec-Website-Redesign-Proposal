import React, { useState } from "react";
import Links from "../atoms/Links";
import { FcMenu } from "react-icons/fc";
import { Wrapper } from "./MobileNavigation.styles";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);
  return (
    <Wrapper>
      <FcMenu
        className="hamburger"
        alt="menu hamburger"
        onClick={() => setOpen(!open)}
      />
      <Links />
    </Wrapper>
  );
};

export default MobileNavigation;
