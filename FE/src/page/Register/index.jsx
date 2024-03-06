import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Header from "../../components/layout/Header";
import { useForm } from "react-hook-form";

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  return (
    <>
      <Header
        typeLeft={"BACK"}
        typeCenter={"TEXT"}
        textCenter={"회원가입"}
        leftOnClickEvent={() => navigate(-1)}
      />
    </>
  );
};

export default Register;
