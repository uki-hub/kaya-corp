import { width } from "@mui/system";
import { useRouter } from "next/router";
import Lottie from "react-lottie";
import checkAnimation from "/public/assets/lotties/check.json";
import classes from "./thankyou.module.css";
import Link from "next/link";
import { getConfirmation } from "../repositories/EventRepository";

const ThankYou = ({ data }) => {
  return (
    <>
      <div className={classes.parent}>
        <div className={classes.child}>
          <h1 style={{ marginBottom: "2rem", color: "white" }}>Thank You</h1>
          <Lottie
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
          />
          <div style={{ whiteSpace: "nowrap", color: "white" }}>
            terima kasih untuk pembelian tiket event
          </div>
          <br />
          <Link className={"btn " + classes.goback} href={`/event/brr`}>
            {/* <Link className={"btn " + classes.goback} href={`/event/${data.idEvent}`}> */}
            HOME
          </Link>
        </div>
        {/* <div style={{ height: 600, width: 400 }}>
          <InvoiceCard />
        </div> */}
      </div>
    </>
  );
};

export default ThankYou;

export async function getServerSideProps(context) {
  const orderId = context.query["order_id"];

  const data = await getConfirmation(orderId);

  return {
    props: {
      data: data,
    },
  };
}
