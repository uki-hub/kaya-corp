import { useRef } from "react";
import FormTextField from "../components/UI/FormTextField";
import classes from "./login.module.css";

import {
  Email as EmailIcon,
  BadgeRounded as BadgeRoundedIcon,
  Place as PlaceIcon,
  Call as CallIcon,
  SquareFoot as SquareFootIcon,
  Person as PersonIcon,
  DeleteForever as DeleteForeverIcon,
  ConfirmationNumber as ConfirmationNumberIcon,
} from "@mui/icons-material";

const Login = () => {
  const a = useRef();

  return (
    <div className={classes.background}>
      <div className={classes.form}>
        <FormTextField
          // ref={emailRef}
          ref={a}
          type="email"
          label="Email"
          icon={EmailIcon}
          initializeValue={""}
          error={true}
        />
        <FormTextField
          // ref={emailRef}
          ref={a}
          type="email"
          label="Email"
          icon={EmailIcon}
          initializeValue={""}
          error={true}
        />
      </div>
    </div>
  );
};

export default Login;
