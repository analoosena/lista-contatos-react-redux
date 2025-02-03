import styled, { createGlobalStyle } from "styled-components";
import variaveis from "./variaveis";

type Props = {
  ativo: boolean;
};

export const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  font-family: "Montserrat", serif;
  }
  body{
    background-color: ${variaveis.cinzaFundo};
  }
`;
export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`;
export const ListaContainer = styled.main`
  padding: 20px 40px;
  height: 100vh;
  overflow-y: scroll;
  background-color: ${variaveis.cinzaFundo};
`;

export const IconAvatar = styled.div<Props>`
  width: 50px;
  height: 50px;
  background-color: #000;
  color: white;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 30px;
  svg {
    color: ${(props) => (props.ativo ? " #fad02c" : "#fff")};
  }
`;
export const IconAvatarYellow = styled(IconAvatar)`
  svg {
    color: ${variaveis.amarelo};
  }
`;
export const ContainerContato = styled.div`
  border-bottom: 2px solid #ccc;
  margin-top: 32px;
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: space-between;
  h5 {
    font-size: 16px;
    font-weight: 400;
  }
  p {
    font-weight: 300;
    font-size: 12px;
  }
  select,
  input {
    border-radius: 5px;
    font-family: "Roboto Mono", serif;
    border: none;
    outline: none;
    padding: 2px;
    &:focus {
      border: ${variaveis.amarelo} solid 2px;
    }
  }
`;
export const ContainerContatoNv = styled.div`
  display: block;
  padding: 80px 40px;
  width: 80%;

  h1 {
    padding-bottom: 24px;
    font-size: 24px;
  }
  form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 16px;
    margin-bottom: 16px;
  }
  input {
    border-bottom: 1px solid #000;
    border: none;
    outline: none;
    background-color: ${variaveis.cinzaFundo};

    &:focus {
      border-bottom: ${variaveis.amarelo} solid 3px;
    }
    &:hover {
      border-bottom: ${variaveis.amarelo} solid 3px;
    }
  }
  label, option{
    font-size: 14px;
    padding-right: 8px;
    color: ${variaveis.marrom};
    border-radius: 5px;
  }
`;
export const BotaoCadastrar = styled.button`
  background-color: ${variaveis.amarelo};
  padding: 6px;
  border: none;
  border-radius: 5px;
  color: #000;
  font-size: 16px;
  cursor: pointer;
  margin-top: 24px;
  margin-bottom: 24px;
  width: 100%;
  font-family: "Liter", serif;
  &:hover {
    color: #fff;
    font-weight: bold;
  }
`;
