import React from 'react'
import JoinForm from '../components/Form/Form'
import { Col, Container, Row } from 'react-bootstrap'
import { Footer } from '../components/Footer/Footer'


export const Join = () => {
  return (
    <>
    <Container className='jointitle'>
      <Row>
      <Col>
      <h1 className='join'>  Join the </h1><h1 className="join1">fun.</h1>
    
      </Col>
      <Col >
      <JoinForm/>
      </Col>
      </Row>
    </Container>
    <Footer />
    </>
  )
}
