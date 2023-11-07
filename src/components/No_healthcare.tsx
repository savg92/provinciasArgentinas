import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { Data } from '../data/data';

const No_healthcare = ({ data }: { data: Data[] }) => {
	return (
		<>
			<h1 className='font-bold'>Sin atención médica</h1>
			<p className='m-6'>
				Las personas en situaciones de pobreza tienden a enfrentar barreras
				significativas para acceder a atención médica de calidad. Esto puede
				deberse a la falta de recursos para pagar servicios médicos privados, la
				ausencia de instalaciones de salud cercanas o la incapacidad de costear
				medicamentos y tratamientos médicos necesarios. Como resultado, un
				número considerable de personas en estas regiones puede quedar
				desatendida en términos de atención médica preventiva y tratamiento de
				enfermedades.
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
					dataKey={'no_healthcare'}
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
				<YAxis />
			</BarChart>
		</>
	);
};

export default No_healthcare;
