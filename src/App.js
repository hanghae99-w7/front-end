// Packages import
import { Routes, Route } from 'react-router-dom';

// Components & Elements import
import Landing from './pages/landing/Landing';
import Service from './pages/service/Service';


function App() {
  return (
    <Routes>
      <Route path={'/'} exact={true} element={<Landing />} />
      <Route path={'/service'} exact={true} element={<Service />} />
    </Routes>
  );
}

export default App;
