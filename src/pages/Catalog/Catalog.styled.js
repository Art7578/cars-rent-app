import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 50px 128px 150px 128px;
`;

export const Button = styled.button`
  color: #fff;
  font-family: Manrope;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  padding: 13px;
  border: 1px solid transparent;
  border-radius: 10px;
  background-color: #3470ff;

  &:hover {
    background-color: #0b44cd;
    transition: 0.5s;
  }
`;
