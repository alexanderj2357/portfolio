import React from 'react';
import Link from 'next/link';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';

const NavLink = (props) => {
  const { route, title } = props;

  return (
    <Link href= {route}>
      <a className="nav-link port-navbar-link"> {title} </a>
    </Link>
  )
}

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar className="port-navbar port-default absolute" color="transparent" dark expand="md">
          <NavbarBrand className="port-navbar-brand" href="/">Alexander Jones</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="port-navbar-item">
                <NavLink route="/" title="Home"/>
              </NavItem>
              <NavItem className="port-navbar-item">
                <NavLink route="/about" title="About"/>
              </NavItem>
              <NavItem className="port-navbar-item">
                <NavLink route="/portfolios" title="Portfolio"/>
              </NavItem>
              <NavItem className="port-navbar-item">
                <NavLink route="/blog" title="Blog"/>
              </NavItem>
              <NavItem className="port-navbar-item">
                <NavLink route="/resume" title="Resume"/>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;