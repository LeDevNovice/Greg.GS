import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Home/Home';

function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<h1>Hello World About</h1>} />
        <Route path='/projects' element={<h1>Hello World Projects</h1>} />
        <Route path='/publications' element={<h1>Hello World Publications</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
