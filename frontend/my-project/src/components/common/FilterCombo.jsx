import React, { useState } from 'react';

const FilterCombo = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (e) => {
    const value = e.target.value;
    setSelectedOption(value);
    onSelect(value);
  };

  return (
    <select
      value={selectedOption}
      onChange={handleSelect}
      className="appearance-none border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500 transition duration-500 ease-in-out w-full sm:w-1/2 md:w-1/4 lg:w-1/5 xl:w-1/6"
    >
      <option value="">Select an option...</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default FilterCombo;
