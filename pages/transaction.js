import classes from "../styles/pages/profile.module.css";
import { Email as EmailIcon } from "@mui/icons-material";
import { useContext, useState } from "react";
import FormTextField from "../components/UI/FormTextField";
import AuthContext from "../contexts/AuthContext";
import AuthDataParser from "../lib/AuthDataParser";
import { getInvoicesRepo } from "../repositories/InvoiceRepository";

export default function Transaction({ invoices }) {
  const [submitted, setSubmitted] = useState(false);
  const auth = useContext(AuthContext);

  return (
    <div className={classes.background}>
      {submitted && <LandingBackdrop />}
      <div className={classes.form}>
        {JSON.stringify(invoices)}
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

  const invoices = await getInvoicesRepo(authData.userid);

  return {
    props: {
      invoices,
    },
  };
}
