import { ScatterChart, Scatter, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { Data } from "../data/data";


const Population = ({ data }: { data: Data[] }) => {
  return (
		<>
			<h1 className='font-bold'>Población</h1>
			<ScatterChart
				width={1200}
				height={500}
				data={data}
				margin={{
					top: 10,
					right: 30,
					left: 50,
					bottom: 5,
				}}
			>
				<CartesianGrid strokeDasharray='10 3' />
				<Tooltip />
				<Scatter
					dataKey={'pop'}
					fill='#8884d8'
					stroke='#8884d8'
					// barSize={30}
				/>
				<XAxis
					dataKey='province'
					tick={{ fontSize: 8 }}
					width={100}
					height={100}
					// allowDataOverflow={true}
					// minTickGap={100}
					// label='GDP'
					// name=''
					// tickMargin={10}
					interval={0}
				/>
				<YAxis
				// unit={'$'}
				/>
			</ScatterChart>
		</>
	);
}

export default Population