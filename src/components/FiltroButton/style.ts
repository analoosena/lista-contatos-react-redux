import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 250px;
  gap: 12px;
  margin-bottom: 12px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 5px 10px 5px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
`;

export const Button = styled.button`
  position: absolute;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #555;
  font-size: 20px;
`;
