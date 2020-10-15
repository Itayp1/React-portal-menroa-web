import styles from "./index.module.css";

import Title from "../../components/Title";
import SubTitle from "../../components/SubTitle";
import SearchBar from "../../components/SearchBar";
import ApplicationList from "../../components/ApplicationList";
import InputField from "../../components/admin/InputField";
import FormInput from "../../components/admin/FormInput";
import SearchEngineInput from "../../components/admin/SearchEngineInput";
import Applications from "../../components/admin/Applications";

import axios from "axios";

const adminPage = (props) => {
  const { searchBar, pageSubTitle, pageTitle, applicationList } = props;
  return (
    <div className="container ">
      <div className="row">
        <div className={styles.flexitem}>
          <FormInput details={pageTitle} />
          <FormInput details={pageSubTitle} />
          <SearchEngineInput details={searchBar} />
          <Applications aplicationList={applicationList} />
        </div>

        <div className={styles.flexitem}>
          <Title pageTitleDetails={pageTitle} />
          <SubTitle pageSubTitleDetails={pageSubTitle} />
          <SearchBar searchBarDetails={searchBar} />
          <ApplicationList applicationListDetails={applicationList} managementView={true} />
        </div>
      </div>
    </div>
  );
};

adminPage.getInitialProps = async (context) => {
  try {
    const { data } = await axios.get("http://localhost:3001/api/PageDetails/entryPage");

    return data;
  } catch (error) {
    console.log(error);

    return {};
  }
};

export default adminPage;
