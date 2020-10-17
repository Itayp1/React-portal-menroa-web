const values = { true: "דף נוכחי", false: "דף חדש" };

const SelectInput = ({ text, currentValue }) => (
  <div className="col-1.5">
    <label htmlFor="inputState">{text}</label>
    <select id="inputState" className="form-control">
      <option value>{values[currentValue]}</option>
      <option>{currentValue ? values.false : values.true}</option>
    </select>
  </div>
);

export default SelectInput;
