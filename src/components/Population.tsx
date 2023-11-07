import { ScatterChart, Scatter, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { Data } from "../data/data";


const Population = ({ data }: { data: Data[] }) => {
  return (
		<>
			<h1 className='font-bold'>Población</h1>
			<p className='m-6'>
				La población de Argentina se encuentra mayormente concentrada en la
				provincia de Buenos Aires, la cual alberga a una gran proporción de la
				población total del país. Esta concentración poblacional tiene un
				impacto significativo en Argentina, ya que la provincia de Buenos Aires
				es un centro económico y político clave. Esta concentración puede
				generar desafíos en términos de infraestructura, servicios públicos y
				desarrollo regional, ya que otras provincias pueden enfrentar
				dificultades para competir en términos de recursos y atención
				gubernamental. Además, la distribución desigual de la población puede
				influir en las decisiones políticas y la representación en el gobierno
				nacional.
			</p>
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