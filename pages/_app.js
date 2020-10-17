import "../styles/globals.css";
import App from "next/app";
import withReduxStore from "../redux/with-redux-store";
import { Provider } from "react-redux";

import Head from "next/head";

class MyApp extends App {
  render() {
    //Information that was returned  from 'getInitialProps' are stored in the props i.e. pageProps
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

//makeStore function that returns a new store for every request

//withRedux wrapper that passes the store to the App Component
export default withReduxStore(MyApp);
