import Script from "next/script";

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

function MyApp({ Component, pageProps }) {
  return (
    <>
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
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
