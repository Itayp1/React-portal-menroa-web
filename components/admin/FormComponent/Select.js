const values = { false: "דף נוכחי", true: "דף חדש" };

const SelectInput = ({ text, currentValue, onchangeValue }) => (
  <div className="col-1.5">
    <label htmlFor={text.toString()}>{text}</label>
    <select
      value={values[currentValue]}
      id={text.toString()}
      className="form-control"
      onChange={(event) => {
        const value = event.target.value == values.true ? true : false;
        onchangeValue(value);
      }}
    >
      <option>{values.false}</option>
      <option>{values.true}</option>
    </select>
  </div>
);

export default SelectInput;
