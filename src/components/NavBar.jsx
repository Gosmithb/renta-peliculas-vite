import { NavLink } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
            <Navbar.Brand as={Link} to='/'>
                SuperMovies LA
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='me-auto' id='navbar-items'>
                    <Nav.Link as={Link} to='/'>
                        Inicio
                    </Nav.Link>
                    <Nav.Link as={Link} to='/catalog'>
                        Catalogo
                    </Nav.Link>
                    <NavDropdown title='Peliculas' id='basic-nav-dropdown' className='dropdown'>
                        <NavDropdown.Item as={Link} to='/premieres'>
                            Estrenos
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to='/popular'>
                            Populares
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default NavBar;
