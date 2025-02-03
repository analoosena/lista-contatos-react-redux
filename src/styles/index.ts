import styled, { createGlobalStyle } from "styled-components";

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
    color: ${(props ) => (props.ativo ? ' #fad02c' : '#fff')};
  }
`;
export const IconAvatarYellow = styled(IconAvatar)`
  svg {
    color: #fad02c;
  }
`