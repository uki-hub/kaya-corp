import Script from "next/script";

const BundleScript = () => {
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
    </>
  );
};

export default BundleScript;
