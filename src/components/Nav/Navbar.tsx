
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Logo from '../../assets/logo.png'




function NavBar() {
    return (
      <Navbar expand="lg" className="sm-body- " >
        <Container className='letras' >
          <Navbar.Brand href={'/'}>
          <img src={Logo} alt="Soundwave Logo" />
            Soundwave</Navbar.Brand>
          
          
          <Navbar id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href={'/Discover'}>Discover</Nav.Link>
              <Nav.Link href={'/Join'}>Join</Nav.Link>
              
            </Nav>
          </Navbar>
        </Container>
      </Navbar>
    );
  }
  
  export default NavBar;
// export const Navbarr = () => {
//     return (
//         <nav>
//             <ul>
//                 <li>
//                     <Link to={'/'} >Home</Link>
//                 </li>
//                 <li>
//                     <Link to={'/about'} >About</Link>
//                 </li>
//                 <li>
//                     <Link to={'/contact'} >Contact</Link>
//                 </li>
//             </ul>
//         </nav>
//     )
//}
