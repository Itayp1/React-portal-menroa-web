import styles from "./index.module.css";
import InputField from "./InputField";

const Applications = ({ aplicationList }) => (
  <div className={`space ${styles.formbackground}`}>
    {/* {console.log(aplicationList)} */}
    <h1>מערכות פעילות</h1>
    {generateInputForm(aplicationList)}
  </div>
);

const generateInputForm = (aplicationList) => {
  return aplicationList.map(({ openInNewTab, link, icon }, key) => (
    <div className="row" key={key.toString()}>
      <InputField text="URL" currentValue={link} />
      <InputField text="icon" currentValue={icon} />
      <InputField text="new Tab" currentValue={openInNewTab} />
    </div>
  ));
};
export default Applications;
