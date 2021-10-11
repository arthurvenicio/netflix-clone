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

        <S.InfoBox>
          <h1>Filmes, séries e muito mais. Sem limites.</h1>
          <h2>Assista onde quiser. Cancele quando quiser.</h2>
          <form>
            <p>
              Pronto para assistir? Informe seu email para criar ou reiniciar
              sua assinatura.
            </p>
            <div className="email">
              <input type="email" placeholder="Email" required />
              <button type="submit">Vamos lá</button>
            </div>
          </form>
        </S.InfoBox>
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
