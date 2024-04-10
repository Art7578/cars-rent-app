import styled from "styled-components";
import Image1 from '../../images/img/11-2-car-picture.png'

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

export const CarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1200px;
  height: 500px;
  margin: 0 auto;
  background-color: white;
  padding: 10px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;


export const CarTitle = styled.h2`
  font-size: 30px;
  font-weight: 800;
  margin-bottom: 30px;

  span {
    color: rgb(7, 87, 236);
  }
`;

export const CarDescription = styled.p`
  width: 400px;
  font-size: 20px;
  line-height: 1.5;
  margin-bottom: 20px;
`;

export const CarImage = styled.img`
  width: 650px;
  height: 250px;
  background-image: url('${Image1}');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
