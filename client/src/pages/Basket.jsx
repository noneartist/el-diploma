import React, { useContext, useEffect, useState } from 'react';
import { Container, Row, Col, Button, Card, Image } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import { fetchBasket, removeFromBasket } from '../http/basketAPI';
import { Context } from '../index';

const Basket = observer(() => {
  const { user } = useContext(Context);
  const [basketDevices, setBasketDevices] = useState([]);

  useEffect(() => {
    fetchBasket().then(data => setBasketDevices(data.basket_devices));
  }, []);

  const removeItem = (deviceId) => {
    removeFromBasket(deviceId).then(() => {
      setBasketDevices(basketDevices.filter(item => item.deviceId !== deviceId));
    });
  };

  return (
    <Container className='mt-3'>
      <Row>
        <Col md={12}>
          <h1>Cart</h1>
          {basketDevices && basketDevices.map(({ id, device }) => (
            <Card key={id} className='mb-3'>
              <Card.Body>
                <Row>
                  <Col md={4}>
                    <Image width={150} height={150} src={'http://localhost:7000/' + device.img} />
                  </Col>
                  <Col md={4}>
                    <h3>{device.name}</h3>
                    <h4>Price: {device.price} USD</h4>
                  </Col>
                  <Col md={4} className='d-flex align-items-center'>
                    <Button variant='outline-danger' onClick={() => removeItem(device.id)}>Delete</Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
});

export default Basket;
