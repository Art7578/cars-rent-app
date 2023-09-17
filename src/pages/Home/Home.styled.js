import styled from "styled-components";
import HeroImage from '../../images/img/home-image.jpg'

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-image: url('${HeroImage}');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
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

export const Text = styled.p`
  font-size: 25px;
  font-weight: 700;
  width: 700px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 60px;
  color: #cdf00a;
`;

