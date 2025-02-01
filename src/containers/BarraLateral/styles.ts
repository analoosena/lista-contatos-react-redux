import styled from "styled-components";

export const ContainerBarra = styled.div `
  background-color: #282120;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh
`
export const Botao = styled.button`
  background-color: #fad02c;
  padding: 12px;
  border: none;
  border-radius: 5px;
  color: #000;
  font-size: 16px;
  cursor: pointer;
  margin-top: 24px;
  margin-bottom: 24px;
  width: 80%;
  font-family:"Liter", serif;
`
export const Filtros = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 12px;
  margin-top: 16px;
`;