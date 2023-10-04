import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Menu from './components/Menu/Menu';
import Socials from './components/Socials/Socials';
import About from './components/About/About';
import Cakes from './components/Cakes/Cakes';
import Picnics from './components/Picnics/Picnics';


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="cake" element={<Cakes />} />
          <Route path="picnic" element={<Picnics />} />
          <Route path="/contact" element={<Socials />} />
        </Routes>
    </Router>
  );
}

export default App;
