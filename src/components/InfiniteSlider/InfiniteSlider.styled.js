import styled from "styled-components";

export const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;  
  margin-top: 60px;
  position: relative;
  width: 100%;
  height: auto;
  overflow: hidden;
`;

export const SliderImage = styled.img`
  width: 950px;
  height: 600px;
  border-radius: 20px;

  @media screen and (max-width: 1200px) {
    width: 750px;
    height: 350px;
  }
`;