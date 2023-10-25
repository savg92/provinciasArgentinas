import {
	ScatterChart,
	Scatter,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from 'recharts';
import { Data } from '../data/data';

const Deficient_infra = ({ data }: { data: Data[] }) => {
	return (
		<>
			<h1 className='font-bold'>Deficit de infraestructura</h1>
			<ScatterChart
				width={1200}
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
				<XAxis
					dataKey='province'
					tick={{ fontSize: 8, strokeWidth: 5 }}
					width={100}
					height={20}
					allowDataOverflow={true}
					minTickGap={10}
					interval={0}
				/>
				<YAxis />
				<Tooltip />
				<Legend />
				<Scatter
					type='monotone'
					dataKey='deficient_infra'
					stroke='#FFD700'
				/>
			</ScatterChart>
		</>
	);
};

export default Deficient_infra;
