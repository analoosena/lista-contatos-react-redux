import styled from "styled-components";

export const ContainerContato = styled.div`
  border-bottom: 2px solid #ccc;
  margin-top: 32px;
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: space-between;
  h5{
    font-size: 16px;
    font-weight: 400;
  }
  p{
    font-weight: 300;
    font-size: 12px;
  }
`;
export const IconAvatar = styled.div`
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
  svg {
    color: #fad02c;
    font-size: 30px;
  }
`;

export const Botoes = styled.div `
  display: flex;
  gap: 8px;
`
export const BotaoAcao = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: none;

  svg {
    font-size: 20px;
  }
`;
