import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

import './Socials.css';

function Socials() {
  const [visibleSocials, setVisibleSocials] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVisibleSocials(true);
    }, 6000);
  }, []);

  return (
    <section className={`home_socials${visibleSocials ? '--visible' : ''}`}>
      <FontAwesomeIcon className="home_socials-icon" icon={faGithub} />
      <FontAwesomeIcon className="home_socials-icon" icon={faLinkedin} />
      <FontAwesomeIcon className="home_socials-icon" icon={faTwitter} />
    </section>
  );
}

export default Socials;
