import InputField from "./FormComponent/InputField";
import Select from "./FormComponent/Select";
import styles from "./index.module.css";
import { connect, useDispatch } from "react-redux";
import { removeApplication, editApplication } from "../../redux/actions/admin";
import React, { useState, useEffect } from "react";

const Application = ({ link, icon, text, openInNewTab, idNum }) => {
  const dispatch = useDispatch();

  const [linkState, setLink] = useState(link);
  const [iconState, setIcon] = useState(icon);
  const [textState, setText] = useState(text);
  const [openInNewTabtate, setOpenInNewTab] = useState(openInNewTab);

  useEffect(() => {
    dispatch(editApplication({ link: linkState, icon: iconState, text: textState, openInNewTab: openInNewTabtate, idNum }));
  }, [linkState, iconState, textState, openInNewTabtate]);

  return (
    <div className="row">
      <InputField text="כתובת האתר" currentValue={linkState} onchangeValue={onchange(setLink)} />
      <InputField text="איקון" currentValue={iconState} onchangeValue={onchange(setIcon)} />
      <InputField text="שם" currentValue={textState} onchangeValue={onchange(setText)} />

      <Select text="פתיחת הקישור" currentValue={openInNewTabtate} onchangeValue={onchange(setOpenInNewTab)} />

      <div className={`col-1.5 ${styles.removeButton}`}>
        <button type="button" onClick={() => dispatch(removeApplication({ link, icon, text, openInNewTab, idNum }))} className="btn btn-danger">
          מחק
        </button>
      </div>
    </div>
  );
};
const onchange = (setState) => (value) => setState(value);

function mapStateToProps(props) {
  return props;
}

export default connect(mapStateToProps)(Application);
