import styles from "./index.module.css";
import Application from "./Application";
import { connect } from "react-redux";

const Applications = ({ applicationList, ...rrr }) => (
  <div className={`space ${styles.formbackground} Regular shadow`}>
    <h1>מערכות פעילות</h1>
    {generateInputForm(applicationList)}
  </div>
);

const generateInputForm = (aplicationList) => {
  return aplicationList.map(({ openInNewTab, link, icon }, key) => <Application openInNewTab={openInNewTab} link={link} icon={icon} key={key} />);
};

function mapStateToProps({ applicationList }) {
  return { applicationList };
}

export default connect(mapStateToProps)(Applications);
