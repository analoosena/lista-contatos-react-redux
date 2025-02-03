import styled from "styled-components";

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
      border: #fad02c solid 2px;
    }
  }
`;

export const Botoes = styled.div`
  display: flex;
  gap: 8px;
`;
export const BotaoAcao = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: none;

  svg {
    font-size: 20px;
  }
`;
