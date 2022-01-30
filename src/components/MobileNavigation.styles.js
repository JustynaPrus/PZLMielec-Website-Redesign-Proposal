import styled from "styled-components";
import { device } from "./../BreakPoints";

export const Wrapper = styled.div`
  display: flex;
  background-color: violet;
  @media ${device.sm} {
    display: none;
  }
`;
