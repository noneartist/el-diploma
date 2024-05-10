import React from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import { NavLink, useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts'


const Auth = () => {

  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE

  return ( 
    <Container 
      className='d-flex justify-content-center align-items-center'
      style={{height: window.innerHeight - 54}}
    >
      <Card style={{width: 600}} className='p-5'>
        <h2 className='m-auto'>{isLogin ? 'Login' : 'Registration'}</h2>
        <Form className='d-flex flex-column'>
          <Form.Control
            className='mt-4'
            placeholder='Enter your email'
          />
          <Form.Control
            className='mt-4'
            placeholder='Enter your password'
          />
          <Row className='d-flex flex-row justify-content-between mt-4'>
            {isLogin ? 
            <div>
              No account? <NavLink to={REGISTRATION_ROUTE}>Register</NavLink>
            </div> 
            :
            <div>
              Have account? <NavLink to={LOGIN_ROUTE}>Login</NavLink>
            </div>
            }
            <Button variant='outline-success'>
               {isLogin ? 'Login' : 'Registration'}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  )
}

export default Auth