import React from 'react'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'

const DeviceItem = ({device}) => {
  return (
    <Col md={3}>
        <Card style={{width: 150, cursor: 'pointer'}} border={'ligth'}>
          <Image width={150} height={150} src={device.img} />
          <div>
            <div>Smth</div>
            <div>
              <div>{device.rating}</div>
            </div>
          </div>
        </Card>
    </Col>
  )
}

export default DeviceItem