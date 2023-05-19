import { useState, useEffect } from 'react';

import './Background.css';

function Background() {
  const [backgroundVisible, setBackgroundVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setBackgroundVisible(true);
    }, 6000);
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
