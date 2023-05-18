import { useState, useEffect } from 'react';

import './Title.css';

function Title() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Set the visibility to true after a short delay to trigger the animation
    setTimeout(() => {
      setVisible(true);
    }, 1000); // Adjust the delay as needed
  }, []);

  return (
    <h1 className={`home_title${visible ? '--visible' : ''}`}>
      GREG<span className="home_title--purple">.</span>GS
    </h1>
  );
}

export default Title;
