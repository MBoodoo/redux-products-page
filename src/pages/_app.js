import React from "react";
import App from "next/app";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { reducer } from "../reducer";
import "normalize.css";

const store = createStore(reducer);

export default class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <Provider store={store}>
          <Component {...pageProps} key={router.route}/>
          <style global jsx>{`
            html {
              box-sizing: border-box;
            }
            *,
            *::before,
            *::after {
              box-sizing: inherit;
            }
            body {
              background: linear-gradient(to right, #bfb48f, #f2efe9);
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
                Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
            }
          `}</style>
      </Provider>
    );
  }
}
