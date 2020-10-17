import styles from "./index.module.css";
import InputField from "./FormComponent/InputField";
import React, { useState, useEffect } from "react";

import { connect, useDispatch } from "react-redux";
import { editSearchBar } from "../../redux/actions/admin";

const SearchEngineInput = ({ details: { engineSearch, placeHolder } }) => {
  const dispatch = useDispatch();
  const [engineSearchState, setEngineSearch] = useState(engineSearch);
  const [placeHolderState, setPlaceHolder] = useState(placeHolder);

  useEffect(() => {
    dispatch(editSearchBar({ engineSearch: engineSearchState, placeHolder: placeHolderState }));
  }, [engineSearchState, placeHolderState]);

  return (
    <div className={`space ${styles.formbackground} Regular shadow`}>
      <h1>מנוע חיפוש</h1>
      <div className="row">
        <InputField text="כתובת" currentValue={engineSearchState} onchangeValue={onchange(setEngineSearch)} />
        <InputField text="כיתוב בחלונית החיפוש" currentValue={placeHolderState} onchangeValue={onchange(setPlaceHolder)} />
      </div>
    </div>
  );
};

const onchange = (setState) => (value) => setState(value);

function mapStateToProps({ searchBar }) {
  return searchBar;
}

export default connect(mapStateToProps)(SearchEngineInput);
