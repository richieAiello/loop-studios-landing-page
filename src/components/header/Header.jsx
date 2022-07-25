import Nav from './Nav';
import Hero from './Hero';

const Header = props => {
  return (
    <header
      className="hero h-[650px] mb-24 text-white
        bg-no-repeat bg-cover hero:bg-center 
        hero:bg-[rgba(0,0,0,.35)] hero:bg-blend-multiply md:mb-32
        lg:bg-top lg:mb-40"
    >
      <div className="container">
        <Nav />
        <Hero />
      </div>
    </header>
  );
};

export default Header;
