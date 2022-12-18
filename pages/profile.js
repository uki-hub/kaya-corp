import classes from "../styles/pages/profile.module.css";
import { Email as EmailIcon } from "@mui/icons-material";
import { useContext, useEffect, useState } from "react";
import FormTextField from "../components/UI/FormTextField";
import AuthContext from "../contexts/AuthContext";
import AuthDataParser from "../lib/AuthDataParser";
import LandingBackdrop from "../components/Landing/Backdrop/LandingBackdrop";
import LabelForm from "../components/UI/LabelForm";
import LandingHeader from "../components/Landing/Header/LandingHeader";

// {
//   "isSuccess": true,
//   "data": {
//   "userid": "123",
//   "password": "admin",
//   "fullname": "Kaya Developer",
//   "email": "kayacorp.developer@gmail.com",
//   "stsdelete": null,
//   "lastupdate": "2022-12-15 06:57:09"
//   }

export default function Profile({ authData }) {
  const [submitted, setSubmitted] = useState(false);
  const auth = useContext(AuthContext);

  useEffect(() => {
    if (authData) auth.onSetAuthData(authData);
  }, [auth, authData]);

  return (
    <div className={classes.background}>
      {submitted && <LandingBackdrop />}
      <LandingHeader />
      <div className="container">
        <div className={"container " + classes.form}>
          <label className={classes["form-title"] + " col mb-3"}>Profile</label>
          <LabelForm label="User Id" text={authData.userid} />
          <LabelForm label="Full Name" text={authData.fullname} />
          <LabelForm label="Email" text={authData.email} />
          <div className={classes["change-password-form"] + " mt-3"}>
            <label className={classes["change-password-label"]}>
              Change Password
            </label>
            <FormTextField
              // ref={passwordRef}
              type="password"
              label="Old Password"
              initializeValue={""}
              error={false}
            />
            <FormTextField
              // ref={passwordRef}
              type="password"
              label="New Password"
              initializeValue={""}
              error={false}
            />
            <FormTextField
              // ref={passwordRef}
              type="password"
              label="Confirm New Password"
              initializeValue={""}
              error={false}
            />
            <div className={"btn col"}>Change Password</div>
          </div>
        </div>
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
