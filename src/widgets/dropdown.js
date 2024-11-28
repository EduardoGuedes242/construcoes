import { useState } from "react";

const DropdownTamanhoPlaca = ({ title, onValueSelect }) => {
  const [value, setValue] = useState("");

  const handleChange = e => {
    console.log(e.target.value);
    setValue(e.target.value);
    if (onValueSelect) {
      onValueSelect(e.target.value);
    }
  };

  return (
    <label>
      {title}
      <select onChange={handleChange}>
        <option value={0}> SELECIONE UMA OPCAO </option>
        <option value={1.2 * 2.4}> 1.20 m x 2.40 m </option>
        <option value={1.2 * 1.8}> 1.20 m x 1.80 m </option>
        <option value={1.2 * 1.6}> 1.20 m x 1.60 m </option>
        <option value={0.9 * 2.0}> 0.90 m x 2.00 m </option>
      </select>
    </label>
  );
};
export default DropdownTamanhoPlaca;
