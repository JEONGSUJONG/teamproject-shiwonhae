import styled from "styled-components";
import * as CS from "../../../style/CommonStyles";

export const FormWrapper = styled.div`
  width: 80%;
  margin-top: 100px;
`;

export const NamePhone = styled.div`
  display: flex;
  border: 1px solid ${CS.color.gray}
  border-radius: 5px;
  gap: 20px;
  width: 100%;
`;

export const NickName = styled.div`
  flex: 1;
`;

export const Phone = styled.div`
  flex: 1;
`;

export const Label = styled.label`
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  margin-top: 5px;
  padding: 10px;
  font-size: 11px;
  border: 1px solid ${CS.color.gray};
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${CS.color.button};
  }
`;

export const Email = styled.div`
  margin-top: 20px;
`;

export const Auth = styled.button`
  border: none;
  border-radius: 5px;
  background-color: ${CS.color.button};
  width: 100%;
  margin-top: 5px;
  cursor: pointer;

  p {
    text-align: center;
    padding: 5px 0;
    color: ${CS.color.white};
  }
`;

export const AuthNum = styled.div`
  display: flex;
  margin-top: 5px;
  gap: 4px;
`;

export const ConfirmAuthButton = styled.button`
  border: none;
  border-radius: 5px;
  background-color: ${CS.color.button};
  font-size: 11px;
  width: 40%;
  cursor: pointer;
  color: ${CS.color.white};
  margin-top: 5px;
`;

export const PasswordWrapper = styled.div`
  margin-top: 20px;
`;

export const PasswordInput = styled.input`
  padding: 10px;
  font-size: 11px;
  border: 1px solid ${CS.color.gray};
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${CS.color.button};
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
  }
`;
