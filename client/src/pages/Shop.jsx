import React, { useContext, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import TypeBar from '../components/TypeBar'
import BrandBar from '../components/BrandBar'
import DeviceList from '../components/DeviceList'
import { observer } from 'mobx-react-lite'
import { Context } from '..'
import { fetchBrands, fetchTypes, fetchDevices } from '../http/deviceAPI'
import Pages from '../components/Pages'

const Shop = observer(() => {
  const {device} = useContext(Context)

  useEffect(() => {
      fetchTypes().then(data => device.setTypes(data))
      fetchBrands().then(data => device.setBrands(data))
      fetchDevices(null, null, 1, 2).then(data => {
        device.setDevices(data.rows)
        device.setTotalCount(data.count)

      })
  }, [])

  useEffect(() => {
      fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, 2).then(data => {
        device.setDevices(data.rows)
        device.setTotalCount(data.count)
  })
  }, [device.page, device.selectedType, device.selectedBrand])

  return (
    <Container>
      <Row className='m-2'>
        <Col md={2}>
          <TypeBar />
          <BrandBar />
        </Col>

        <Col md={9}>
          
          <DeviceList />
          <Pages />
        </Col>
      </Row>
    </Container>
  )
})

export default Shop