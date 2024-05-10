import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'
import { Context } from '..';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { SHOP_ROUTE } from '../utils/consts';
import {observer} from 'mobx-react-lite'

const NavBar = observer( () => {
    const {user} = useContext(Context)
  return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <NavLink style={{color:'white'}} to={SHOP_ROUTE}>TechStore</NavLink>
          {user.isAuth ? 
            <Nav className="ml-auto" >
                <Button variant='light'>Admin</Button>
                <Button variant='light' className="ms-2">Logout</Button>
            </Nav>
          :
            <Nav className="ml-auto" >
                <Button variant='light' onClick={() => user.setIsAuth(true)}>Login</Button>
            </Nav>
          }
        </Container>
      </Navbar>
  )
})

export default NavBar