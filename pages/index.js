import React, { Component } from "react";
import Title from "../components/Title";
import fetchDetailsApi from "../api/fetchDetailsApi";
import SearchBar from "../components/SearchBar";
import ApplicationList from "../components/ApplicationList";

class IndexPage extends Component {
  render() {
    const { searchBar, pageSubTitle, pageTitle, applicationList } = this.props.data;

    return (
      <div className="container-fluid ">
        <Title pageTitleDetails={pageTitle} />
        <Title pageTitleDetails={pageSubTitle} isSubTitle={true} />
        <SearchBar searchBarDetails={searchBar} />
        <ApplicationList applicationListDetails={applicationList} />
      </div>
    );
  }
}

export async function getServerSideProps() {
  const data = await fetchDetailsApi();
  return { props: { data } };
}

export default IndexPage;
