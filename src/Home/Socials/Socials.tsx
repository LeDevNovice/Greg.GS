import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

import './Socials.css';

const SOCIALS_DELAY = 6000;
const FIRST_SOCIAL_DELAY = 6500;
const SECOND_SOCIAL_DELAY = 7000;
const THIRD_SOCIAL_DELAY = 7500;

function Socials(): JSX.Element {
  const [visibleSocials, setVisibleSocials] = useState(false);
  const [visibleFirstSocial, setVisibleFirstSocial] = useState(false);
  const [visibleSecondSocial, setVisibleSecondSocial] = useState(false);
  const [visibleThirdSocial, setVisibleThirdSocial] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVisibleSocials(true);
    }, SOCIALS_DELAY);

    setTimeout(() => {
      setVisibleFirstSocial(true);
    }, FIRST_SOCIAL_DELAY);

    setTimeout(() => {
      setVisibleSecondSocial(true);
    }, SECOND_SOCIAL_DELAY);

    setTimeout(() => {
      setVisibleThirdSocial(true);
    }, THIRD_SOCIAL_DELAY);
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
