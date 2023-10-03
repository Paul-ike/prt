import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Menu from './components/Menu/Menu';
import Socials from './components/Socials/Socials';


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/contact" element={<Socials />} />
        </Routes>
    </Router>
  );
}

export default App;
