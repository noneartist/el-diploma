import React, { useContext } from 'react'
import { Container, Nav, Navbar, Button } from 'react-bootstrap'
import { Context } from '..'
import { NavLink } from 'react-router-dom'
import { ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts'
import { observer } from 'mobx-react-lite'
import { useHistory } from 'react-router-dom'
import { MDBIcon } from 'mdb-react-ui-kit'

const NavBar = observer( () => {
    const {user} = useContext(Context)
    const history = useHistory()

    const logOut = () => {
      user.setUser({})
      user.setIsAuth(false)
    }

  return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <NavLink className='fs-4' style={{color:'white'}} to={SHOP_ROUTE}>
            TechStore
          </NavLink>
          {user.isAuth ? 
            <Nav className="ml-auto" >

              <MDBIcon 
                className='me-2'
                color='light'
                size='2x'
                icon='tools'
                fixed
                iconType='solid'
                onClick={() => history.push(ADMIN_ROUTE)}
                role='button'
              />

              <MDBIcon 
                className='me-2'
                color='light'
                size='2x'
                icon='sign-out-alt'
                fixed
                iconType='solid'
                onClick={() => logOut()}
                role='button'
              />

              <MDBIcon
                className='me-5'
                color='light'
                size='2x'
                icon='shopping-basket'
                fixed
                iconType='solid'
                onClick={() => history.push(BASKET_ROUTE)}
                role='button'
              />

            </Nav>

          :
              <MDBIcon 
                className='ml-auto'
                color='light'
                size='2x'
                icon='sign-in-alt'
                fixed
                iconType='solid'
                onClick={() => history.push(LOGIN_ROUTE)}
                role='button'
              />
          }

        </Container>
      </Navbar>
  )
})

export default NavBar