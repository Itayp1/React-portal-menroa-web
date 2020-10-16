const InputField = ({ text, currentValue = "ss" }) => (
  <div class="col-md ">
    <label for="zip">{text}</label>
    <input type="text" class="form-control" value={currentValue} id={text.toString()} />
  </div>
);

export default InputField;
