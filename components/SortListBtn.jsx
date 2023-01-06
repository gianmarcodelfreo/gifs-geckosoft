import React, { useState } from "react";

function SortSelect({ onChange }) {
  const [value, setValue] = useState("asc");

  const handleChange = (event) => {
    setValue(event.target.value);
    onChange(event.target.value);
  };

  return (
    <div className="sort-select">
      <label htmlFor="sort-select">Ordina per:</label>
      <select value={value} onChange={handleChange} id="sort-select">
        <option value="asc">Crescente</option>
        <option value="desc">Decrescente</option>
      </select>
    </div>
  );
}

export default SortSelect;
