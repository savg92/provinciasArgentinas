import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import { Data } from '../data/data'

const Doctors_per_cap = ({ data }: { data: Data[] }) => {
  return (
    <>
        <h1 className='font-bold'>Doctores por capital</h1>
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
                dataKey='doctors_per_cap'
                stroke='#82ca9d'
                fill='#82ca9d'
            />
        </LineChart>
    </>
  )
}

export default Doctors_per_cap