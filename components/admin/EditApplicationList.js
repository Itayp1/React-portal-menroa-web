import styles from "./index.module.css";
import Application from "./Application";
import React, { useState, useEffect } from "react";

import { addApplication } from "../../redux/actions/admin";
import { connect, useDispatch } from "react-redux";

const Applications = ({ applicationList }) => {
  const dispatch = useDispatch();

  return (
    <div className={`space ${styles.formbackground} Regular shadow`}>
      <h1>מערכות פעילות</h1>
      {generateInputForm(applicationList)}
      <button type="button" onClick={() => dispatch(addApplication())} className={`btn btn-primary  ${styles.addButton}`}>
        הוספה
      </button>
    </div>
  );
};

const generateInputForm = (aplicationList) => {
  return aplicationList.map(({ openInNewTab, link, icon, text }, index) => <Application openInNewTab={openInNewTab} link={link} icon={icon} key={index} index={index} text={text} />);
};

function mapStateToProps({ applicationList }) {
  return { applicationList };
}

export default connect(mapStateToProps)(Applications);
