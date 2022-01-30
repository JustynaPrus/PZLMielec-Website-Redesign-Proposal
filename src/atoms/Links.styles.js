import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from "./../BreakPoints";

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  @media ${device.sm} {
    flex-direction: row;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 20px;
  text-transform: uppercase;
  color: white;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
