import Title from './Title/Title';

import './Home.css';
import Socials from './Socials/Socials';

function Home() {
  return (
    <div className="home">
      <Socials />
      <Title />
    </div>
  );
}

export default Home;
