import { Nav, Navbar, Navlink } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigationbar = () => {
    return (
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll"/>
            <Navbar.Collapse id="navbarScroll">
                <Nav>
                    <Navlink eventKey="1" as ={ Link } to="/">Home</Navlink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigationbar;