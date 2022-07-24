const Hamburger = props => {
  return (
    <button
      type="button"
      className="hamburger"
      aria-label="Click to open navigation menu."
      onClick={props.onClick}
    />
  );
};

export default Hamburger;
