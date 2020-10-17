import styles from "./index.module.css";
import Title from "../../components/Title";
import SearchBar from "../../components/SearchBar";
import ApplicationList from "../../components/ApplicationList";
import EditTitle from "../../components/admin/EditTitle";
import EditSearchEngine from "../../components/admin/EditSearchEngine";
import EditApplicationList from "../../components/admin/EditApplicationList";
import { connect } from "react-redux";

import { setFetchDetails } from "../../redux/actions/admin";
import fetchDetailsApi from "../../api/fetchDetailsApi";

const adminPage = (props) => {
  const { searchBar, pageSubTitle, pageTitle, applicationList, dispatch } = props;
  return (
    <div className="container-lg">
      <div className="row">
        <div className={styles.flexitem}>
          <EditTitle details={pageTitle} />
          <EditTitle details={pageSubTitle} />
          <EditSearchEngine details={searchBar} />
          <EditApplicationList aplicationList={applicationList} />
        </div>

        <div className={styles.flexitem}>
          <Title pageTitleDetails={pageTitle} />
          <Title pageTitleDetails={pageSubTitle} isSubTitle={true} />
          <SearchBar searchBarDetails={searchBar} />
          <ApplicationList applicationListDetails={applicationList} managementView={true} />
        </div>
      </div>
    </div>
  );
};

adminPage.getInitialProps = async (ctx) => {
  try {
    const data = await fetchDetailsApi();
    setFetchDetails(data);

    return { data };
  } catch (error) {
    console.log(error);

    return {};
  }
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { setFetchDetails })(adminPage);
