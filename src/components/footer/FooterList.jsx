import FooterListLink from './FooterListLink';

const FooterList = props => {
  return (
    <ul className="mb-12 grid gap-y-4">
      <FooterListLink text="About" />
      <FooterListLink text="Careers" />
      <FooterListLink text="Events" />
      <FooterListLink text="Products" />
      <FooterListLink text="Support" />
    </ul>
  );
};

export default FooterList;
