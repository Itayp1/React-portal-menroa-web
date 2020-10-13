import React, { Component } from "react";
import Link from "next/link";
import Router from "next/router";
import Title from "../components/Title";
import SubTitle from "../components/SubTitle";
import SearchBar from "../components/SearchBar";
import ApplicationList from "../components/ApplicationList";

class IndexPage extends Component {
  static getInitialProps(context) {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ appName: "Super App" });
      }, 1000);
    });
    return promise;
  }

  render() {
    return (
      <div className="container-fluid ">
        <Title />
        <SubTitle />
        <SearchBar />
        <ApplicationList />
        {/* <p>
          Go to{" "}
          <Link href="/auth">
            <a>Auth</a>
          </Link>
        </p> */}

        {/* <button className="btn btn-primary" onClick={() => Router.push("/auth")}>Go to Auth</button> */}
      </div>
    );
  }
}

export default IndexPage;
