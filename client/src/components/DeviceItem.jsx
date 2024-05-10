import React from 'react'
import { Col, Card, Image } from 'react-bootstrap'
import star from '../assets/star.png'
import { useHistory } from 'react-router-dom'
import { DEVICE_ROUTE } from '../utils/consts'
import { MDBIcon } from 'mdb-react-ui-kit'

const DeviceItem = ({device}) => {
  const history = useHistory()
  return (
    <Col 
      md={3} 
      className='mt-3' 
      onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}
    >
        <Card 
          className='border-0' 
          style={{width: 150, 
          cursor: 'pointer'}}
        >
          <Image 
            width={150} 
            height={150} 
            src={'http://localhost:7000/' + device.img} 
          />
          <div className='fs-6 mt-1 d-flex justify-content-between align-items-center'>
            <div className='p-2'>Rating</div>
            <div className='d-flex align-items-center'>
              <div className=''>{device.rating}</div>
                <MDBIcon 
                  className='me-2 mb-1'
                  color='dark'
                  size='lg'
                  icon='star'
                  fixed
                />
            </div> 
          </div>
          <div className='p-2 fs-6'>{device.name}</div>
        </Card>
    </Col>
  )
}

export default DeviceItem