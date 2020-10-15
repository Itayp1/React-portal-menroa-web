import styles from "./index.module.css";
import InputField from "./InputField";

const SearchEngineInput = ({ text, fontSize, fontColor }) => (
  <div className={`space ${styles.formbackground}`}>
    <h1>מנוע חיפוש</h1>
    <div className="row">
      <InputField text="URL" currentValue={text} />
      <InputField text="placeholder" currentValue={fontSize} />
    </div>
  </div>
);

export default SearchEngineInput;
