import "../styles/globals.css";
import App from "next/app";
import withReduxStore from "../redux/with-redux-store";
import { Provider } from "react-redux";

import Head from "next/head";

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;

    return (
      <Provider store={reduxStore}>
        <Head>
          <meta name="viewport" content="viewport-fit=cover" />
        </Head>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default withReduxStore(MyApp);
