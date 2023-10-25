import { Data } from '../data/data';
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from 'recharts';

const Illiteracy = ({ data }: { data: Data[] }) => {
	return (
		<>
			<LineChart
				width={1900}
				height={500}
				data={data}
				margin={{
					top: 10,
					right: 30,
					left: 30,
					bottom: 5,
				}}
			>
				<CartesianGrid strokeDasharray='10 3' />
				<XAxis dataKey='province' />
				<YAxis />
				<Tooltip />
				<Legend />
				<Line
					type='monotone'
					dataKey='illiteracy'
					stroke='#82ca9d'
				/>
			</LineChart>
		</>
	);
};

export default Illiteracy;
