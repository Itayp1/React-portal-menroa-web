import React, { Component } from "react";
import Title from "../components/Title";
import SubTitle from "../components/SubTitle";
import SearchBar from "../components/SearchBar";
import ApplicationList from "../components/ApplicationList";
import axios from "axios";
class IndexPage extends Component {
  render() {
    const { searchBar, pageSubTitle, pageTitle, applicationList } = this.props.data;

    return (
      <div className="container-fluid ">
        <Title pageTitleDetails={pageTitle} />
        <SubTitle pageSubTitleDetails={pageSubTitle} />
        <SearchBar searchBarDetails={searchBar} />
        <ApplicationList applicationListDetails={applicationList} />
      </div>
    );
  }
}

export async function getServerSideProps() {
  try {
    const { data } = await axios.get("http://localhost:3001/api/PageDetails/entryPage");

    return { props: { data } };
  } catch (error) {
    console.log(error);

    return {};
  }
}

export default IndexPage;
