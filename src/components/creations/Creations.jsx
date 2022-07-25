import CreationsGrid from './CreationsGrid';
import CreationsLink from './CreationsLink';

const Creations = props => {
  return (
    <section
      className="container mb-24 grid md:items-center md:mb-32
      md:grid-rows-[auto,auto] md:grid-cols-[1fr,1fr] md:gap-y-12"
    >
      <h2
        className="uppercase font-heading font-light 
        text-[2rem] leading-8 text-center mb-12 
        md:text-left md:mb-0"
      >
        Our Creations
      </h2>
      <CreationsGrid />
      <CreationsLink />
    </section>
  );
};

export default Creations;
