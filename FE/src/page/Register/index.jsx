import React, { useState } from "react";
import Role from "./Role";
import Detail from "./Detail";
import NextBtn from "../../components/NextBtn";

const Register = () => {
  const [next, setNext] = useState(false);

  const nextPage = () => {
    setNext(true);
  };

  return (
    <>
      {!next ? (
        <>
          <Role />
          <NextBtn onClick={nextPage} label="다음" />
        </>
      ) : (
        <>
          <Detail />
          <NextBtn onClick={nextPage} label="시워언해 회원가입" />
        </>
      )}
    </>
  );
};

export default Register;
