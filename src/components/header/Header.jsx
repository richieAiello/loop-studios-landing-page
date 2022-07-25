import Nav from './Nav';
import Hero from './Hero';

const Header = props => {
  return (
    <header
      className="h-[650px] mb-24 text-white
      bg-[url(./images/mobile/image-hero.jpg)] bg-no-repeat bg-cover 
      hero:bg-[url(./images/desktop/image-hero.jpg)] hero:bg-center lg:bg-top"
    >
      <div className="container">
        <Nav />
        <Hero />
      </div>
    </header>
  );
};

export default Header;
