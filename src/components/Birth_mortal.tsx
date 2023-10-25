import {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from 'recharts';
import { Data } from '../data/data';

const Birth_mortal = ({ data }: { data: Data[] }) => {
	return (
		<>
			<h1 className='font-bold'>Mortalidad por nacimiento</h1>
			<AreaChart
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
				<Area
					type='monotone'
					dataKey='birth_mortal'
					stroke='#82ca9d'
					fill='#82ca9d'
				/>
			</AreaChart>
		</>
	);
};

export default Birth_mortal;
