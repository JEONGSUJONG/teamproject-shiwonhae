import React from "react";
import * as S from "./style";

const NextBtn = ({ onClick, label }) => {
  return (
    <S.Container onClick={onClick}>
      <h2>{label}</h2>
    </S.Container>
  );
};

export default NextBtn;
