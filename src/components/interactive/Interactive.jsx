import InteractiveContext from './InteractiveContext';
import InteractiveImage from './InteractiveImage';

const Interactive = props => {
  return (
    <section className="container flex flex-col mb-24 items-center md:mb-32">
      <InteractiveContext />
      <InteractiveImage />
    </section>
  );
};

export default Interactive;
