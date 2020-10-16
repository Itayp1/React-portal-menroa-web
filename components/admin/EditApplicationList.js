import styles from "./index.module.css";
import Application from "./Application";

const Applications = ({ aplicationList }) => (
  <div className={`space ${styles.formbackground} Regular shadow`}>
    {/* {console.log(aplicationList)} */}
    <h1>מערכות פעילות</h1>
    {generateInputForm(aplicationList)}
  </div>
);

const generateInputForm = (aplicationList) => {
  return aplicationList.map(({ openInNewTab, link, icon }, key) => <Application openInNewTab={openInNewTab} link={link} icon={icon} key={key} />);
};
export default Applications;
