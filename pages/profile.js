import classes from "../styles/pages/profile.module.css";
import { Email as EmailIcon } from "@mui/icons-material";
import { useContext, useState } from "react";
import FormTextField from "../components/UI/FormTextField";
import AuthContext from "../contexts/AuthContext";
import AuthDataParser from "../lib/AuthDataParser";

export default function Profile({ authData }) {
  const [submitted, setSubmitted] = useState(false);
  const auth = useContext(AuthContext);

  return (
    <div className={classes.background}>
      {submitted && <LandingBackdrop />}
      <div className={classes.form}>
        <FormTextField
          // ref={usernameRef}
          type="email"
          label="Email"
          icon={EmailIcon}
          initializeValue={""}
          error={true}
        />
        <FormTextField
          // ref={passwordRef}
          type="email"
          label="Email"
          icon={EmailIcon}
          initializeValue={""}
          error={true}
        />
        <div className={"btn " + classes.goback}>Login</div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ req }) {
  const authData = AuthDataParser(req);

  if (!authData)
    return {
      redirect: {
        permanent: true,
        destination: "/login",
      },
      props: {},
    };

  return {
    props: {
      authData,
    },
  };
}
