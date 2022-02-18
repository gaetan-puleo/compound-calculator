import React from 'react';

export default function Table(props) {
  const { data } = props;
  return (
    <div className="flex bg-white rounded-lg p-6">
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-gray-400 px-2">Année</th>
            <th className="text-gray-400 px-2">Valeur totale</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ amount, year }) => (
            <tr key={amount + year} className="border-b border-slate-200">
              <td className="px-2">{year}</td>
              <td className="px-2">
                {amount.toFixed(2)}
                {' '}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
