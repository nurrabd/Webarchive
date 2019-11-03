import React, {Component} from 'react';
import {Navbar,  Nav, NavItem, NavDropdown} from 'react-bootstrap'

class Header extends Component {
    render() {
        return (
            <Navbar bg="" expand="lg" Style="border: outset; background-color: ">

                <Navbar.Brand href="#home" >

                    <div Style="width:300px"></div>
                </Navbar.Brand>

                <Navbar.Collapse id="">
                    <Nav className="mr-auto">



                    </Nav>

                </Navbar.Collapse>

            </Navbar>
        );
    }
}

export default Header;
