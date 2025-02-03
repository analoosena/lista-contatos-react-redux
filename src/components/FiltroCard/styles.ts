import styled from "styled-components";

type Props = {
  ativo: boolean;
};

export const ContainerFiltroCard = styled.div<Props>`
  background-color: #ffff;
  padding: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Liter", serif;
  font-weight: ${(props) => props.ativo ? 'bold' : 'none'};
  border-radius: 3px;
  background-color: #e8e8e8;
  cursor: pointer;
  border: ${(props ) => (props.ativo ? '2px solid #fad02c' : 'none')};
  p {
    font-size: 14px;
  }
`;
