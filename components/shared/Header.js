import React from 'react';
import Link from 'next/link';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import auth0 from "../../services/auth0"

const NavLink = (props) => {
  const { route, title } = props;

  return (
    <Link href= {route}>
      <a className="nav-link port-navbar-link"> {title} </a>
    </Link>
  )
}

const Login = () => {
  return (
    <span onClick={auth0.login} className="nav-link port-navbar-link clickable"> Login </span>
  )
}

const Logout = () => {
  return (
    <span onClick={auth0.logout} className="nav-link port-navbar-link clickable"> Logout </span>
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
    const { isAuthenticated } = this.props;

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
              { !isAuthenticated &&
                <NavItem className="port-navbar-item">
                  <Login />
                </NavItem>
              }
              { isAuthenticated &&
                <NavItem className="port-navbar-item">
                  <Logout />
                </NavItem>
              }
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;