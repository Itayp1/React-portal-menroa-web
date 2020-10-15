import styles from "./index.module.css";
import InputField from "./InputField";
const FormInput = ({ text, fontSize, fontColor }) => (
  <div className={`space ${styles.formbackground}`}>
    <h1>כותרת משנית</h1>
    <div className="row">
      <InputField text="כותרת" currentValue={text} />
      <InputField text="גולד פונט" currentValue={fontSize} />
      <InputField text="צבע פונט" currentValue={fontColor} />
    </div>
  </div>
);

export default FormInput;
