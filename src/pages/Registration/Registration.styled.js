import styled from 'styled-components';
import AuthImage from '../../images/img/car.png'
import BackImage from '../../images/img/back-image.PNG'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center; 
  height: 105vh; 
  background-image: url('${BackImage}');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media screen and (min-width: 768px) {
    height: 120vh;
  }

  @media screen and (min-width: 1200px) {
    height: 90vh;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%; /* Changed to percentage for responsiveness */
  padding: 40px; 
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: rgba(244, 247, 247, 0.247);

  @media screen and (max-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1200px;
    flex-direction: row; /* For screens wider than 768px, change to row */
    align-items: flex-start; /* Align items to the top */
  }
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 30px; 
  color: black;
  font-weight: 700;
  font-size: 36px; 

  @media screen and (max-width: 480px) {
    font-size: 24px; /* Decrease font size for screens less than 480px */
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%; /* Full width for smaller screens */
  max-width: 500px; /* Added max-width for larger screens */

  @media screen and (min-width: 768px) {
    margin-right: 20px; /* Add margin between form and image */
  }
`;

export const Label = styled.label`
  margin-bottom: 20px; 
  color: #333;
  font-size: 18px; 

  @media screen and (max-width: 768px) {
    font-size: 16px; /* Decrease font size for screens less than 768px */
  }
`;

export const Input = styled.input`
  width: 100%; /* Full width for smaller screens */
  padding: 15px; 
  margin-top: 10px; 
  margin-bottom: 20px; 
  border: 2px solid blue; 
  border-radius: 6px; 
  font-size: 16px; 

  @media screen and (min-width: 768px) {
    width: 93%; /* Decrease width for screens wider than 768px */
  }
`;

export const Error = styled.span`
  color: red;
  font-size: 16px; 

  @media screen and (max-width: 768px) {
    font-size: 14px; /* Decrease font size for screens less than 768px */
  }
`;

export const Button = styled.button`
  width: 200px; /* Full width for smaller screens */
  margin-left: auto;
  margin-right: auto;
  padding: 15px 25px; 
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const Image = styled.div`
  width: 300px;
  height: 200px; /* Set height for the image */
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  background-image: url('${AuthImage}');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media screen and (min-width: 768px) {
    width: 500px; /* Set width for screens wider than 768px */
    height: 300px; /* Set height to fill the container */
  }
`;

