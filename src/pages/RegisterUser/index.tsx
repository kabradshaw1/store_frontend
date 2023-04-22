import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import axiosIstance from '../../utils/axios';

type Inputs = {
  email: string,
  password: string,
  confirmPassword: string,
}

export default function RegisterUser() {
  const navigate = useNavigate()
  const [message, setMessage] = useState("");

  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email is invalid'),
    password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters').max(40, 'Password must not exceed 40 characters'),
    confirmPassword: Yup.string().required('Confirm Password is required').oneOf([Yup.ref('password')], 'Confirm Password does not match'),
  })

  const { register, handleSubmit, formState:{errors} } = useForm<Inputs>(
    {resolver: yupResolver(validationSchema)}
  );

  const formSubmit: SubmitHandler<Inputs> = data => {
    axiosIstance
      .post('auth/register/',
        {
          email: data.email,
          password: data.password,
          username: data.email
        }
      )
      .then((res) => {
        console.log(res);
        navigate('login');
      })
      .catch((err) => {
        setMessage(err.response.data.detail.toString())
      })
  };

  return (
      <Row>
        <Form noValidate onSubmit={handleSubmit(formSubmit)}>
          <Form.Label><h3>Register</h3></Form.Label>
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
            <Form.Group as={Row} md="3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type='password' {...register('confirmPassword')} className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}/>
              <Form.Control.Feedback className="invalid-feedback">{errors.confirmPassword?.message}</Form.Control.Feedback>
            </Form.Group>
            <Form.Label>{message}</Form.Label>
          </Col>
          <Button type="submit">Submit Form</Button>
        </Form>
      </Row>
  );
}
