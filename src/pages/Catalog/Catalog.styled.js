import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 50px 128px 150px 128px;
`;

export const CatalogButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
  margin-left: 20px;

  &:hover {
    background-color: #0b44cd;
    transition: 0.5s;
  }
`;

export const PageForm = styled.form`
  margin-top: 20px;

  input {
    width: 50px;
    padding: 5px;
    margin-right: 10px;
    font-size: 14px;
    text-align: center;
    border: 1px solid blue;
    border-radius: 10px;
  }

  button {
    width: 50px;
    padding: 6px 10px;
    background-color: #007bff;
    color: #fff;
    border: 1px solid transparent;
    border-radius: 10px;
    cursor: pointer;
    font-family: Manrope;
    font-size: 16px;
    font-weight: 500;
  }
`;

export const PageInfo = styled.span`
  font-size: 14px;
  margin-top: 10px;
  font-size: 22px;
  font-weight: 700;
  color: black;
`;
