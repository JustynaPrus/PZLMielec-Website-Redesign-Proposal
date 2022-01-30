import styled from "styled-components";
import { device } from "./../BreakPoints";

export const Wrapper = styled.div`
  display: none;
  background-color: yellow;
  @media ${device.sm} {
    display: flex;
  }
`;
