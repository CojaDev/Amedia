import { NAV_LINKS } from '@/constants';

const Footer = () => {
  return (
    <footer className="footer ">
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <h2 className="text-4xl font-semibold sm:text-left text-center  text-white">
        AMedia<span className="text-orange-500 font-bold">.</span>
      </h2>
      <ul className="menu">
        {NAV_LINKS.map((link) => (
          <li className="menu__item">
            <a
              href={link.href}
              key={link.label}
              draggable="false"
              className="menu__link"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <p>&copy;2024 AMedia | All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
