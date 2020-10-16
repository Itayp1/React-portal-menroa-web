import InputField from "./FormComponent/InputField";
import Select from "./FormComponent/Select";
import styles from "./index.module.css";

const Application = ({ link, icon, openInNewTab, mapkey }) => (
  <div className="row" key={mapkey.toString()}>
    <InputField text="כתובת האתר" currentValue={link} />
    <InputField text="איקון" currentValue={icon} />
    <Select text="פתיחת הקישור" currentValue={openInNewTab} />

    <div class={`col-md-2 ${styles.buttonposition}`}>
      <button type="button" onClick={() => console.log("cliked")} class="btn btn-danger">
        מחק
      </button>
    </div>
  </div>
);

export default Application;
