import { useState, useEffect } from 'react';
import StartMessage from './StartMessage/StartMessage';

import './Title.css';

function Title() {
  const [visibleTitle, setVisibleTitle] = useState(false);
  const [visibleSubtitle, setVisibleSubtitle] = useState(false);
  const [visibleBorder, setVisibleBorder] = useState(false);
  const [minimize, setMinimize] = useState(false);

  // ADD ANOTHER TIMEOUT FOR ANOTHER STATE TO ACTIVE THE OTHER ANIMATIONS IN FUNCTION OF PREVIOUS ONE TIME
  useEffect(() => {
    setTimeout(() => {
      setVisibleTitle(true);
    }, 1000);

    setTimeout(() => {
      setMinimize(true);
    }, 4500);

    setTimeout(() => {
      setVisibleSubtitle(true);
      setVisibleBorder(true);
    }, 6000);
  }, []);

  return (
    <section className="home_title">
      <h1
        className={`home_title-name${visibleTitle ? '--visible' : ''}${
          minimize ? '--minimize' : ''
        }`}
      >
        GREG<span className="home_title--purple">.</span>GS
      </h1>
      <h1 className={`home_title-job${visibleSubtitle ? '--visible' : ''}`}>
        DEV BACK-END<span className="home_title--purple">.</span>JS
      </h1>
      <div
        className={`home_title--border${visibleBorder ? '--visible' : ''}`}
      ></div>
      <StartMessage />
    </section>
  );
}

export default Title;
