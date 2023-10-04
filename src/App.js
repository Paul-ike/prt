import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Menu from './components/Menu/Menu';
import Socials from './components/Socials/Socials';
import About from './components/About/About';


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Socials />} />
        </Routes>
    </Router>
  );
}

export default App;
