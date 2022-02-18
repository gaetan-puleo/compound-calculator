import { CartesianGrid, XAxis, YAxis, Tooltip, AreaChart, Area, ResponsiveContainer } from 'recharts';
export default function Graph (props) {
	const {data} = props;
	return (
		<div className="flex bg-white rounded-lg p-6 overflow-hidden">
			<ResponsiveContainer height={300}>
				<AreaChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
					<Area type="monotone" dataKey='amount' fill="#34D399"  stroke="#34D399" />
					<CartesianGrid stroke="rgba(0,0,0,0.1)" strokeDasharray="5 5" />
					<XAxis dataKey="year" />
					<YAxis />
					<Tooltip />
				</AreaChart>
			</ResponsiveContainer>
		</div>
	) 
}
