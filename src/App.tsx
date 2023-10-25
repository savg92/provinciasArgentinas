import './App.css';
import Illiteracy from './components/Illiteracy';
import { data, Data } from './data/data'

function App() {
	return (
		<>
			<div className=' underline dark:text-yellow-400'>hello world!</div>
			<Illiteracy data={data as Data[]} />
		</>
	);
}

export default App;