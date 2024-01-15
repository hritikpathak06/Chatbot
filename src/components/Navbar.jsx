import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  const [isMobile, setMobile] = useState(false);

  const handleToggle = () => {
    setMobile(!isMobile);
  };
  return (
    <>
      <NavbarWrapper>
        <div className="logo">LOGO</div>
        <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="/">
            <li>About</li>
          </NavLink>
          <NavLink to="/login">
            <li>Login</li>
          </NavLink>
          <NavLink to="/register">
            <li>Register</li>
          </NavLink>
        </ul>
        <button className="mobile-menu-icon" onClick={handleToggle}>
          {isMobile ? "☰" : "☰"}
        </button>
      </NavbarWrapper>
    </>
  );
};

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 75px;
  width: 100vw;
  background: linear-gradient(20deg, black, blue, gray);
  color: white;
  .logo {
    font-size: 30px;
    @media screen and (max-width: 700px) {
      display: flex;
      justify-content: space-between;
      position: absolute;
      top: 15px;
      left: 35px;
    }
  }
  .nav-links {
    display: flex;
    justify-content: flex-end;
    list-style: none;
    width: 75%;
    > a {
      text-decoration: none;
      color: #fff;
      font-size: 20px;
      padding: 10px 20px;
      margin: 0 10px;
      cursor: pointer;
    }
    @media screen and (max-width: 700px) {
      display: none;
    }
  }
  .mobile-menu-icon {
    display: none;
    position: absolute;
    right: 2rem;
    background-color: none;
    border: none;
    background-color: transparent;
    font-size: 2rem;
    cursor: pointer;
    @media screen and (max-width: 700px) {
      display: block;
    }
  }
  .nav-links-mobile {
    position: absolute;
    display: block;
    list-style: none;
    background: linear-gradient(20deg, black, blue, gray);
    left: 0;
    top: 75px;
    width: 100%;
    transition: all 0.5s ease-out;
    z-index: 999;

    > a {
      color: white;
      text-align: center;
      text-decoration: none;
      padding: 32px;
      width: 100%;
      transition: all 0.5s;
    }
  }
`;

export default Navbar;
