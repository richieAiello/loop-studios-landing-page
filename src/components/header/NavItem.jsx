const NavItem = props => {
  return (
    <li>
      <a
        href="#"
        className="uppercase font-heading text-[1.5rem] leading-[1.5625rem] font-light 
        custom-underline relative md:font-body md:capitalize md:font-normal md:text-[0.9375rem]"
      >
        {props.text}
      </a>
    </li>
  );
};

export default NavItem;
