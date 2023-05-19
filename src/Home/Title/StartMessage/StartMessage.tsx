import { useState, useEffect } from 'react';

import './StartMessage.css';

function StartMessage() {
  const [visibleStartMessage, setVisibleStartMessage] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVisibleStartMessage(true);
    }, 9000);
  }, []);

  return (
    <div
      className={`home_startMessage${visibleStartMessage ? '--visible' : ''}`}
    >
      <span className="home_startMessage-content">
        Appuyez sur une touche pour continuer...
      </span>
    </div>
  );
}

export default StartMessage;
