import Script from "next/script";
import * as React from "react";
import PropTypes from "prop-types";

export default function MyApp(props) {
  const { Component } = props;

  return <Component />;
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
