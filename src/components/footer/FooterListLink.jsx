const FooterListLink = props => {
  return (
    <li>
      <a href="#" className="capitalize custom-underline--footer">
        {props.text}
      </a>
    </li>
  );
};

export default FooterListLink;
