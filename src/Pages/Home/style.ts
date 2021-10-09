import styled from "styled-components";
import background from "../../Assets/background-1.png";
export const ContainerH = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${background});
  background-repeat: no-repeat;
  background-clip: padding-box;
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
