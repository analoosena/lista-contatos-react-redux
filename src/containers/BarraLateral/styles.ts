import styled from "styled-components";
import variaveis from "../../styles/variaveis";

export const ContainerBarra = styled.div`
  background-color: ${variaveis.marrom};
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;
export const Botao = styled.button`
  background-color: ${variaveis.amarelo};
  padding: 12px;
  border: none;
  border-radius: 5px;
  color: #000;
  font-size: 16px;
  cursor: pointer;
  margin-top: 24px;
  margin-bottom: 24px;
  width: 80%;
  font-family: "Liter", serif;
  &:hover {
    color: #fff;
    font-weight: bold;
  }
`;
export const BotaoVoltar = styled(Botao)`
display: flex;
  svg {
    font-size: 30px;
  }
`;
export const Filtros = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 12px;
  margin-top: 16px;
`;
