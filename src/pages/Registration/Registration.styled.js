import styled from 'styled-components';
import AuthImage from '../../images/img/car.png'
import BackImage from '../../images/img/back-image.PNG'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center; 
  height: 100vh; 
  background-image: url('${BackImage}');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1200px; 
  padding: 40px; 
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: rgba(244, 247, 247, 0.247);
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 30px; 
  color: #fff;
  font-weight: 700;
  font-size: 36px; 
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
`;

export const Label = styled.label`
  margin-bottom: 20px; 
  color: #333;
  font-size: 18px; 
`;

export const Input = styled.input`
  width: 93%;
  padding: 15px; 
  margin-top: 10px; 
  margin-bottom: 20px; 
  border: 2px solid #ccc; 
  border-radius: 6px; 
  font-size: 16px; 
`;

export const Error = styled.span`
  color: red;
  font-size: 16px; 
`;

export const Button = styled.button`
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  width: 200px;
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
  width: 750px;
  height: 450px;
  background-image: url('${AuthImage}');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

