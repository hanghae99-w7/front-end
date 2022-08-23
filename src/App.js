// Packages import
import { Routes, Route } from 'react-router-dom';

// Pages
import Landing from './pages/landing/Landing';

import SignIn from './pages/signin/SignIn';
import SignUp from './pages/signup/SignUp';
import Sunglass from './pages/sunglass/Sunglass';
import Glass from './pages/glass/Glass';
import Detail from './pages/detail/Detail';
import Service from './pages/service/Service';

// Shared
import Kakao from './shared/kakao';

function App() {
	return (
		<Routes>
			<Route path={'/'} exact={true} element={<Landing />} />
			<Route path={'/signin'} element={<SignIn />} />
			<Route path={'/signup'} element={<SignUp />} />
			<Route path={'/sunglass'} element={<Sunglass />} />
			<Route path={'/glass'} element={<Glass />} />
			<Route path={'/service'} element={<Service />} />
			<Route path={'/detail/:id'} element={<Detail />} />
			<Route path={'/kakao/callback'} element={<Kakao />} />
		</Routes>
	);
}

export default App;