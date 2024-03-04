import React from "react";
import * as S from "./style";
import Title from "../../../components/Title";
import NextBtn from "../../../components/NextBtn";

const Role = () => {
  return (
    <>
      <Title props={"회원가입"} />
      <S.Container>
        <S.Follow>회원 종류를 선택하세요!</S.Follow>

        <S.Choose>
          <S.Person>
            <img
              src="./person.png"
              alt="person"
              style={{ width: "35px", height: "35px" }}
            />
          </S.Person>
          <S.Text>
            <h3>일반회원</h3>
            <p>취향에 맞는 찜질방을 선택하고 여유를 가져보세요.</p>
          </S.Text>
        </S.Choose>

        <S.Choose>
          <S.Person>
            <img
              src="./person.png"
              alt="person"
              style={{ width: "35px", height: "35px" }}
            />
          </S.Person>
          <S.Text>
            <h3>찜질방 사장님</h3>
            <p>찜질방을 등록하시고 찜질방을 홍보하세요.</p>
          </S.Text>
        </S.Choose>
      </S.Container>
      <NextBtn props={"다음"} />
    </>
  );
};

export default Role;
