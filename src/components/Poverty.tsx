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

const Poverty = ({ data }: { data: Data[] }) => {
	return (
		<>
			<h1 className='font-bold'>Pobresa</h1>
			<p className='m-6'>
				La interconexión entre la pobreza, la deserción escolar, la
				infraestructura inadecuada y el bajo GDP crea un ciclo perjudicial. La
				falta de inversión en educación conduce a una carencia de profesionales
				y trabajadores capacitados, lo que, a su vez, restringe el crecimiento
				económico y la diversificación de la producción en Las provincias
				genrando altos indices de pobreza.
			</p>
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
					dataKey='poverty'
					stroke='#82ca9d'
					fill='#82ca9d'
				/>
			</AreaChart>
		</>
	);
};

export default Poverty;
