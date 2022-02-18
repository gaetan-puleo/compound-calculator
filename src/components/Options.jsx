import React from 'react';
import Input from './Input';

export default function Header(props) {
  const {
    percentage, setPercentage, years, setYears, compoundingPerYear, setCompoundingPerYear, amount, setAmount, contributionAmount, setContributionAmount, contributionFrequency, setContributionFrequency,
  } = props;
  return (
    <div className="p-6 bg-gradient-to-r from-green-400 via-emerald-400 to-green-200  lg:col-span-2 items-start rounded-lg w-full box-border lg:h-[200px] flex gap-4 flex-wrap">
      <Input
        label="Durée"
        type="number"
        min={1}
        value={years}
        onChange={(e) => setYears(Number(e.target.value))}
      />

      <Input
        label="Investissements de depart"
        type="number"
        value={amount}
        min={0}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <Input
        label="taux annuel"
        type="number"
        value={percentage}
        onChange={(e) => setPercentage(Number(e.target.value))}
      />
      <Input
        label="Versement régulier"
        type="number"
        value={contributionAmount}
        onChange={(e) => setContributionAmount(Number(e.target.value))}
      />
      <div className="flex gap-2 grow-1 items-start">
        <label className="w-40 text-right inline-flex font-bold justify-end">composé</label>
        <select className="w-full flex h-8 px-2 rounded bg-white" value={compoundingPerYear} onChange={(e) => setCompoundingPerYear(e.target.value)}>
          <option value="1">par an</option>
          <option value="3">par trimestre</option>
          <option value="12">par mois</option>
        </select>
      </div>
      <div className="flex gap-2 grow-1 items-start">
        <label className="w-40 text-right inline-flex font-bold justify-end">
          Frequence de versements
        </label>
        <select
          value={contributionFrequency}
          className="h-8 w-full bg-white rounded"
          onChange={(e) => setContributionFrequency(e.target.value)}
        >
          <option value="1">par an</option>
          <option value="3">par trimestre</option>
          <option value="12">par mois</option>
        </select>
      </div>
    </div>
  );
}
