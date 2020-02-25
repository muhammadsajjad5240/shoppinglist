import React, { useState } from 'react';
import { Collapse, Nav, Navbar, NavbarToggler, NavbarBrand, NavItem, NavLink, Container } from 'reactstrap';
const AppNavar = () => {
    const [state, setState] = useState({
        isOpen: false
    })
    const toggle = () => {
        setState({ isOpen: !state.isOpen })
    }
    return (
        <div>
            <Navbar color="dark" dark expand="sm" className="mb-5">
                <Container>
                    <NavbarBrand href="#">Shopping List</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="#">Github</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
export default AppNavar;