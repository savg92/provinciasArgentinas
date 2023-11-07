import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import { Data } from '../data/data'

const Doctors_per_cap = ({ data }: { data: Data[] }) => {
  return (
		<>
			<h1 className='font-bold'>Doctores por capital</h1>
			<p className='m-6'>
				La falta de acceso a atención médica puede llevar a que las enfermedades
				crónicas y las afecciones de salud no se traten a tiempo, lo que puede
				empeorar la salud a largo plazo y aumentar las tasas de mortalidad en
				general.
			</p>
			<LineChart
				width={1100}
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
				<Line
					type='monotone'
					dataKey='doctors_per_cap'
					stroke='#82ca9d'
					fill='#82ca9d'
				/>
			</LineChart>
		</>
	);
}

export default Doctors_per_cap