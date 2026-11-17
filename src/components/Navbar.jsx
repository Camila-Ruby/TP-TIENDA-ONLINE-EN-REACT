import NavbarBootstrap from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import logo from '../assets/logo-the-book-nook.jpeg'

function Navbar() {
    return (
        <NavbarBootstrap
            expand="lg"
            className="barra-navegacion"
            fixed="top"
        >
            <Container>
                <NavbarBootstrap.Brand as={Link} to="/">
                    <img
                        src={logo}
                        alt="The Book Nook - Inicio"
                        className="logo-navbar"
                    />
                </NavbarBootstrap.Brand>

                <Nav className="ms-auto flex-row">
                    <Nav.Link as={Link} to="/">
                        Inicio
                    </Nav.Link>

                    <Nav.Link as={Link} to="/catalogo">
                        Catálogo
                    </Nav.Link>

                    <Nav.Link as={Link} to="/carrito">
                        Carrito
                    </Nav.Link>
                </Nav>
            </Container>
        </NavbarBootstrap>
    )
}

export default Navbar
