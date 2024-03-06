import styled from "styled-components";

export const Header = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  top: 0;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 70px;
  margin-bottom: 20px;
`;

export const LeftWrap = styled.div`
  font-size: 100%;
  position: absolute;
  left: 20px;
`;

export const CenterWrap = styled.div`
  font-size: 20px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-weight: bold;
`;

export const RightWrap = styled.div`
  font-size: 100%;
  position: absolute;
  right: 20px;
`;
