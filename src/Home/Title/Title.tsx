import { useState, useEffect } from 'react';

import './Title.css';

function Title() {
  const [visible, setVisible] = useState(false);
  const [minimize, setMinimize] = useState(false);

  // ADD ANOTHER TIMEOUT FOR ANOTHER STATE TO ACTIVE THE OTHER ANIMATIONS IN FUNCTION OF PREVIOUS ONE TIME
  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 1000);

    setTimeout(() => {
      setMinimize(true);
    }, 4500);
  }, []);

  return (
    <section className="home_title">
      <h1
        className={`home_title-name${visible ? '--visible' : ''}${
          minimize ? '--minimize' : ''
        }`}
      >
        GREG<span className="home_title--purple">.</span>GS
      </h1>
      <h1 className="home_title-job">
        DEV BACK-END<span className="home_title--purple">.</span>JS
      </h1>
      <div className="home_title--border"></div>
    </section>
  );
}

export default Title;
