import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { fetchAuth, selectIsAuth } from "../../redux/slices/auth";
import { Container, FormContainer, Title, Form, Label, Input, Error, Button, Image } from '../Registration/Registration.styled';

const Login = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  const {
    register, 
    handleSubmit, 
    formState: { errors, isValid }
  } = useForm({
    defaultValues: {
      email: '',
      password: ''
    },
    mode: 'onChange'
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchAuth(values));

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
      <Title>Вход в аккаунт</Title>
      <FormContainer>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Label>
            E-Mail
            <Input
              placeholder="E-Mail"
              type="email"
              {...register('email', {required: 'Enter your email'})}
            />
            <Error>{}</Error>
          </Label>
          <Label>
            Password
            <Input  
              placeholder="Password" 
              type="password"
              {...register('password', {required: 'Enter your password'})}
            />
            {errors.password && <Error>{errors.password.message}</Error>}
          </Label>
          <Button disabled={!isValid} type="submit">
            Log in
          </Button>
        </Form>
        <Image/>
      </FormContainer>
    </Container>
  );
};

export default Login;