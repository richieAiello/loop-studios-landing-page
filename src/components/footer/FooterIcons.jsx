import { ReactComponent as Facebook } from '../../assets/icon-facebook.svg';
import { ReactComponent as Twitter } from '../../assets/icon-twitter.svg';
import { ReactComponent as Pinterest } from '../../assets/icon-pinterest.svg';
import { ReactComponent as Instagram } from '../../assets/icon-instagram.svg';

const FooterIcons = props => {
  return (
    <ul
      className="mb-4 grid grid-cols-[repeat(4,24px)] gap-x-4 items-center
      md:col-start-2 md:row-start-1 md:justify-self-end"
    >
      <li>
        <a
          href="#"
          aria-label="Visit Loop Studios Facebook"
          className="icon-link"
        >
          <Facebook className="icon" />
        </a>
      </li>
      <li>
        <a
          href="#"
          aria-label="Visit Loop Studios Twitter"
          className="icon-link"
        >
          <Twitter className="icon" />
        </a>
      </li>
      <li>
        <a
          href="#"
          aria-label="Visit Loop Studios Pinterest"
          className="icon-link"
        >
          <Pinterest className="icon" />
        </a>
      </li>
      <li>
        <a
          href="#"
          aria-label="Visit Loop Studios Instagram"
          className="icon-link"
        >
          <Instagram className="icon" />
        </a>
      </li>
    </ul>
  );
};

export default FooterIcons;
