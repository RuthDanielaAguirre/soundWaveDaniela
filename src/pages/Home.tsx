import React from 'react'
import CircleComponentBlue from '../assets/Circle/Circle'
import Girl from '../assets/landing-page-girl.png'
import { Container, Row, Col, Button } from 'react-bootstrap'

export const Home = () => {
  return (

    <>

          <Container className='home-container'>
      <Row>
        <Col className='uno'>
            <div className="girl-con">

              <img className="girl-image" src={Girl} alt="Girl Image"></img>

            </div>

        </Col>

        <Col>
          <div className="title">
            <h1>Feel the Music</h1>
            <p>Stream over 20 thousand songs with one click.</p>

            <Button variant="primary" type="submit">
              Join Now
            </Button>
          </div>
      </Col>
    </Row >
        </Container>
              <div className="circle circle1"></div>
               <div className="circle circle2"></div>
              <div className="circle circle3"></div>
            
          
    </>
  )
}
