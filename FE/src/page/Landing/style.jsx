import styled from "styled-components";
import mainImage from "/landing.jpg";
import * as CS from "../../style/CommonStyles";

export const BackgroundContainer = styled.div`
  background-image: url(${mainImage});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentWrapper = styled.div`
  text-align: center;
  margin-top: 75vh;
`;

export const HeaderText = styled.h1`
  padding: 10px 50px;
  font-size: 25px;
  color: ${CS.color.primary};
  background-color: white;
  opacity: 70%;
  border-radius: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
`;

export const Span = styled.div`
  margin-top: 20px;
  text-decoration: underline;
`;
