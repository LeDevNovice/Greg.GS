import { useState, useEffect } from 'react';

import './Background.css';

const FADE_IN_DELAY = 6000;

function Background() {
  const [backgroundVisible, setBackgroundVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setBackgroundVisible(true);
    }, FADE_IN_DELAY);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <img
      src={require('./background.png')}
      className={`home_background${backgroundVisible ? '--visible' : ''}`}
      alt="drawing in purple contrast of half of the face of the developer Greg GS"
    />
  );
}

export default Background;
