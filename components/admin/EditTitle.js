import styles from "./index.module.css";
import InputField from "./FormComponent/InputField";
import React, { useState, useEffect } from "react";

import { editTitle, editSubTitle } from "../../redux/actions/admin";
import { connect, useDispatch } from "react-redux";

const FormInput = ({ details: { text, fontSize, fontColor }, field, isSubTitle }) => {
  const dispatch = useDispatch();
  const [textState, setText] = useState(text);
  const [fontSizeState, setsetFontSizeName] = useState(fontSize);
  const [fontColorState, setFontColor] = useState(fontColor);

  useEffect(() => {
    const action = isSubTitle ? editSubTitle : editTitle;
    dispatch(action({ text: textState, fontSize: fontSizeState, fontColor: fontColorState }));
  }, [textState, fontSizeState, fontColorState]);

  return (
    <div className={`space ${styles.formbackground} Regular shadow`}>
      <h1>{field}</h1>

      <div className="row">
        <InputField text="כותרת" currentValue={textState} onchangeValue={onchange(setText)} />
        <InputField text="גולד פונט" currentValue={fontSizeState} onchangeValue={onchange(setsetFontSizeName)} />
        <InputField text="צבע פונט" currentValue={fontColorState} onchangeValue={onchange(setFontColor)} />
      </div>
    </div>
  );
};

const onchange = (setState) => (value) => setState(value);

function mapStateToProps({ pageTitle }) {
  return pageTitle;
}

export default connect(mapStateToProps)(FormInput);
