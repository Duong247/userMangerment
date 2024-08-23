import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useLocation,NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const Header = (props)=>{
  let navigate = useNavigate();
  // const location = useLocation();

  const handleLogOut = ()=>{
    if(window.confirm("Do you want to log out?")){
        localStorage.removeItem("token");
        toast.success("log out success");
        navigate('/')
      }
      
  }

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
              <NavDropdown.Item disabled={localStorage.getItem("token") ? false:true} onClick={handleLogOut} >Log out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar></>)
}

export default Header