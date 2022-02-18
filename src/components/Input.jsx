import React from 'react';

export default function input({ label, ...rest }) {
  return (
    <div className="flex gap-2 grow-1 items-start">
      <label
        className="w-40 inline-flex font-bold justify-end text-right"
      >
        {label}
      </label>
      <input
        {...rest}
        className="border w-full h-8 px-2 rounded"
      />
    </div>
  );
}
