const InteractiveImage = props => {
  return (
    <picture>
      <source
        srcSet="./images/desktop/image-interactive.jpg"
        media="(min-width: 768px)"
      />
      <img
        src="./images/mobile/image-interactive.jpg"
        alt=""
        className="object-cover mb-12 max-h-[224px]
        md:max-h-[350px] md:w-[689px] md:object-top
        lg:max-h-[500px] lg:w-[731px] lg:mb-0"
      />
    </picture>
  );
};

export default InteractiveImage;
