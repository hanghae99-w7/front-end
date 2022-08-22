// Packages import
import { Routes, Route } from 'react-router-dom';

// Components & Elements import
import Landing from './pages/landing/Landing';
import Glass from './pages/glass/Glass';

function App() {
  return (
    <Routes>
      <Route path={'/'} exact={true} element={<Landing />} />
      <Route path={'/glass'} exact={true} element={<Glass />} />
    </Routes>
  );
}

export default App;
