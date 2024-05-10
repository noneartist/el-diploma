import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '..'
import { ListGroup, Row, Card } from 'react-bootstrap'

const TypeBar = observer(() => {
    const {device} = useContext(Context)
  return (
    <Row className='d-flex mt-3 me-3'>
        {device.types.map(type =>
            <Card
                style={{cursor: 'pointer'}}
                className='p-3 mb-3 fs-5 bg-light text-dark'
                active={type.id === device.selectedType.id} 
                onClick={() => device.setSelectedType(type)}
                key={type.id}
            >
                {type.name}
            </Card>
        )}
    </Row>
  )
})

export default TypeBar