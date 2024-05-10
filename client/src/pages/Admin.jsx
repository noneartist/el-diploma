import React, { useState } from 'react'
import { Container, Button } from 'react-bootstrap'
import CreateBrand from '../components/modals/CreateBrand'
import CreateType from '../components/modals/CreateType'
import CreateDevice from '../components/modals/CreateDevice'

const Admin = () => {
  const [brandVisible, setBrandVisible] = useState(false)
  const [typeVisible, setTypeVisible] = useState(false)
  const [deviceVisible, setDeviceVisible] = useState(false)
  return (
    <Container className='d-flex flex-column mt-5'>
      <Button 
        className='mt-3 p-3 bg-dark text-ligth fs-5'
        onClick={() => setTypeVisible(true)}
      >Add type</Button>
      <Button 
        className='mt-3 p-3 bg-dark text-ligth fs-5'
        onClick={() => setBrandVisible(true)}
      >Add brand</Button>
      <Button 
        className='mt-3 p-3 bg-dark text-ligth fs-5'
        onClick={() => setDeviceVisible(true)}
      >Add device</Button>

      <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
      <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
      <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)} />
      
    </Container>

  )
}

export default Admin