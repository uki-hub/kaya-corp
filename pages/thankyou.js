import { useRouter } from "next/router";

const ThankYou = (props) => {
  const router = useRouter();

  const transactionId = router.query["transactionId"];

  return (
    <>
      <header class="site-header" id="header">
        <h1 class="site-header__title" data-lead-id="site-header-title">
          THANK YOU!
        </h1>
      </header>

      <div class="main-content">
        <i class="fa fa-check main-content__checkmark" id="checkmark"></i>
        <p class="main-content__body" data-lead-id="main-content-body">
          Thanks a bunch for filling that out. It means a lot to us, just like
          you do! We really appreciate you giving us a moment of your time
          today. Thanks for being you.
        </p>
      </div>

      <footer class="site-footer" id="footer">
        <p class="site- " id="fineprint">
          Copyright ©2014 | All Rights Reserved
        </p>
      </footer>
    </>
  );
};

export default ThankYou;
