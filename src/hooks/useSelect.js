import React, { useState } from 'react';

export const useSelect = (initialOption, options) => {
  // State del Custom Hook
  const [option, setOption] = useState(initialOption);

  const SelectOptions = () => (
    <select value={option} onChange={e => setOption(e.target.value)}>
      {options.map(option => (
        <option
          key={option.value}
          value={option.value}
          style={{ fontWeight: 'bold' }}
        >
          {option.label}
        </option>
      ))}
    </select>
  );

  return [option, SelectOptions];
};
