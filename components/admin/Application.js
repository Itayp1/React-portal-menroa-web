import InputField from "./FormComponent/InputField";
import Select from "./FormComponent/Select";
import styles from "./index.module.css";
import { connect, useDispatch } from "react-redux";
import { removeApplication } from "../../redux/actions/admin";

const Application = ({ link, icon, openInNewTab }) => {
  const dispatch = useDispatch();
  return (
    <div className="row">
      <InputField text="כתובת האתר" currentValue={link} />
      <InputField text="איקון" currentValue={icon} />
      <Select text="פתיחת הקישור" currentValue={openInNewTab} />

      <div className={`col-md-2 ${styles.buttonposition}`}>
        <button type="button" onClick={() => dispatch(removeApplication({ link }))} className="btn btn-danger">
          מחק
        </button>
      </div>
    </div>
  );
};

export default Application;
// function mapStateToProps({ searchBar }) {
//     return searchBar;
//   }

//   export default connect(mapStateToProps)(SearchEngineInput);
