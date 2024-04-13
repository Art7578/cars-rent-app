import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  margin-top: 60px;
  margin-bottom: 60px;

  @media screen and (min-width: 1440px) {
    width: 1400px;
    gap: 30px;
  }

  @media screen and (max-width: 768px) {
    gap: 20px;
    padding: 0 20px;
    margin-bottom: 60px;
  }

  @media screen and (max-width: 480px) {
    gap: 15px;
    padding: 0 15px;
    margin-bottom: 40px;
  }
`;

export const Text = styled.p`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  margin-top: 200px;
  color: #ff0000;

  @media screen and (min-width: 1440px) {
    font-size: 32px;
    font-weight: 700;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    gap: 20px;
    padding: 0 20px;
    margin-bottom: 60px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

