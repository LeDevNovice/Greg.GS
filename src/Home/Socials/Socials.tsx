import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

import './Socials.css';

function Socials() {
  return (
    <section className="home_socials">
      <FontAwesomeIcon className="home_socials-icon" icon={faGithub} />
      <FontAwesomeIcon className="home_socials-icon" icon={faLinkedin} />
      <FontAwesomeIcon className="home_socials-icon" icon={faTwitter} />
    </section>
  );
}

export default Socials;
