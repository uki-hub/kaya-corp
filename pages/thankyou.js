import { width } from "@mui/system";
import { useRouter } from "next/router";
// import Lottie from "react-lottie";
import checkAnimation from "/public/assets/lotties/check.json";
import classes from "./thankyou.module.css";
import Link from "next/link";
import { getConfirmation } from "../repositories/EventRepository";

const ThankYou = (props) => {
  const goHomeHandler = () => (window.location.href = "/event/brr");
  
  return (
    <>
      <div className={classes.parent}>
        <div className={classes.child}>
          <h1 style={{ marginBottom: "3rem", color: "white" }}>Thank You</h1>
          {/* <Lottie
            options={{
              loop: false,
              autoplay: true,
              animationData: checkAnimation,
              rendererSettings: {
                className: "check-animation",
              },
            }}
            height={250}
            width={250}
          /> */}
          <div style={{ whiteSpace: "nowrap", color: "white" }}>
            terima kasih untuk pembelian tiket event
          </div>
          <br />
          <div className={"btn " + classes.goback} onClick={goHomeHandler}>
            HOME
          </div>
        </div>
      </div>
    </>
  );
};

export default ThankYou;

export async function getStaticProps(context) {
  return {
    props: {},
  };
}

// export async function getServerSideProps(context) {
//   const orderId = context.query["order_id"];

//   const data = await getConfirmation(orderId);

//   return {
//     props: {
//       data: data,
//     },
//   };
// }
