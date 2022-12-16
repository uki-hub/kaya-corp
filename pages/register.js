import { useContext, useRef, useState } from "react";
import FormTextField from "../components/UI/FormTextField";
import { Email as EmailIcon } from "@mui/icons-material";
import AuthContext from "../contexts/AuthContext";
import LandingBackdrop from "../components/Landing/Backdrop/LandingBackdrop";
import { useRouter } from "next/router";
import AuthDataParser from "../lib/AuthDataParser";
import classes from "../styles/pages/register.module.css";

export default function Register() {
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();
  const useridRef = useRef();
  const passwordRef = useRef();
  const emailRef = useRef();
  const fullNameRef = useRef();
  const auth = useContext(AuthContext);

  const sendEmailHandler = async () => {
    setSubmitted(true);

    const result = await auth.onRegister({
      userid: useridRef.current.value,
      password: passwordRef.current.value,
      email: emailRef.current.value,
      fullname: fullNameRef.current.value,
    });

    if (result) router.push("/");
  };

  return (
    <div className={classes.background}>
      {submitted && <LandingBackdrop />}
      <div className={classes.form}>
        <FormTextField
          ref={useridRef}
          type="text"
          label="User ID"
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
        <FormTextField
          ref={emailRef}
          type="email"
          label="Email"
          initializeValue={""}
          error={true}
        />
        <FormTextField
          ref={fullNameRef}
          type="test"
          label="Full Name"
          initializeValue={""}
          error={true}
        />

        <div className={"btn col"} onClick={sendEmailHandler}>
          Register
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
