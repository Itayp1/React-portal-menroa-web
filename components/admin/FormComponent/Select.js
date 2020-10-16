const values = { true: "דף נוכחי", false: "דף חדש" };
const SelectInput = ({ text, currentValue = "ss" }) => (
  <div class="col-md">
    <label for="inputState">{text}</label>
    <select id="inputState" class="form-control">
      <option selected>{values[currentValue]}</option>
      <option>{currentValue ? values.false : values.true}</option>
    </select>
  </div>
);

export default SelectInput;
