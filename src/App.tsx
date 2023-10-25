import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';

const App = () => {
	return (
		<>
			<div className='flex'>
				<Header />
				<main className='flex flex-col justify-center items-center mt-6'>
					<Outlet />
				</main>
			</div>
		</>
	);
};

export default App;
