import React, { useContext, useState } from 'react'
import { Button, Dropdown, Modal, Form, Row, Col } from 'react-bootstrap'
// import { fetchBrands, fetchTypes } from '../http/deviceAPI'
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import { createDevice } from '../../http/deviceAPI';

const CreateDevice = observer(({show, onHide}) => {
  
  const {device} = useContext(Context)
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [file, setFile] = useState(null)
  const [info, setInfo] = useState([])

  // useEffect(() => {
  //   fetchTypes().then(data => device.setTypes(data))
  //   fetchBrands().then(data => device.setBrands(data))
  // }, [])

  const addInfo = () => {
    setInfo([...info, {title: '', description: '', number: Date.now()}])
  }
  const removeInfo = (number) => {
    setInfo(info.filter(i => i.number !== number))
  }
  const changeInfo = (key, value, number) => {
    setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
  }
  const selectFile = e => {
    setFile(e.target.files[0])
  }
  const addDevice = () => {
    const formData = new FormData()
    formData.append('name', name)
    formData.append('price', price)
    formData.append('img', file)
    formData.append('brandId', device.selectedBrand.id)
    formData.append('typeId', device.selectedType.id)
    formData.append('info', JSON.stringify(info))
    createDevice(formData).then(data => onHide())
  }

  return (
    <Modal
        show={show}
        onHide={onHide}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add new device
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className='m-2'>
            <Dropdown.Toggle>
              {device.selectedType.name || 'Choose a type'}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {device.types.map(type =>
                <Dropdown.Item 
                  onClick={() => device.setSelectedType(type)} 
                  key={type.id}
                >
                  {type.name}
                </Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className='m-2'>
            <Dropdown.Toggle>
              {device.selectedBrand.name || 'Choose a brand'}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {device.brands.map(brand =>
                <Dropdown.Item 
                  onClick={() => device.setSelectedBrand(brand)} 
                  key={brand.id}
                >
                  {brand.name}
                </Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            value={name}
            onChange={e => setName(e.target.value)} 
            className='m-2'
            placeholder='Enter device name'
            type='text'
          />
          <Form.Control 
            value={price}
            onChange={e => setPrice(Number(e.target.value))}
            className='m-2'
            placeholder='Enter device price'
            type='number'
          />
          <Form.Control 
            className='m-2'
            type='file'
            onChange={selectFile}
          />
          <hr />
          <Button
            className='m-2'
            variant='outline-dark'
            onClick={addInfo}
          >Add new property</Button>

          {info.map(i => 
            <Row className='m-1 mt-3' key={i.number}>
              <Col md={4}>
                <Form.Control 
                  value={i.title}
                  onChange={(e) => changeInfo('title', e.target.value, i.number)}
                  placeholder='Enter property name'
                />
              </Col>
              
              <Col md={4}>
                <Form.Control 
                  value={i.description}
                  onChange={(e) => changeInfo('description', e.target.value, i.number)}
                  placeholder='Enter property description'
                />
              </Col>

              <Col md={4}>
                <Button
                  onClick={() => removeInfo(i.number)}
                  variant='outline-danger'
                >Delete</Button>
              </Col>
            </Row>
          )}

        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-danger' onClick={onHide}>Close</Button>
        <Button variant='outline-success' onClick={addDevice}>Add</Button>
      </Modal.Footer>
    </Modal>
  )
})

export default CreateDevice