import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';
import { Data } from '../data/data';

const Gdp = ({ data }: { data: Data[] }) => {
	return (
		<>
			<h1 className='font-bold'>Producto Interno Bruto</h1>
			<p className='m-6'>
				Las provincias con un menor PIB suelen presentar un índice de pobreza
				más elevado. Esta relación se debe principalmente al limitado desarrollo
				de oportunidades económicas para los residentes en estas regiones. Esta
				limitación se manifiesta de diversas maneras, como una menor inversión
				empresarial, unamenor diversificación económica o una base industrial
				menos desarrollada. Como consecuencia, la oferta de empleos bien
				remunerados se ve reducida, y la disponibilidad de trabajo se encuentra
				limitada, lo que puede desembocar en una mayor incidencia de la pobreza.
			</p>
			<BarChart
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
				<Tooltip />
				<Bar
					dataKey={'gdp'}
					fill='#8884d8'
					stroke='#8884d8'
					barSize={30}
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
				<YAxis unit={'$'} />
			</BarChart>
		</>
	);
};

export default Gdp;
