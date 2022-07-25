import { useRef } from 'react';

const CreationsCard = props => {
  const linkRef = useRef(null);

  const handleCardClick = e => {
    linkRef.current.click();
  };

  const handleKeyDown = e => {
    e.key === 'Enter' && handleCardClick();
  };

  return (
    <div
      className={`
        card-active relative justify-self-center cursor-pointer duration-[400ms]
        bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,60.19%)]
      `}
      aria-label="Click to view creation."
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      tabIndex="0"
    >
      <h3
        className={`
          uppercase font-heading font-light max-w-[9ch] duration-[400ms]
          text-[1.5rem] leading-6 text-white absolute left-5 bottom-5
          lg:left-10 lg:bottom-8 lg:text-[2rem] lg:leading-8
          ${props.className}
        `}
      >
        {props.text}
      </h3>
      <picture>
        <source
          srcSet={`./images/desktop/image-${props.src}.jpg`}
          media="(min-width: 1440px)"
        />
        <img
          src={`./images/mobile/image-${props.src}.jpg`}
          alt=""
          className="w-[min(100%,327px)] h-[120px] object-cover relative -z-10
          md:w-full lg:h-[450px]"
        />
      </picture>
      <a
        href={props.link}
        aria-hidden
        ref={linkRef}
        target="_blank"
        tabIndex="-1"
      />
    </div>
  );
};

export default CreationsCard;
