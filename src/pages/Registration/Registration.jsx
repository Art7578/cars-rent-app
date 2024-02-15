import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Navigate } from "react-router-dom";
import { fetchRegister, selectIsAuth } from '../../redux/slices/auth';
import { Title, Container, FormContainer, Form, Label, Input, Error, Button } from './Registration.styled';

const Registration = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  const {
    register, 
    handleSubmit,  
    formState: {errors, isValid}
  } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: ''
    },
    mode: 'onChange'
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchRegister(values));

    if (!data.payload) {
      alert('Failed to login!');
    }
    
    if('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token);
    }
  };

  if (isAuth) {
    return <Navigate to="/"/>
  }
  
  return (
    <Container>
      <Title>Account Creation</Title>
      <FormContainer>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Label>
            Full name
            <Input
              type="text"
              {...register('fullName', {required: 'Enter your fullName'})}
            />
            {errors.fullName && <Error>{errors.fullName.message}</Error>}
          </Label>
          <Label>
            E-Mail
            <Input
              type="email"
              {...register('email', {required: 'Enter your email'})}
            />
            {errors.email && <Error>{errors.email.message}</Error>}
          </Label>
          <Label>
            Password
            <Input
              type="password"
              {...register('password', {required: 'Enter your password'})}
            />
            {errors.password && <Error>{errors.password.message}</Error>}
          </Label>
          <Button disabled={!isValid} type="submit">
            Register
          </Button>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default Registration;
