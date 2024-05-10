import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '..'
import { Card, Row, Col } from 'react-bootstrap'

const BrandBar = observer(() => {
    const {device} = useContext(Context)
  return (
    <Row className='d-flex mt-5 me-3'>
        {device.brands.map(brand =>
            <Card
                style={{cursor: 'pointer'}}
                key={brand.id}
                className='p-3 mb-3 fs-5 bg-dark text-light'
                onClick={() => device.setSelectedBrand(brand)}
                border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
            >
                {brand.name}
            </Card>
        )}
    </Row>
  )
})

export default BrandBar