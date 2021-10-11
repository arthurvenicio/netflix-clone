import styled from "styled-components";
import background from "../../Assets/background-1.png";
export const ContainerH = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${background});
  background-repeat: no-repeat;
  background-clip: padding-box;

  gap: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Header = styled.header`
  width: 100%;
  height: 5rem;

  padding: 3rem 2rem;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  gap: 2rem;
`;

export const Logo = styled.img`
  width: 11rem;
  height: 10rem;
  transition: filter 500ms;

  &:hover {
    filter: brightness(0.8);
  }
`;

export const Languages = styled.select`
  padding: 0.6rem;
  border: 1px solid #ddd;
  border-radius: 0.2rem;
  background: rgba(0, 0, 0, 0.25);
  margin-left: auto;
  color: #fff;
`;

export const ButtonSignup = styled.button`
  background: #e50914;
  padding: 0.4rem 1.1rem;
  width: 5rem;
  height: 2.4rem;

  border-radius: 0.3rem;

  margin-right: 2rem;

  border: none;
  color: #fff;
`;

export const HighLight = styled.div`
  width: 100%;
  height: 25rem;
  background: black;
  border-top: 0.5rem solid rgba(255, 255, 255, 0.2);
`;

export const Questions = styled.div`
  width: 100%;
  height: 50rem;
  background: black;
  border-top: 0.5rem solid rgba(255, 255, 255, 0.2);
  border-bottom: 0.5rem solid rgba(255, 255, 255, 0.2);
`;

export const Footer = styled.footer`
  width: 100%;
  height: 30rem;
  background: black;
`;

export const InfoBox = styled.div`
  width: 40rem;
  height: 30rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 2rem;

  & h1 {
    width: 35rem;
    text-align: center;
    font-family: --apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 3rem;
    color: #fff;
  }
  & h2 {
    font-family: --apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 1.5rem;
    font-weight: 400;
    color: #fff;
  }

  & form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    & p {
      font-family: --apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      font-size: 1.1rem;
      font-weight: 500;
      color: #fff;
    }

    &.email {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    & input {
      width: 26.75rem;
      height: 3rem;
      padding: 1rem;

      font-family: --apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      font-size: 1.3rem;
    }

    & button {
      background: #e50914;
      width: 8.125rem;
      height: 3rem;

      border: none;
      color: #fff;

      font-size: 1.4rem;
    }
  }
`;
