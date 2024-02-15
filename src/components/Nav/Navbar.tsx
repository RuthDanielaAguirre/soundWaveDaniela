
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'
import Logo from '../../assets/logo.png'




function NavBar() {
    return (
      <Navbar expand="lg" className="sm-body- " >
        <Container className='letras' >
          <a className='brand ' href={'/'}>
          <img src={Logo} alt="Soundwave Logo" />
            Soundwave</a>
          
          
          <Navbar id="basic-navbar-nav">
            <Nav className="ms-auto primary">
              <a className='link' href={'/Discover'}>Discover</a>
              <a className='link' href={'/Join'}>Join</a>
              
            </Nav>
          </Navbar>
        </Container>
      </Navbar>
    );
  }
  
  export default NavBar;
