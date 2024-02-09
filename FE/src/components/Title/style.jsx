import styled from "styled-components";
import * as CS from "../../style/CommonStyles";

export const Container = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  position: relative;
  height: 50px;
`;

export const ReactIcons = styled.button`
  position: absolute;
  left: 8%;
  top: 50%;
  transform: translateY(-50%);
  font-size: 30px;
  background: none;
  border: none;
`;

export const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
`;
