import FooterListLink from './FooterListLink';

const FooterList = props => {
  return (
    <ul
      className="mb-12 grid gap-y-4 md:m-0 
      md:grid-cols-[repeat(5,max-content)] md:gap-x-4 md:col-start-1
      lg:gap-x-8"
    >
      <FooterListLink text="About" />
      <FooterListLink text="Careers" />
      <FooterListLink text="Events" />
      <FooterListLink text="Products" />
      <FooterListLink text="Support" />
    </ul>
  );
};

export default FooterList;
