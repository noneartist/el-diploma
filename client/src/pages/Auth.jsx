import React, { useContext, useState } from 'react'
import { Container, Form, Card, Button, Row } from 'react-bootstrap'
import { NavLink, useHistory, useLocation } from 'react-router-dom'
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts'
import { login, registration } from '../http/userAPI'
import { observer } from 'mobx-react-lite'
import { Context } from '../index'


const Auth = observer(() => {
  
  const {user} = useContext(Context)

  const location = useLocation()
  const history = useHistory()
  const isLogin = location.pathname === LOGIN_ROUTE

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const click = async () => {
    try {
      let data
      if (isLogin) {
        data = await login(email, password)
      } else {
        data = await registration(email, password)
      }
      user.setUser(user)
      user.setIsAuth(true)
      history.push(SHOP_ROUTE)
    }
    catch (e) {
      alert(e.response.data.message)
    }

  }

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
            value = {email}
            onChange={e => setEmail(e.target.value)}
            type='email'
          />
          <Form.Control
            className='mt-4'
            placeholder='Enter your password'
            value = {password}
            onChange={e => setPassword(e.target.value)}
            type='password'
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
            <Button 
              onClick={click}
              variant='outline-success'
            >
               {isLogin ? 'Login' : 'Registration'}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  )
})

export default Auth