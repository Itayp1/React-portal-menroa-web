import styles from "./index.module.css";
import InputField from "./FormComponent/InputField";

const SearchEngineInput = ({ text, fontSize, fontColor }) => (
  <div className={`space ${styles.formbackground} Regular shadow`}>
    <h1>מנוע חיפוש</h1>
    <div className="row">
      <InputField text="כתובת" currentValue={text} />
      <InputField text="כיתוב בחלונית החיפוש" currentValue={fontSize} />
    </div>
  </div>
);

export default SearchEngineInput;
