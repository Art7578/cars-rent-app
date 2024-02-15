import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center; 
  height: 100vh; 
`;

export const FormContainer = styled.div`
  max-width: 500px; 
  width: 100%;
  padding: 40px; 
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
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

