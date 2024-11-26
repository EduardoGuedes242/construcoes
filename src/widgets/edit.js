import React, { useState } from "react";

const Edit = ({ title, placeholder = "", onValueChange }) => {
  const [value, setValue] = useState("");

  const handleChange = e => {
    setValue(e.target.value);
    if (onValueChange) {
      onValueChange(e.target.value);
    }
  };

  return (
    <div>
      <label>{title}</label>
      <input
        type="number"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Edit;
