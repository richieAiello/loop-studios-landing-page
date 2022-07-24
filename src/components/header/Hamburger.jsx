const Hamburger = props => {
  return (
    <button
      type="button"
      className={`
        hamburger relative cursor-pointer h-4 w-5
        ${props.className}
        md:hidden
      `}
      aria-label="Click to open navigation menu."
      onClick={props.onClick}
    />
  );
};

export default Hamburger;
