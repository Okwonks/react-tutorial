import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink } from 'mdbreact';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false
        };
        this.onClick = this.onClick.bind(this);
    }
    onClick() {
        this.setState({
            collapse: !this.state.collapse
        })
    }
    render() {
        return (
            <header>
                <Navbar color="indigo" dark expand="md" fixed="top" scrolling>
                    <NavbarBrand href="/">Navbar</NavbarBrand>
                    {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
                    <Collapse isOpen={this.state.collapse} navbar>
                        <NavbarNav className="mr-auto" onClick={this.onClick}>
                            <NavItem>
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/tutorial">Features</NavLink>
                            </NavItem>
                        </NavbarNav>
                        <NavbarNav className="ml-auto">
                            <NavItem>
                                <NavLink className="nav-link" to="https://facebook.com/"></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="https://twitter.com/"></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="https://instagram.com/"></NavLink>
                            </NavItem>
                        </NavbarNav>
                    </Collapse>
                </Navbar>
            </header>
        )
    }
}

export default Header;