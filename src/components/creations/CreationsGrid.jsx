import CreationsCard from './CreationsCard';

const CreationsGrid = props => {
  return (
    <div
      className="grid gap-y-6 mb-[2.125rem] 
      md:grid-cols-[1fr,1fr] md:col-span-2 md:gap-x-6
      lg:grid-cols-[repeat(4,1fr)] lg:gap-x-[1.875rem]"
    >
      <CreationsCard
        src="deep-earth"
        text="Deep earth"
        link="https://unsplash.com/s/photos/earth"
      />
      <CreationsCard
        src="night-arcade"
        text="Night arcade"
        link="https://unsplash.com/s/photos/arcade"
      />
      <CreationsCard
        src="soccer-team"
        text="Soccer team VR"
        link="https://unsplash.com/s/photos/soccer-team"
      />
      <CreationsCard
        src="grid"
        className="max-w-[7ch]"
        text="The grid"
        link="https://unsplash.com/s/photos/racing"
      />
      <CreationsCard
        src="from-above"
        text="From up above VR"
        link="https://unsplash.com/s/photos/drone-views"
      />
      <CreationsCard
        src="pocket-borealis"
        text="Pocket borealis"
        link="https://unsplash.com/s/photos/borealis"
      />
      <CreationsCard
        src="curiosity"
        text="The curiosity"
        link="https://unsplash.com/s/photos/mars-rover"
      />
      <CreationsCard
        src="fisheye"
        text="Make it fisheye"
        link="https://unsplash.com/s/photos/fisheye"
      />
    </div>
  );
};

export default CreationsGrid;
