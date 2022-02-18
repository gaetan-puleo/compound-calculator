import './App.css';
import {useState, useMemo} from 'react'
import {compute} from './helpers/compute'
import Options from './components/Options'
import Graph from './components/Graph'
import Table from './components/Table'

function App() {
	const [years, setYears] = useState(20); 
	const [contributionAmount, setContributionAmount] = useState(50); 
	const [contributionFrequency, setContributionFrequency] = useState(12); 
	const [amount, setAmount] = useState(1000); 
	const [percentage, setPercentage] = useState(5); 
	const [compoundingPerYear, setCompoundingPerYear] = useState(1); 
	const arr =  useMemo(() => (new Array(years)).fill(0).map((_,i)=> i + 1), [years])

	const data = useMemo(() => arr.map(year => compute({
					percentage: percentage, 
					years: year,
					startAmount: amount,
					compoundingPerYear, 
					contributionPerAmount: contributionAmount, 
					contributionFrequencyPerYear: contributionFrequency
				})
  ).map((amount,idx) => ({year: idx + 1, amount: amount})), [
		arr, 
		contributionAmount,
		amount, 
		compoundingPerYear,
		percentage,
		contributionFrequency
	])
  return (
 			  <div className="App font-noto bg-slate-900 grid grid-cols-1 lg:grid-rows-[200px_1fr] lg:grid-cols-2 min-h-screen p-8 gap-4 items-start">
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

					<Table data={data}/>
					<div>
						<div className="flex bg-white rounded-lg p-6 overflow-hidden text-slate-700 font-bold text-5xl mb-4">
							{data.at(-1).amount.toLocaleString(undefined, {currency: 'EUR'} )} €
						</div>
						<Graph data={data}/>
					</div>
				</div>
			);
		}

		export default App;
