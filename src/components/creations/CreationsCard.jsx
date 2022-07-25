const CreationsCard = props => {
  return (
    <div
      className={`
        w-[min(100%,327px)] h-[120px]
        bg-no-repeat bg-cover bg-center
        relative justify-self-center
        ${props.className}
      `}
    >
      <h3
        className="uppercase font-heading font-light max-w-[9ch]
        text-[1.5rem] leading-6 text-white absolute left-5 bottom-5"
      >
        {props.text}
      </h3>
    </div>
  );
};

export default CreationsCard;
