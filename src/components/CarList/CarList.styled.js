import styled from "styled-components";

export const Container = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  flex-wrap: wrap;
  gap: 40px;
  margin-bottom: 80px;

  @media screen and (min-width: 1440px) {
    width: 1400px;
    gap: 30px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
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

