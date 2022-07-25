import InteractiveContext from './InteractiveContext';
import InteractiveImage from './InteractiveImage';

const Interactive = props => {
  return (
    <section
      className="container flex flex-col mb-24 items-center 
      md:mb-32 lg:items-start lg:relative lg:mb-[11.5rem]"
    >
      <InteractiveContext />
      <InteractiveImage />
    </section>
  );
};

export default Interactive;
