const InteractiveContext = props => {
  return (
    <div
      className="order-2 text-center max-w-[300px] md:max-w-[450px] 
      lg:max-w-none lg:w-[541px] lg:h-[317px] lg:bg-white lg:text-left
      lg:absolute lg:right-0 lg:bottom-0"
    >
      <div className="lg:w-[445px] lg:absolute lg:right-0 lg:bottom-0">
        <h2
          className="mb-4 font-heading font-light uppercase text-[2rem] leading-8
          lg:text-[3rem] lg:leading-[3rem] lg:mb-6"
        >
          The leader in interactive VR
        </h2>
        <p className="text-[rgba(0,0,0,49.94%)] font-body font-normal">
          Founded in 2011, Loopstudios has been producing world-class
          virtual reality projects for some of the best companies
          around the globe. Our award-winning creations have
          transformed businesses through digital experiences that bind
          to their brand.
        </p>
      </div>
    </div>
  );
};

export default InteractiveContext;
