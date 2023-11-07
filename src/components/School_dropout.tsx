import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from 'recharts';
import { Data } from '../data/data';

const School_dropout = ({ data }: { data: Data[] }) => {
	return (
		<>
			<h1 className='font-bold'>Abandono escolar</h1>
			<p className='m-6'>
				En la mayoría de los casos, a medida que el índice de pobreza aumenta,
				también lo hace la tasa de abandono escolar. Esta relación se puede
				explicar por la presión económica que experimentan los estudiantes en
				familias empobrecidas.
				<br />
				En contextos de escasos recursos económicos, los
				estudiantes pueden sentir la necesidad imperante de contribuir al
				ingreso familiar desde temprana edad debido a la situación económica
				precaria en sus hogares. Esta necesidad puede llevarlos a tomar la
				difícil decisión de abandonar la escuela para buscar empleo y así
				contribuir a sostener a sus familias.
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
					dataKey='school_dropout'
					stroke='#82ca9d'
				/>
			</LineChart>
		</>
	);
};

export default School_dropout;
