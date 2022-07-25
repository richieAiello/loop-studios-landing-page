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
        className="mb-12 max-h-[224px]"
      />
    </picture>
  );
};

export default InteractiveImage;
