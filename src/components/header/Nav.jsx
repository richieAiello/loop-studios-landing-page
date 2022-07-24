import { useState, useEffect } from 'react';
import logo from '../../assets/logo.svg';
import Hamburger from './Hamburger';
import NavMenu from './NavMenu';
import clsx from 'clsx';
import './nav.css';

const Nav = props => {
  const [menuVisibility, setMenuVisibility] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);

      animateIn && setAnimateIn(false);
      animateOut && setAnimateOut(false);

      !menuVisibility && setHidden(true);
    }, 400);

    return () => clearTimeout(timer);
  }, [menuVisibility]);

  const handleHamburgerClick = e => {
    setLoading(true);
    setMenuVisibility(!menuVisibility);
    hidden && setHidden(false);
    menuVisibility ? setAnimateOut(true) : setAnimateIn(true);
  };

  const handleLinkClick = e => {
    if (window.innerWidth < 768) {
      handleHamburgerClick();
    }
  };

  return (
    <nav className="pt-10 mb-[10.25rem] flex justify-between items-center">
      <img
        src={logo}
        alt="Loop Studios logo"
        className="h-6 relative z-50 md:h-max"
      />
      <Hamburger
        className={clsx({
          flip: menuVisibility,
        })}
        onClick={handleHamburgerClick}
        disabled={loading}
      />
      <NavMenu
        className={clsx({
          hidden: hidden,
          flex: !hidden,
          'slide-in': animateIn,
          'slide-out': animateOut,
        })}
        onClick={handleLinkClick}
      />
    </nav>
  );
};

export default Nav;
