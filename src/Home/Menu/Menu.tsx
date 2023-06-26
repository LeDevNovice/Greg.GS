import { Link } from 'react-router-dom';

import './Menu.css';

function Menu() {
  return (
    <div className="home__menu">
      <Link to="/about" className="home__menu-item">A propos</Link>
      <Link to="/projects" className="home__menu-item">Projets</Link>
      <Link to="/publications" className="home__menu-item">Publications</Link>
    </div>
  );
}

export default Menu;
