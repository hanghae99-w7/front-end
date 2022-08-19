// Packages import
import { Routes, Route } from 'react-router-dom';

// Components & Elements import
import Landing from './pages/landing/Landing';

function App() {
  return (
    <Routes>
      <Route path={'/'} exact={true} element={<Landing />} />
    </Routes>
  );
}

export default App;
