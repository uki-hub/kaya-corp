import { useContext, useRef, useState } from "react";
import FormTextField from "../components/UI/FormTextField";
import classes from "../styles/pages/login.module.css";
import { Email as EmailIcon } from "@mui/icons-material";
import AuthContext from "../contexts/AuthContext";
import LandingBackdrop from "../components/Landing/Backdrop/LandingBackdrop";
import { useRouter } from "next/router";
import AuthDataParser from "../lib/AuthDataParser";

export default function Login() {
  const [submitted, setSubmitted] = useState(false);
  const [warning, setWarning] = useState();
  const router = useRouter();
  const auth = useContext(AuthContext);
  const usernameRef = useRef();
  const passwordRef = useRef();

  const forgotPasswordHandler = () => router.push("/forgot-password");
  const registerHandler = () => router.push("/register");

  const loginHandler = async () => {
    if (usernameRef.current.value == "" || passwordRef.current.value == "") {
      setWarning("Please fill all the fields");
      return;
    }

    setSubmitted(true);

    const isSuccess = await auth.onLogin(
      usernameRef.current.value,
      passwordRef.current.value
    );

    setSubmitted(false);

    if (isSuccess) router.push("/");
    else setWarning("Username tidak terdaftar !!");
  };

  return (
    <div className={classes.background}>
      {submitted && <LandingBackdrop />}
      <div className={classes.form}>
        <div className={classes.logo}>
          <img
            src="https://upload.wikimedia.org/wikipedia/id/thumb/c/cd/Logo_PDI-P.svg/800px-Logo_PDI-P.svg.png"
            width={200}
            height={200}
          />
        </div>
        <FormTextField
          ref={usernameRef}
          type="email"
          label="Email"
          initializeValue={""}
          error={true}
        />
        <FormTextField
          ref={passwordRef}
          type="password"
          label="Password"
          initializeValue={""}
          error={true}
        />
        {warning && (
          <label
            style={{
              color: "red",
              userSelect: "none",
              display: "block",
              margin: "0",
              fontSize: "14px",
            }}
          >
            {warning}
          </label>
        )}
        <div className={"btn col-12 mb-2"} onClick={loginHandler}>
          Login
        </div>
        <div className={"row m-0 " + classes["other-options"]}>
          <label onClick={registerHandler}>Register</label>
          <div className="col" />
          <label onClick={forgotPasswordHandler}>Forgot Password</label>
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
