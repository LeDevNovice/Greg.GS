import Title from './Title/Title';
import Socials from './Socials/Socials';
import Footer from '../Footer/Footer';
import Background from './Background/Background';

import './Home.css';

function Home(): JSX.Element {
  return (
    <div className="home">
      <Socials />
      <Title />
      <Footer />
      <Background />
    </div>
  );
}

export default Home;
