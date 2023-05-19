import Title from './Title/Title';
import Socials from './Socials/Socials';
import Footer from '../Footer/Footer';

import './Home.css';

function Home() {
  return (
    <div className="home">
      <Socials />
      <Title />
      <Footer />
    </div>
  );
}

export default Home;
