import CreationsCard from './CreationsCard';

const CreationsGrid = props => {
  return (
    <div
      className="grid gap-y-6 mb-[2.125rem] 
      md:grid-cols-[1fr,1fr] md:col-span-2 md:gap-x-6"
    >
      <CreationsCard
        className="bg-[url(./images/mobile/image-deep-earth.jpg)] lg:bg-[url(./images/desktop/image-deep-earth.jpg)]"
        text="Deep earth"
      />
      <CreationsCard
        className="bg-[url(./images/mobile/image-night-arcade.jpg)] lg:bg-[url(./images/desktop/image-night-arcade.jpg)]"
        text="Night arcade"
      />
      <CreationsCard
        className="bg-[url(./images/mobile/image-soccer-team.jpg)] lg:bg-[url(./images/desktop/image-soccer-team.jpg)]"
        text="Soccer team VR"
      />
      <CreationsCard
        className="bg-[url(./images/mobile/image-grid.jpg)] lg:bg-[url(./images/desktop/image-grid.jpg)]"
        text="The grid"
      />
      <CreationsCard
        className="bg-[url(./images/mobile/image-from-above.jpg)] lg:bg-[url(./images/desktop/image-from-above.jpg)]"
        text="From up above VR"
      />
      <CreationsCard
        className="bg-[url(./images/mobile/image-pocket-borealis.jpg)] lg:bg-[url(./images/desktop/image-pocket-borealis.jpg)]"
        text="Pocket borealis"
      />
      <CreationsCard
        className="bg-[url(./images/mobile/image-curiosity.jpg)] lg:bg-[url(./images/desktop/image-curiosity.jpg)]"
        text="The curiosity"
      />
      <CreationsCard
        className="bg-[url(./images/mobile/image-fisheye.jpg)] lg:bg-[url(./images/desktop/image-fisheye.jpg)]"
        text="Make it fisheye"
      />
    </div>
  );
};

export default CreationsGrid;
