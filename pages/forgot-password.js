import { useContext, useRef, useState } from "react";
import FormTextField from "../components/UI/FormTextField";
import { Email as EmailIcon } from "@mui/icons-material";
import AuthContext from "../contexts/AuthContext";
import LandingBackdrop from "../components/Landing/Backdrop/LandingBackdrop";
import { useRouter } from "next/router";
import AuthDataParser from "../lib/AuthDataParser";
import classes from "../styles/pages/forgot-password.module.css";

export default function ForgotPassword() {
  const [submitted, setSubmitted] = useState(false);
  const auth = useContext(AuthContext);
  const router = useRouter();
  const emailRef = useRef();

  const sendEmailHandler = async () => {
    setSubmitted(true);

    const result = await auth.onForgotPassword(emailRef.current.value);

    setSubmitted(false);
  };

  return (
    <div className={classes.background}>
      {submitted && <LandingBackdrop />}

      <div className={classes.form}>
        <label>Forgot Password</label>
        <FormTextField
          ref={emailRef}
          type="email"
          label="Email"
          initializeValue={""}
          error={true}
        />
        <div className={"btn col"} onClick={sendEmailHandler}>
          Send Email
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ req }) {
  const authData = AuthDataParser(req);

  if (authData)
    return {
      redirect: {
        permanent: true,
        destination: "/",
      },
      props: {},
    };

  return {
    props: {},
  };
}
