import { useState, useEffect } from 'react';

import './Title.css';

function Title() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 1000);
  }, []);

  return (
    <h1 className={`home_title${visible ? '--visible' : ''}`}>
      GREG<span className="home_title--purple">.</span>GS
    </h1>
  );
}

export default Title;
