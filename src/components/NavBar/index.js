import React, { useState, useEffect } from 'react';
import { Nav } from './style';
import logo from '../../assets/logo.png';
const NavBar = () => {
  const [darkNav, setDarkNav] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setDarkNav(window.scrollY > 100);
    });
    return () => {
      window.removeEventListener('scroll');
    };
  }, []);
  return (
    <Nav dark={darkNav}>
      <img src={logo} alt='silnoseflix logo' width='50' />{' '}
      <span>SILNOSEFLIX</span>
    </Nav>
  );
};

export default NavBar;
