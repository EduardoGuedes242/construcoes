const DropdownTamanhoPlaca = ({ title }) => {
  return (
    <label>
      {title}
      <select>
        <option>120cm x 180cm</option>
        <option>120cm x 160cm</option>
        <option>90Cm x 200cm</option>
      </select>
    </label>
  );
};
export default DropdownTamanhoPlaca;
