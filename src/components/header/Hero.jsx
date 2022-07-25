const Hero = props => {
  return (
    <div
      className="border-2 border-white p-4 max-w-[225px] bg-[rgba(0,0,0,.2)]
      sm:max-w-[327px] sm:p-6 md:p-10 md:max-w-[650px]"
    >
      <h1
        className="uppercase max-w-[10ch] text-[1.75rem] leading-[2.375rem] font-heading font-light
        sm:text-[2.5rem] md:text-[4.5rem] md:leading-[4.375rem] md:max-w-[15ch]"
      >
        Immersive experiences that deliver
      </h1>
    </div>
  );
};

export default Hero;
