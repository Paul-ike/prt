import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Menu from './components/Menu/Menu';


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Menu />} />
        </Routes>
    </Router>
  );
}

export default App;
