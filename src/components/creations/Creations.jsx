import CreationsGrid from './CreationsGrid';
import CreationsLink from './CreationsLink';

const Creations = props => {
  return (
    <section className="container mb-24 grid">
      <h2
        className="uppercase font-heading font-light 
        text-[2rem] leading-8 text-center mb-12"
      >
        Our Creations
      </h2>
      <CreationsGrid />
      <CreationsLink />
    </section>
  );
};

export default Creations;
