import Script from "next/script";
import * as React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "./theme";
import createEmotionCache from "./createEmotionCache";

import "../styles/globals.css";
import "../styles/bundle/css/animate.css";
import "../styles/bundle/css/bootstrap.min.css";
import "../styles/bundle/css/font-awesome.min.css";
import "../styles/bundle/css/isotop.css";
import "../styles/bundle/css/magnific-popup.css";
import "../styles/bundle/css/owl.carousel.min.css";
import "../styles/bundle/css/responsive.css";
import "../styles/bundle/css/style.css";
import "../styles/bundle/css/xsIcon.css";

const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Script type="text/javascript" src="/assets/js/jquery.js"></Script>
      <Script type="text/javascript" src="/assets/js/popper.min.js"></Script>
      <Script type="text/javascript" src="/assets/js/bootstrap.min.js"></Script>
      <Script
        type="text/javascript"
        src="/assets/js/jquery.appear.min.js"
      ></Script>
      <Script
        type="text/javascript"
        src="/assets/js/jquery.jCounter.js"
      ></Script>
      <Script
        type="text/javascript"
        src="/assets/js/jquery.magnific-popup.min.js"
      ></Script>
      <Script
        type="text/javascript"
        src="/assets/js/owl.carousel.min.js"
      ></Script>
      <Script type="text/javascript" src="/assets/js/wow.min.js"></Script>
      <Script
        type="text/javascript"
        src="/assets/js/isotope.pkgd.min.js"
      ></Script>
      <Script type="text/javascript" src="/assets/js/main.js"></Script>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, 
                consistent, and simple baseline to
                build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
