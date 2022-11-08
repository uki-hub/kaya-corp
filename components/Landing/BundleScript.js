import Head from "next/head";
import Script from "next/script";

const BundleScript = () => {
  return (
    <>
      <Script type="text/javascript" src="/assets/js/jquery.js" defer></Script>
      <Script
        type="text/javascript"
        src="/assets/js/popper.min.js"
        defer
      ></Script>
      <Script
        type="text/javascript"
        src="/assets/js/bootstrap.min.js"
        defer
      ></Script>
      <Script
        type="text/javascript"
        src="/assets/js/jquery.appear.min.js"
        defer
      ></Script>
      <Script
        type="text/javascript"
        src="/assets/js/jquery.magnific-popup.min.js"
        defer
      ></Script>
      <Script
        type="text/javascript"
        src="/assets/js/owl.carousel.min.js"
        defer
      ></Script>
      <Script type="text/javascript" src="/assets/js/wow.min.js" defer></Script>
      <Script
        type="text/javascript"
        src="/assets/js/isotope.pkgd.min.js"
        defer
      ></Script>
      <Script type="text/javascript" src="/assets/js/main.js" defer></Script>
    </>
  );
};

export default BundleScript;
