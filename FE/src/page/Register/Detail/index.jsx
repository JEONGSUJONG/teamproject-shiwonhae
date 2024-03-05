import React from "react";
import * as S from "./style";
import Title from "../../../components/Title";

const Detail = () => {
  return (
    <>
      <Title props={"회원가입"} />
      <S.FormWrapper>
        <S.NamePhone>
          <S.NickName>
            <S.Label htmlFor="email">닉네임</S.Label>
            <S.Input type="text" id="nickname" placeholder="프로필 이름" />
          </S.NickName>
          <S.Phone>
            <S.Label htmlFor="email">전화번호</S.Label>
            <S.Input type="tel" id="phoneNumber" placeholder="010-0000-0000" />
          </S.Phone>
        </S.NamePhone>

        <S.Email>
          <div>
            <S.Label htmlFor="email">이메일</S.Label>
            <S.Input
              type="email"
              id="email"
              placeholder="example.example.com"
            />
          </div>
          <S.Auth>
            <p>인증번호 보내기</p>
          </S.Auth>
        </S.Email>
        <S.AuthNum>
          <S.Input type="text" id="authCode" placeholder="인증번호 입력" />
          <S.ConfirmAuthButton>
            <p>인증번호 확인</p>
          </S.ConfirmAuthButton>
        </S.AuthNum>

        <S.PasswordWrapper>
          <S.Label htmlFor="password">비밀번호</S.Label>
          <S.PasswordInput
            type="password"
            id="password"
            placeholder="영문, 숫자, 특수문자 포함 8자 이상"
          />
          <S.Label htmlFor="confirmPassword">비밀번호 확인</S.Label>
          <S.PasswordInput
            type="password"
            id="confirmPassword"
            placeholder="영문, 숫자, 특수문자 포함 8자 이상"
          />
        </S.PasswordWrapper>
      </S.FormWrapper>
    </>
  );
};

export default Detail;
