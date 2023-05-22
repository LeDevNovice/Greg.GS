import { useState, useEffect } from 'react';
import StartMessage from './StartMessage/StartMessage';

import './Title.css';

const ANIMATION_DELAY_FIRST = 1000;
const ANIMATION_DELAY_SECOND = 4500;
const ANIMATION_DELAY_THIRD = 6000;

function Title(): JSX.Element {
  const [visibleTitle, setVisibleTitle] = useState(false);
  const [visibleSubtitle, setVisibleSubtitle] = useState(false);
  const [visibleBorder, setVisibleBorder] = useState(false);
  const [minimize, setMinimize] = useState(false);
  const [keyPressed, setKeyPressed] = useState(false);

  // ADD ANOTHER TIMEOUT FOR ANOTHER STATE TO ACTIVE THE OTHER ANIMATIONS IN FUNCTION OF PREVIOUS ONE TIME
  useEffect(() => {
    const handleKeyDown = () => {
      setKeyPressed(true);
    };

    setTimeout(() => {
      setVisibleTitle(true);
    }, ANIMATION_DELAY_FIRST);

    setTimeout(() => {
      setMinimize(true);
    }, ANIMATION_DELAY_SECOND);

    setTimeout(() => {
      setVisibleSubtitle(true);
      setVisibleBorder(true);
    }, ANIMATION_DELAY_THIRD);

    window.addEventListener('keydown', handleKeyDown);
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
