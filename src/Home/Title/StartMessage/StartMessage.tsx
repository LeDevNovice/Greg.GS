import { useState, useEffect } from 'react';

import './StartMessage.css';

const FADE_IN_DELAY = 9000;

function StartMessage(): JSX.Element {
  const [visibleStartMessage, setVisibleStartMessage] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    setTimeout(() => {
      setVisibleStartMessage(true);
    }, FADE_IN_DELAY);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className={`home_startMessage${visibleStartMessage ? '--visible' : ''}`}
    >
      {screenWidth > 768 ? (
        <span className="home_startMessage-content">
          Appuyez sur une touche pour continuer...
        </span>
      ) : (
        <span className="home_startMessage-content">
          Tapez sur l'écran pour entrer...
        </span>
      )}
    </div>
  );
}

export default StartMessage;
