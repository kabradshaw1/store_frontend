import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import authSlice from '../../store/slices/authSlice';
import { useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

type Inputs = {
  email: string,
  password: string,
}

function Login() {
  const navigate = useNavigate()
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email is invalid'),
    password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters').max(40, 'Password must not exceed 40 characters'),
  })

  const { register, handleSubmit, formState:{errors} } = useForm<Inputs>(
    {resolver: yupResolver(validationSchema)}
  );


  const formSubmit: SubmitHandler<Inputs> = data => {
    setLoading(true);
    axios
      .post('http://127.0.0.1:8000/api/auth/login/',
        {
          email: data.email,
          password: data.password
        }
      )
      .then((res) => {
        dispatch(
          authSlice.actions.setAuthTokens({
            token: res.data.access,
            refreshToken: res.data.refresh,
          })
        );
        dispatch(authSlice.actions.setAccount(res.data.user));
        setLoading(false);
        navigate("/");
      })
      .catch((err) =>{
        setLoading(false);
        setMessage(err.response.data.detail.toString())
      })
  }

  return (
      <Form noValidate onSubmit={handleSubmit(formSubmit)}>
        <Form.Label><h3>Login</h3></Form.Label>
        <Col className="mb-3">
          <Form.Group as={Row} md="3">
            <Form.Label>Email</Form.Label>
            <Form.Control type='email' {...register('email')} className={`form-control ${errors.email ? 'is-invalid' : ''}`}/>
            <Form.Control.Feedback className="invalid-feedback">{errors.email?.message}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Row} md="3">
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' {...register('password')} className={`form-control ${errors.password ? 'is-invalid' : ''}`}/>
            <Form.Control.Feedback className="invalid-feedback">{errors.password?.message}</Form.Control.Feedback>
          </Form.Group>
          <Form.Label>{message}</Form.Label>
        </Col>
      <Button type="submit" disabled={loading}>Submit Form</Button>
    </Form>
  )
}
export default Login;