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
  const [visibleFirstSocial, setVisibleFirstSocial] = useState(false);
  const [visibleSecondSocial, setVisibleSecondSocial] = useState(false);
  const [visibleThirdSocial, setVisibleThirdSocial] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVisibleSocials(true);
    }, 6000);

    setTimeout(() => {
      setVisibleFirstSocial(true);
    }, 6500);

    setTimeout(() => {
      setVisibleSecondSocial(true);
    }, 7000);

    setTimeout(() => {
      setVisibleThirdSocial(true);
    }, 7500);
  }, []);

  return (
    <section className={`home_socials${visibleSocials ? '--visible' : ''}`}>
      <FontAwesomeIcon
        className={`home_socials-icon${visibleFirstSocial ? '--visible' : ''}`}
        icon={faGithub}
      />
      <FontAwesomeIcon
        className={`home_socials-icon${visibleSecondSocial ? '--visible' : ''}`}
        icon={faLinkedin}
      />
      <FontAwesomeIcon
        className={`home_socials-icon${visibleThirdSocial ? '--visible' : ''}`}
        icon={faTwitter}
      />
    </section>
  );
}

export default Socials;
