import styled from "styled-components";
import * as CS from "../../style/CommonStyles";

export const Container = styled.div`
  border: 2px solid none;
  border-radius: 5px;
  background-color: ${CS.color.button};
  position: absolute;
  bottom: 50px;
  width: 80%;
  margin: 0 auto;
  left: 0;
  right: 0;

  h2 {
    text-align: center;
    padding: 15px 0;
    color: ${CS.color.white};
    font-size: 20px;
  }
`;
