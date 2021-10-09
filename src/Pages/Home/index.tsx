import React from "react";
import * as S from "./style";

import logo from "../../Assets/logo-netflix.svg";

export function Home(): JSX.Element {
  return (
    <>
      <S.ContainerH>
        <S.Header>
          <S.Logo src={logo} alt="Netflix Logo" />
          <S.Languages>
            <option>Português</option>
            <option>English</option>
          </S.Languages>
          <S.ButtonSignup>Entrar</S.ButtonSignup>
        </S.Header>
      </S.ContainerH>
      <S.HighLight></S.HighLight>
      <S.HighLight></S.HighLight>
      <S.HighLight></S.HighLight>
      <S.HighLight></S.HighLight>
      <S.Questions></S.Questions>
      <S.Footer></S.Footer>
    </>
  );
}
