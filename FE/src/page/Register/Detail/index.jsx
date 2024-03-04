import React from "react";
import * as S from "./style";
import Title from "../../../components/Title";
import NextBtn from "../../../components/NextBtn";

const Detail = () => {
  return (
    <>
      <Title props={"회원가입"} />
      <S.Follow>마지막 입니다! 좀만 힘내세요!</S.Follow>
      <NextBtn props={"완료"} />
    </>
  );
};

export default Detail;
