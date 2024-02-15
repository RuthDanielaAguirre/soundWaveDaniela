import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Footer } from '../components/Footer/Footer'
import Covers from '../assets/covers.jpg'
import AlbumCard from '../assets/cards/Album-card'
import Cards from '../assets/cards/Cards'

export const Discover = () => {
  return (
    <>
  <Container >
  <Row>
      <Col className='discovertitle'>
      <h1>Discover new Music</h1>
      
      <p>By joining you can benefinit by listening to the latest albums released</p>
  <Cards/>
      
      </Col>
      <Col >
      <img className="covers" src={Covers} alt="music albums covers"></img>
      </Col>
      </Row>
  </Container>
    <Footer />
    </>
  )
}
