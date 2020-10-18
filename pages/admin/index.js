import styles from "./index.module.css";
import Title from "../../components/Title";
import SearchBar from "../../components/SearchBar";
import ApplicationList from "../../components/ApplicationList";
import EditTitle from "../../components/admin/EditTitle";
import EditSearchEngine from "../../components/admin/EditSearchEngine";
import EditApplicationList from "../../components/admin/EditApplicationList";
import { connect, useDispatch } from "react-redux";
import React, { useState } from "react";
import AproveModal from "../../components/admin/AproveModal";
import { setFetchDetails } from "../../redux/actions/admin";
import fetchDetailsApi from "../../api/fetchDetailsApi";
import updateDetailsApi from "../../api/updateDetailsApi";

const adminPage = (props) => {
  const dispatch = useDispatch();
  let { searchBar, pageSubTitle, pageTitle, applicationList } = props;
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="container-lg">
      <div className={styles.flexitem}>
        <Title pageTitleDetails={pageTitle} />
        <Title pageTitleDetails={pageSubTitle} isSubTitle={true} />
        <SearchBar searchBarDetails={searchBar} />
        <ApplicationList applicationListDetails={applicationList} managementView={true} />
      </div>
      <div className="row ">
        <div className={styles.flexitem}>
          <EditTitle details={pageTitle} field="כותרת ראשית" />
          <EditTitle details={pageSubTitle} field="כותרת משנית" isSubTitle={true} />
          <EditSearchEngine details={searchBar} />
          <EditApplicationList applicationList={applicationList} />
        </div>
      </div>
      {showModal ? <AproveModal showModal={showModal} setShowModal={setShowModal} /> : null}

      <button type="button" className="btn btn-secondary  mb-5" onClick={() => updateDetailsApi({ searchBar, pageSubTitle, pageTitle, applicationList }, setShowModal)}>
        שמירה
      </button>
    </div>
  );
};

adminPage.getInitialProps = async ({ reduxStore }) => {
  try {
    const data = await fetchDetailsApi();
    reduxStore.dispatch(setFetchDetails(data));

    return { data };
  } catch (error) {
    console.log(error);

    return {};
  }
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(adminPage);
