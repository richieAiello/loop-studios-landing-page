import FooterList from './FooterList';
import FooterIcons from './FooterIcons';
import logo from '../../assets/logo.svg';

const Footer = props => {
  return (
    <footer
      className="mt-auto bg-black py-14 text-white font-body font-normal text-center
      md:py-12 md:text-left"
    >
      <div
        className="container flex flex-col items-center  
        md:grid md:grid-cols-[1fr,1fr] md:items-start md:gap-y-4"
      >
        <img
          src={logo}
          alt="Loop Studios logo"
          className="h-6 mb-8 md:h-max md:m-0"
        />
        <FooterList />
        <FooterIcons />
        <p className="opacity-50 justify-self-end">
          © 2021 Loopstudios. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
