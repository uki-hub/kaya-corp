import classes from "../styles/pages/profile.module.css";
import { Email as EmailIcon } from "@mui/icons-material";
import { useContext, useEffect, useRef, useState } from "react";
import FormTextField from "../components/UI/FormTextField";
import AuthContext from "../contexts/AuthContext";
import AuthDataParser from "../lib/AuthDataParser";
import LandingBackdrop from "../components/Landing/Backdrop/LandingBackdrop";
import LabelForm from "../components/UI/LabelForm";
import LandingHeader from "../components/Landing/Header/LandingHeader";
import { changePasswordRepo } from "../repositories/UserRepository";

export default function Profile({ authData }) {
  const [submitted, setSubmitted] = useState(false);
  const auth = useContext(AuthContext);
  const oldPasswordRef = useRef();
  const newPasswordRef = useRef();
  const confirmPasswordRef = useRef();
  const [warning, setWarning] = useState();

  const changePasswordHandler = async () => {
    const warnings = [];

    if (
      oldPasswordRef.current.value == "" ||
      newPasswordRef.current.value == "" ||
      confirmPasswordRef.current.value == ""
    ) {
      setWarning("Please fill all the fields");
      return;
    }

    if (newPasswordRef.current.value == confirmPasswordRef.current.value) {
      setWarning("Please make sure confirm password is same with new password");
      return;
    }

    const result = await changePasswordRepo({
      userid: auth.authData.userid,
      oldpassword: oldPasswordRef.current.value,
      newpassword: confirmPasswordRef.current.value,
    });
  };

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
          <LabelForm
            label="User Id"
            text={authData.userid}
            style={{ margin: "0 20px" }}
          />
          <LabelForm
            label="Full Name"
            text={authData.fullname}
            style={{ margin: "0 20px" }}
          />
          <LabelForm
            label="Email"
            text={authData.email}
            style={{ margin: "0 20px" }}
          />
          <div className={classes["change-password-form"] + " mt-3"}>
            <label className={classes["change-password-label"]}>
              Change Password
            </label>
            <FormTextField
              ref={oldPasswordRef}
              type="password"
              label="Old Password"
              initializeValue={""}
              error={false}
            />
            <FormTextField
              ref={newPasswordRef}
              type="password"
              label="New Password"
              initializeValue={""}
              error={false}
            />
            <FormTextField
              ref={confirmPasswordRef}
              type="password"
              label="Confirm New Password"
              initializeValue={""}
              error={false}
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
            <div className={"btn col"} onClick={changePasswordHandler}>
              Change Password
            </div>
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
