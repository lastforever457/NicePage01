import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Nav, Navbar } from "react-bootstrap";
import { navbarData } from "../../data";
import Navigation from "./Navigation";

function MyNavbar() {
    return (
        <Navbar
            className="px-10 sm:px-20 md:px-30 mx-auto lg:px-40"
            bg="light"
            expand="lg"
            sticky="top"
        >
            <Container>
                <Navbar.Brand href="#">Hikmatilla</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {navbarData &&
                            navbarData.map((nav) => (
                                <Navigation key={nav.id} name={nav.name} />
                            ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;
