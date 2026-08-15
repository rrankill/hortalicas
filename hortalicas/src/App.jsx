import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import DetalhesHortalicas from './pages/Detalheshortalicas';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/hortalica/:nome"
          element={<DetalhesHortalicas />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;