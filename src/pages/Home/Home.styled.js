import styled from "styled-components";
import Image1 from '../../images/img/audi.png'

export const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 60px;
  background-color: #ffffff;

  @media screen and (max-width: 480px) {
    max-width: 480px
    padding: 20px;
  }

  @media screen and (max-width: 768px) {
    padding: 20px;
    max-width: 768px
  }

  @media screen and (min-width: 1200px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 60px;
  }
`;

export const Title = styled.h1`
  font-size: 60px;
  font-weight: 800;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  color: #cdf00a;

  @media screen and (max-width: 768px) {
    margin-top: 90px;
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 30px;
  }
`;

export const SectionOneContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  height: 500px;
  margin: 0 auto;
  background-color: #fff;
  padding: 10px;

  @media screen and (max-width: 1199px) {
    flex-direction: column;
    height: auto;
  }
`;

export const SectionOneText = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1199px) {
    align-items: center;
  }

  @media screen and (min-width: 1200px) {
    margin-right: 30px;
  }
`;

export const SectionOneTitle = styled.h2`
  font-size: 25px;
  font-weight: 800;
  margin-bottom: 30px;

  span {
    color: rgb(7, 87, 236);
  }

  @media screen and (max-width: 768px) {
    margin-top: 90px;
    margin-bottom: 30px;
    font-size: 30px;
  }
`;

export const SectionOneDescription = styled.p`
  width: 400px;
  font-size: 20px;
  line-height: 1.5;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    width: 400px;
    text-align: center;
  }
`;

export const SectionOneImage = styled.img`
  width: 637px;
  height: 402px;
  background-image: url('${Image1}');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const SectionTwoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  margin-top: 50px;
  justify-content: space-between;
  max-width: 1200px;
  background: linear-gradient(180deg, rgba(117,14,219,1) 0%, rgba(227,235,53,0.9192051820728291) 0%, rgba(255,255,255,1) 100%);
  box-shadow: 10px 12px 14px -6px rgba(0,0,0,0.75);
  padding: 30px;
  border-radius: 20px;

  @media screen and (max-width: 768px) {
    max-width: 480px;
    flex-direction: column;
    height: auto;
  }

  @media screen and (max-width: 1199px) {
    max-width: 768px;
  }
`;

export const SectionTwoText = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1200px) {
    align-items: center;
    text-align: center;
  }
`;

export const SectionTwoTitle = styled.h2`
  font-size: 30px;
  font-weight: 800;
  margin-bottom: 30px;
`;

export const SectionTwoDescription = styled.p`
  width: 350px;
  font-size: 20px;
  line-height: 1.5;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    width: 650px;
  }

  @media screen and (min-width: 1199px) {
    max-width: 350px;
  }
`;

export const SectionTwoImagesContainer = styled.div`
  width: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;

  @media screen and (max-width: 768px) {
    width: 480px;
  }
`;

export const SectionTwoImage = styled.img`
  width: 337px;
  height: 202px;
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    width: calc(50% - 5px);
  }

  @media screen and (max-width: 480px) {
    width: 320px;
  }

  @media screen and (min-width: 1200px) {
    width: 320px;
  }
`;