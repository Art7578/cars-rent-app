import styled from "styled-components";
import Image1 from '../../images/img/audi.png'

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
`;

export const Title = styled.h1`
  font-size: 60px;
  font-weight: 800;
  margin-top: 10%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  color: #cdf00a;
`;

export const SectionOneContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1200px;
  height: 500px;
  margin: 0 auto;
  background-color: #fff;
  padding: 10px;
`;

export const SectionOneText = styled.div`
  display: flex;
  flex-direction: column;
`;


export const SectionOneTitle = styled.h2`
  font-size: 30px;
  font-weight: 800;
  margin-bottom: 30px;

  span {
    color: rgb(7, 87, 236);
  }
`;

export const SectionOneDescription = styled.p`
  width: 400px;
  font-size: 20px;
  line-height: 1.5;
  margin-bottom: 20px;
`;

export const SectionOneImage = styled.img`
  width: 637px;
  height: 402px;
  background-image: url('${Image1}');
`;

export const SectionTwoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  margin-top: 50px;
  justify-content: space-between;
  width: 1200px;
  height: 500px;
  background: linear-gradient(180deg, rgba(117,14,219,1) 0%, rgba(227,235,53,0.9192051820728291) 0%, rgba(255,255,255,1) 100%);
  box-shadow: 10px 12px 14px -6px rgba(0,0,0,0.75);
  padding: 30px;
  border-radius: 20px;
`;

export const SectionTwoText = styled.div`
  display: flex;
  flex-direction: column;
`;


export const SectionTwoTitle = styled.h2`
  font-size: 30px;
  font-weight: 800;
  margin-bottom: 30px;
`;

export const SectionTwoDescription = styled.p`
  width: 400px;
  font-size: 20px;
  line-height: 1.5;
  margin-bottom: 20px;
`;

export const SectionTwoImagesContainer = styled.div`
  max-width: 700px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const SectionTwoImage = styled.img`
  width: 337px;
  height: 202px;
  border-radius: 10px;
`;

