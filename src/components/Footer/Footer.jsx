
import { faFacebookF, faFacebookMessenger, faGithub, faInstagram, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faM } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';

const Footer = () => (
  <section className='footer'>
    <ul className='social'>
      <li>
        <a href="https://github.com/khgamal005" className='Github' target="_blank" rel="noreferrer" aria-label="Github"><FontAwesomeIcon icon={faGithub} />
        </a>
      </li>
      <li>
        <a href='https://www.facebook.com/khaled.gamal.1611' className='Facebook' target="_blank" rel="noreferrer" aria-label="Facebook">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
      </li>
      <li>
        <a href='https://www.linkedin.com/in/khaled-gamal-769b02235' className='Linkedin' target="_blank" rel="noreferrer" aria-label="Linkedin">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
      </li>
      <li>
        <a href='https://www.instagram.com/khaledgamal774/' className='Instagram' target="_blank" rel="noreferrer" aria-label="Instagram">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </li>
      <li>
        <a href='mailto:khgamal005@gmail.com' className='Gmail' target="_blank" rel="noreferrer" aria-label="Gmail">
        <FontAwesomeIcon icon={faM} />
        </a>
      </li>
      <li>
        <a href='https://m.me/khaled.gamal.1611/' className='Messenger' target="_blank" rel="noreferrer" aria-label="Messenger">
        <FontAwesomeIcon icon={faFacebookMessenger} />
        </a>
      </li>
      <li>
        <a href='https://wa.me/+20129705511' className='WhatsApp' target="_blank" rel="noreferrer" aria-label="WhatsApp">
        <FontAwesomeIcon icon={faWhatsapp} />
        </a>
      </li>
    </ul>
    <p className='made'>Powered By <span>Khaled Gamal</span></p>
  </section>
);

export default Footer;
