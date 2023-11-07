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
			<p className='m-6'>
				Uno de los efectos más preocupantes de esta falta de acceso a la
				atención médica es su impacto en las tasas de mortalidad al nacer Las
				mujeres embarazadas y sus bebés son particularmente vulnerables cuando
				no reciben atención médica adecuada durante el embarazo, el parto y el
				período postparto. La falta de atención prenatal puede aumentar el
				riesgo de complicaciones en el parto, lo que a su vez puede resultar en
				un aumento de la mortalidad neonatal y materna.
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
					dataKey='birth_mortal'
					stroke='#82ca9d'
					fill='#82ca9d'
				/>
			</AreaChart>
		</>
	);
};

export default Birth_mortal;
