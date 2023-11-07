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
			<h1 className='font-bold'>Analfabetismo</h1>
			<p className='m-6'>
				Cuando un número significativo de estudiantes opta por abandonar
				prematuramente la escuela, esto contribuye directamente al aumento de la
				población que no ha recibido una educación completa. Esta situación
				conlleva consecuencias perjudiciales, ya que puede mermar la capacidad
				de las personas para acceder a empleos de calidad, mejorar su calidad de
				vida y contribuir al desarrollo integral de la sociedad.
			</p>
			<LineChart
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
