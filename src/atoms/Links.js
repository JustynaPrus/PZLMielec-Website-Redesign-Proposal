import React from "react";
import { Link } from "react-router-dom";
import { StyledList } from "./Links.styles";

const Links = () => {
  return (
    <StyledList>
      <li>
        <Link to="/O-Nas">O Nas</Link>
      </li>

      <li>
        <Link to="/Oferta">Oferta</Link>
      </li>
      <li>
        <Link to="/Media">Media</Link>
      </li>
      <li>
        <Link to="/Kariera">Kariera</Link>
      </li>
      <li>
        <Link to="/Galeria">Galeria</Link>
      </li>
      <li>
        <Link to="/Kontakt">Kontakt</Link>
      </li>
    </StyledList>
  );
};

export default Links;
