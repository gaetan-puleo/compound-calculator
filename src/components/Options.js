
import Input from './Input'
export default function Header(props) {
	const {percentage, setPercentage, years, setYears, compoundingPerYear ,setCompoundingPerYear, amount, setAmount, contributionAmount, setContributionAmount, contributionFrequency, setContributionFrequency} = props;
	return <div className="p-6 bg-sky-100 lg:col-span-2 grid grid-cols-2 lg:grid-cols-3 items-start rounded-lg w-full ">
		
				<Input label="Durée" type="number" value={years} onChange={(e) => setYears(Number(e.target.value))}/>
			<Input label="Investissements de depart" type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))}/>
			<Input label="taux annuel" type="number" value={percentage} onChange={(e) => setPercentage(Number(e.target.value))}/>
			<Input label="Versement régulier" type="number" value={contributionAmount} onChange={(e) => setContributionAmount(Number(e.target.value))}/>
			<div className="flex gap-2">
				<label className="w-40 text-right inline-flex font-bold justify-end">composé</label>
				<select value={compoundingPerYear} onChange={(e) => setCompoundingPerYear(e.target.value)}>
					<option value="1">par an</option>
					<option value="3">par trimestre</option>
					<option value="12">par mois</option>
				</select>
		 </div>
			<div className="flex gap-2">
				<label className="w-40 text-right inline-flex font-bold justify-end">Frequence de versements</label>
				<select value={contributionFrequency} onChange={(e) => setContributionFrequency(e.target.value)}>
					<option value="1">par an</option>
					<option value="3">par trimestre</option>
					<option value="12">par mois</option>
				</select>
		 </div>
	</div>
}
