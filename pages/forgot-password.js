import { useContext, useRef, useState } from "react";
import FormTextField from "../components/UI/FormTextField";
import { Email as EmailIcon } from "@mui/icons-material";
import AuthContext from "../contexts/AuthContext";
import LandingBackdrop from "../components/Landing/Backdrop/LandingBackdrop";
import { useRouter } from "next/router";
import AuthDataParser from "../lib/AuthDataParser";
import classes from "../styles/pages/forgot-password.module.css";
import useFormat from "../hooks/useFormat";

export default function ForgotPassword() {
  const [warning, setWarning] = useState();
  const [submitted, setSubmitted] = useState(false);
  const auth = useContext(AuthContext);
  const router = useRouter();
  const emailRef = useRef();
  const format = useFormat();

  const goBackToLoginHandler = () => router.push("/login");

  const validate = () => {
    if (format.isEmail(emailRef.current.value)) {
      setWarning("Invalid email");
      return false;
    }

    return true;
  };

  const sendEmailHandler = async () => {
    if (!validate()) return false;

    setSubmitted(true);

    const result = await auth.onForgotPassword(emailRef.current.value);

    setSubmitted(false);

    if (!result.success) setWarning(result.message);
  };

  return (
    <div className={classes.background}>
      {submitted && <LandingBackdrop />}

      <div className={classes.form}>
        <label className={classes["form-title"]}>Forgot Password</label>
        <FormTextField
          ref={emailRef}
          type="email"
          label="Email"
          initializeValue={""}
          error={false}
        />
        {warning && <label className="warning">{warning}</label>}
        <div className={"btn col"} onClick={sendEmailHandler}>
          Send Email
        </div>
        <div className={"row m-0 " + classes["other-options"]}>
          <label onClick={goBackToLoginHandler}>Go back to Login</label>
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
