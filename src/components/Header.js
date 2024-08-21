import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useLocation,NavLink } from 'react-router-dom';


const Header = (props)=>{
  // const location = useLocation();

  

  return(<><Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">User Managerment</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/users" className="nav-link">Manage Users</NavLink>
          </Nav>
          <Nav >
            <NavDropdown title="More" id="basic-nav-dropdown" >
              <NavDropdown.Item href="/login">Login</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Log out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar></>)
}

export default Header