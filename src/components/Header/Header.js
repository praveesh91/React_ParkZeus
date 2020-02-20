import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Nav,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Badge,
  InputGroup, 
  InputGroupAddon, 
  InputGroupText, 
  Input
} from 'reactstrap';
import HeaderProfileDropdown from './HeaderProfileDropdown';
import HeaderAlertDropdown from './HeaderAlertDropdown'

class Header extends Component {

  constructor(props) {
    super(props);
  }

  sidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-hidden');
  }

  sidebarMinimize(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-minimized');
  }

  mobileSidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-mobile-show');
  }

  render() {
    return (
      <header className="app-header navbar">
        <NavbarToggler className="d-lg-none" onClick={this.mobileSidebarToggle}>
          <span className="navbar-toggler-icon"></span>
        </NavbarToggler>
        <NavbarBrand href="#"></NavbarBrand>
        <span className="d-md-down-none">ParkZeus</span>
        <NavbarToggler className="d-md-down-none" onClick={this.sidebarToggle}>
          <span className="fa fa-align-left"></span>
        </NavbarToggler>
        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <InputGroup>
              <Input placeholder="Search" className="search-width" /><i className="fa fa-search search-pos"></i>
            </InputGroup>
          </NavItem>
        </Nav>
        <Nav className="ml-auto right-links" navbar>
            <Nav>
              <NavItem className="align-self-center">Last Login</NavItem>
            </Nav>
            <Nav>
              <NavItem className="align-self-center">
                <HeaderAlertDropdown/>
              </NavItem>
              <NavItem className="d-md-down-none align-self-center">
                <NavLink href="#"><i className="icon-bell"></i></NavLink>
              </NavItem>
              {/* <NavItem className="d-md-down-none">
                <NavLink href="#"><i className="icon-list"></i></NavLink>
              </NavItem>
              <NavItem className="d-md-down-none">
                <NavLink href="#"><i className="icon-location-pin"></i></NavLink>
              </NavItem> */}
              <HeaderProfileDropdown/>
            </Nav>
        </Nav>
      </header>
    );
  }
}

export default Header;
