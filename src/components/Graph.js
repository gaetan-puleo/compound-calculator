import { CartesianGrid, XAxis, YAxis, Tooltip, AreaChart, Area, ResponsiveContainer } from 'recharts';
export default function Graph (props) {
	const {data} = props;
	return (
		<div className="flex bg-white rounded-lg p-6 ">
			<ResponsiveContainer height={300}>
				<AreaChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
					<Area type="monotone" dataKey='amount'  stroke="#8884d8" />
					<CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
					<XAxis dataKey="year" />
					<YAxis />
					<Tooltip />
				</AreaChart>
			</ResponsiveContainer>
		</div>
	) 
}
