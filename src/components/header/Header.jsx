import Nav from './Nav';
import Hero from './Hero';

const Header = props => {
  return (
    <header className="h-[650px] bg-[url(./images/mobile/image-hero.jpg)] bg-no-repeat bg-cover text-white">
      <div className="container">
        <Nav />
        <Hero />
      </div>
    </header>
  );
};

export default Header;
