import './App.css';
import {useState} from 'react'
import {compute} from './helpers/compute'
import Options from './components/Options'
import { CartesianGrid, XAxis, YAxis, Tooltip, AreaChart, Area, ResponsiveContainer } from 'recharts';

function App() {
	const [years, setYears] = useState(20); 
	const [contributionAmount, setContributionAmount] = useState(50); 
	const [contributionFrequency, setContributionFrequency] = useState(12); 
	const [amount, setAmount] = useState(1000); 
	const [percentage, setPercentage] = useState(5); 
	const [compoundingPerYear, setCompoundingPerYear] = useState(1); 
	const arr = (new Array(years)).fill(0).map((_,i)=> i + 1)
	const data = arr.map(year => compute({
					percentage: percentage, 
					years: year,
					startAmount: amount,
					compoundingPerYear, 
					contributionPerAmount: contributionAmount, 
					contributionFrequencyPerYear: contributionFrequency
				})
  ).map((amount,idx) => ({year: idx + 1, amount: amount}))
  return (
 			  <div className="App bg-gray-600 grid grid-cols-1 lg:grid-cols-2 min-h-screen p-8 gap-6 items-start">
					<Options 
						years={years} 
						setYears={setYears} 
						percentage={percentage} 	
						setPercentage={setPercentage} 
						amount={amount} 
						setAmount={setAmount} 
						compoundingPerYear={compoundingPerYear} 
						setCompoundingPerYear={setCompoundingPerYear}
						contributionAmount={contributionAmount}
						setContributionAmount={setContributionAmount}
						contributionFrequency={contributionFrequency}
						setContributionFrequency={setContributionFrequency}
		/>

					<div className="flex bg-white rounded-lg p-6">
						<table className="w-full">
						<thead>
						<tr>
						<th className="text-gray-400 px-2" >Année</th>
							<th className="text-gray-400 px-2">Valeur totale</th>
						</tr>
								</thead>
						{data.map(({amount,year}) => (
							<tr className="border-b border-slate-200">
								<td className="px-2">{year}</td>
								<td className="px-2">{amount.toFixed(2)}	</td>
							</tr>
						))}
						</table>
					</div>

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

				</div>
			);
		}

		export default App;
