import InteractiveContext from './InteractiveContext';
import InteractiveImage from './InteractiveImage';

const Interactive = props => {
  return (
    <section className="container flex flex-col mb-24 items-center">
      <InteractiveContext />
      <InteractiveImage />
    </section>
  );
};

export default Interactive;
