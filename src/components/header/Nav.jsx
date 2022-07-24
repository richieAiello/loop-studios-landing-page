import logo from '../../assets/logo.svg';
import Hamburger from './Hamburger';
import NavMenu from './NavMenu';

const Nav = props => {
  return (
    <nav className="pt-6 mb-[10.25rem] flex justify-between items-center">
      <img src={logo} alt="" className="h-6" />
      <Hamburger />
      <NavMenu />
    </nav>
  );
};

export default Nav;
