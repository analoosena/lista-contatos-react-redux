import styled, { createGlobalStyle } from "styled-components";

export const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  font-family: "Montserrat", serif;
  }
`
export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`
export const ListaContainer = styled.main`
  padding: 20px 40px;
  height: 100vh;
  overflow-y: scroll;
  background-color: #e8e8e8;
`;