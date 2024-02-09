import React from "react";
import * as S from "./style";
import { IoIosArrowBack } from "react-icons/io";

const Title = ({ props }) => {
  return (
    <S.Container>
      <S.ReactIcons>
        <IoIosArrowBack />
      </S.ReactIcons>
      <S.Title>{props}</S.Title>
    </S.Container>
  );
};

export default Title;
