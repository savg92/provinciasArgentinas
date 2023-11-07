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
			<p className='m-6'>
				La carencia de infraestructura en una provincia puede desempeñar un
				papel crucial en la relación entre un menor Producto Interno Bruto (PIB)
				y un mayor índice de pobreza. La falta de infraestructura puede limitar
				las oportunidades económicas al dificultar la inversión empresarial, la
				diversificación económica y la creación de empleos bien remunerados.
				Esta limitación a las oportunidades económicas se traduce en un mayor
				índice de pobreza. demás, la falta de infraestructura también puede
				afectar el acceso a servicios básicos, lo que agrava la situación de
				pobreza.
			</p>
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
