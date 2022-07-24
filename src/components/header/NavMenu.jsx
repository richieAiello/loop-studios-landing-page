import NavItem from './NavItem';

const NavMenu = props => {
  return (
    <div
      className={`
        bg-black h-screen w-screen 
        justify-start items-center 
        absolute top-0 left-0 
        ${props.className}
        md:flex md:bg-transparent md:static
        md:h-max md:w-max
      `}
    >
      <ul
        className="grid gap-y-6 ml-6 
        md:grid-rows-[auto] md:grid-cols-[repeat(5,auto)] md:ml-0 md:gap-x-8"
      >
        <NavItem text="about" />
        <NavItem text="careers" />
        <NavItem text="events" />
        <NavItem text="products" />
        <NavItem text="support" />
      </ul>
    </div>
  );
};

export default NavMenu;
