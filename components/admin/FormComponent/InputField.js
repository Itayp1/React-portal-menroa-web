const InputField = ({ text, currentValue = "ss" }) => (
  <div className="col-md ">
    <label htmlFor="zip">{text}</label>
    <input type="text" className="form-control" value={currentValue} onChange={() => {}} id={text.toString()} />
  </div>
);

export default InputField;
