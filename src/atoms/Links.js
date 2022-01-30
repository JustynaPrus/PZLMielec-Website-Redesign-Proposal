import React from "react";
import { StyledList, StyledLink } from "./Links.styles";

const Links = () => {
  return (
    <StyledList>
      <StyledLink to="/PZLMielec-Website-Redesign-Proposal/">O Nas</StyledLink>
      <StyledLink to="/PZLMielec-Website-Redesign-Proposal/Oferta">
        Oferta
      </StyledLink>
      <StyledLink to="/PZLMielec-Website-Redesign-Proposal/Media">
        Media
      </StyledLink>
      <StyledLink to="/PZLMielec-Website-Redesign-Proposal/Kariera">
        Kariera
      </StyledLink>
      <StyledLink to="/PZLMielec-Website-Redesign-Proposal/Galeria">
        Galeria
      </StyledLink>
      <StyledLink to="/PZLMielec-Website-Redesign-Proposal/Kontakt">
        Kontakt
      </StyledLink>
    </StyledList>
  );
};

export default Links;
