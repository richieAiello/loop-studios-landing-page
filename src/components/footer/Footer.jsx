import FooterList from './FooterList';
import FooterIcons from './FooterIcons';
import logo from '../../assets/logo.svg';

const Footer = props => {
  return (
    <footer className="bg-black py-14 text-white font-body font-normal text-center">
      <div className="container flex flex-col items-center">
        <img
          src={logo}
          alt="Loop Studios logo"
          className="h-6 mb-8"
        />
        <FooterList />
        <FooterIcons />
        <p className="opacity-50">
          © 2021 Loopstudios. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
