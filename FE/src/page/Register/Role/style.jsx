import styled from "styled-components";
import * as CS from "../../../style/CommonStyles";

export const Container = styled.div`
  width: 100%;
`;

export const Follow = styled.div`
  text-align: center;
  color: ${CS.color.smalltext};
  margin-bottom: 50px;
`;

export const Choose = styled.label`
  margin: 10px auto;
  display: flex;
  align-items: center;
  border: 2px solid black;
  height: 70px;
  width: 80%;
  background-color: white;
  border-radius: 5px;
`;

export const Person = styled.div`
  margin: 0 20px;
`;

export const Text = styled.div`
  margin: 10px 5px;
  text-align: start;
  p {
    margin-top: 3px;
    font-size: 9px;
    color: ${CS.color.smalltext};
  }
`;
