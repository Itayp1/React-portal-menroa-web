const InputField = ({ text, currentValue, onchangeValue }) => (
  <div className="col-2">
    <label htmlFor={text.toString()}>{text}</label>
    <input type="text" className="form-control" value={currentValue} onChange={(event) => onchangeValue(event.target.value)} id={text.toString()} />
  </div>
);

export default InputField;
