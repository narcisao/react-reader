import React from 'react';

import Gm from './gamemaster.gif';


import { Navbar, Nav } from 'react-bootstrap'


const Header = () => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

            <Navbar.Brand href="#home">
                <img
                    alt=""
                    src={Gm}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                React Reader
            </Navbar.Brand>

            <Nav>
                <Nav.Link href="#deets">More deets</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                    Dank memes
                </Nav.Link>
            </Nav>

        </Navbar>
    );
}

export default Header;