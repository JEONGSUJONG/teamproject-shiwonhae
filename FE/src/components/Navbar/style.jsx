import styled from "styled-components";
import * as CS from "../../style/CommonStyles";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  background-color: ${CS.color.white};
  border-top: 2px solid;
  width: 100%;
  position: fixed;
  z-index: 999;
  height: 100px;
`;
