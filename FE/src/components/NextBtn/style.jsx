import styled from "styled-components";
import * as CS from "../../style/CommonStyles";

export const Container = styled.button`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  border: none;
  border-radius: 5px;
  background-color: ${CS.color.button};
  cursor: pointer;
  width: 80%;
  margin: 50px auto;
  transition: background-color 0.1s linear;

  h2 {
    text-align: center;
    padding: 15px 0;
    color: ${CS.color.white};
    font-size: 20px;
  }

  &:hover {
    background-color: ${CS.color.primary};
  }
`;
