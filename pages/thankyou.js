import { width } from "@mui/system";
import { useRouter } from "next/router";
import Lottie from "react-lottie";
import checkAnimation from "/public/assets/lotties/check.json";
import classes from "./thankyou.module.css";
import Link from "next/link";

const ThankYou = (props) => {
  const router = useRouter();

  const transactionId = router.query["transactionId"];

  return (
    <div className={classes.parent}>
      <div className={classes.child}>
        <h1 style={{     marginBottom: '2rem', color: "white" }}>Thank You</h1>
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
        <Link className={"btn " + classes.goback} href={"/"}>
          HOME
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
