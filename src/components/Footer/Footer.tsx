import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Footer.css'
import Twitter from '../../assets/twitter.svg'
import Facebook from '../../assets/facebook.svg'




export const Footer = () => {
  return (
    
        <Row >
      <Container className='footer fluid '>
        
            <ul>
              <div className="Right">
              <li className='footerLink'><a href="#">About Us</a></li> 
             
              <li className='footerLink'><a href="#">Contact</a></li>
              </div>
              <div className="Left">
              <li className='footerLink'> <a href="#"><img src={Twitter} alt="Twitter Logo" /> Twitter</a></li>
             
              <li className='footerLink'> <a href="#"><img src={Facebook} alt="Twitter Logo" /> Facebook</a></li>
              </div>
            </ul>
            
      </Container>
        </Row>
    
  )
}
