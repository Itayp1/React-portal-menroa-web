import InputField from "./FormComponent/InputField";
import Select from "./FormComponent/Select";
import styles from "./index.module.css";

const Application = ({ link, icon, openInNewTab }) => (
  <div className="row">
    <InputField text="כתובת האתר" currentValue={link} />
    <InputField text="איקון" currentValue={icon} />
    <Select text="פתיחת הקישור" currentValue={openInNewTab} />

    <div className={`col-md-2 ${styles.buttonposition}`}>
      <button type="button" onClick={() => console.log("cliked")} className="btn btn-danger">
        מחק
      </button>
    </div>
  </div>
);

export default Application;
