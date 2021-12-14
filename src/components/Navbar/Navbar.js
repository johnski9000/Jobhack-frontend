import { useState } from "react";
import { Link } from "react-router-dom";
import Nav, { Logo, Hamburger, Menu, MenuLink } from "./NavBar.styled";
import JHNavBarImg from "./JHNavBar.svg";
import "./Navbar.css";
//if state = logged out
export const Navbar = ({ user, setUser, logOutHandler }) => {
  const [isOpen, setIsOpen] = useState(false);

  return user ? (
    <Nav>
      <Logo>
        <Link to="/find">
          <img src={JHNavBarImg} alt="logo" />
        </Link>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink to="/find">Find</MenuLink>
        <MenuLink to="/manage">Manage</MenuLink>
        <Link to="/">
          <button className="nav-button" onClick={logOutHandler}>
            Log out
          </button>
        </Link>
      </Menu>
    </Nav>
  ) : (
    <Nav>
      <Logo>
        <Link to="/">
          <img src={JHNavBarImg} alt="logo" />
        </Link>
      </Logo>
      <Link to="/signup">
        <button className="nav-button"> Sign up </button>
      </Link>
    </Nav>
  );
};
