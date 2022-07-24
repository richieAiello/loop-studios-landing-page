import { useState, useEffect } from 'react';
import logo from '../../assets/logo.svg';
import Hamburger from './Hamburger';
import NavMenu from './NavMenu';
import clsx from 'clsx';
import './nav.css';

const Nav = props => {
  return (
    <nav className="pt-6 mb-[10.25rem] flex justify-between items-center">
      <img
        src={logo}
        alt="Loop Studios logo"
        className="h-6 md:h-max"
      />
      <Hamburger className onClick />
      <NavMenu
        className={clsx({
          flex: true,
          hidden: false,
        })}
      />
    </nav>
  );
};

export default Nav;
