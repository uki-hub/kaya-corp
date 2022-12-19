import { Email as EmailIcon } from "@mui/icons-material";
import { useContext, useEffect, useState } from "react";
import FormTextField from "../components/UI/FormTextField";
import AuthContext from "../contexts/AuthContext";
import AuthDataParser from "../lib/AuthDataParser";
import { getInvoicesRepo } from "../repositories/InvoiceRepository";
import LandingHeader from "../components/Landing/Header/LandingHeader";
import classes from "../styles/pages/transaction.module.css";
import TransactionDialog from "../components/Transaction/TransactionDialog";

const data = [
  {
    transNo: "TRX-1122-0012",
    transDate: "2022-10-31 12:59:06",
    pax: "2",
    amount: "150000",
    stsPayment: "PAID",
    participant: [
      {
        participantCd: "BRR-1122-0012",
        email: "sshalihuddin77@gmail.com",
        nmParticipant: "Sultan Shalihuddin AlAyubi",
        city: "Kabupaten Kediri",
        phone: "87750604010",
        emergPhone: "89639480706",
        jerseySize: "S",
        gender: "M",
        category: "Ride",
        brr: "Fondo Ride",
        EBib: "5001",
        price: "150000",
        idEvent: "brr",
        stsFlag: "Y",
        stsFlag2: "Y",
      },
      {
        participantCd: "BRR-1122-0012",
        email: "sshalihuddin77@gmail.com",
        nmParticipant: "Sultan Shalihuddin AlAyubi",
        city: "Kabupaten Kediri",
        phone: "87750604010",
        emergPhone: "89639480706",
        jerseySize: "S",
        gender: "M",
        category: "Ride",
        brr: "Fondo Ride",
        EBib: "5001",
        price: "150000",
        idEvent: "brr",
        stsFlag: "Y",
        stsFlag2: "Y",
      },
      {
        participantCd: "BRR-1122-0012",
        email: "sshalihuddin77@gmail.com",
        nmParticipant: "Sultan Shalihuddin AlAyubi",
        city: "Kabupaten Kediri",
        phone: "87750604010",
        emergPhone: "89639480706",
        jerseySize: "S",
        gender: "M",
        category: "Ride",
        brr: "Fondo Ride",
        EBib: "5001",
        price: "150000",
        idEvent: "brr",
        stsFlag: "Y",
        stsFlag2: "Y",
      },
      {
        participantCd: "BRR-1122-0012",
        email: "sshalihuddin77@gmail.com",
        nmParticipant: "Sultan Shalihuddin AlAyubi",
        city: "Kabupaten Kediri",
        phone: "87750604010",
        emergPhone: "89639480706",
        jerseySize: "S",
        gender: "M",
        category: "Ride",
        brr: "Fondo Ride",
        EBib: "5001",
        price: "150000",
        idEvent: "brr",
        stsFlag: "Y",
        stsFlag2: "Y",
      },
      {
        participantCd: "BRR-1122-0012",
        email: "sshalihuddin77@gmail.com",
        nmParticipant: "Sultan Shalihuddin AlAyubi",
        city: "Kabupaten Kediri",
        phone: "87750604010",
        emergPhone: "89639480706",
        jerseySize: "S",
        gender: "M",
        category: "Ride",
        brr: "Fondo Ride",
        EBib: "5001",
        price: "150000",
        idEvent: "brr",
        stsFlag: "Y",
        stsFlag2: "Y",
      },
      {
        participantCd: "BRR-1122-0012",
        email: "sshalihuddin77@gmail.com",
        nmParticipant: "Sultan Shalihuddin AlAyubi",
        city: "Kabupaten Kediri",
        phone: "87750604010",
        emergPhone: "89639480706",
        jerseySize: "S",
        gender: "M",
        category: "Ride",
        brr: "Fondo Ride",
        EBib: "5001",
        price: "150000",
        idEvent: "brr",
        stsFlag: "Y",
        stsFlag2: "Y",
      },
      {
        participantCd: "BRR-1122-0012",
        email: "sshalihuddin77@gmail.com",
        nmParticipant: "Sultan Shalihuddin AlAyubi",
        city: "Kabupaten Kediri",
        phone: "87750604010",
        emergPhone: "89639480706",
        jerseySize: "S",
        gender: "M",
        category: "Ride",
        brr: "Fondo Ride",
        EBib: "5001",
        price: "150000",
        idEvent: "brr",
        stsFlag: "Y",
        stsFlag2: "Y",
      },
      {
        participantCd: "BRR-1122-0012",
        email: "sshalihuddin77@gmail.com",
        nmParticipant: "Sultan Shalihuddin AlAyubi",
        city: "Kabupaten Kediri",
        phone: "87750604010",
        emergPhone: "89639480706",
        jerseySize: "S",
        gender: "M",
        category: "Ride",
        brr: "Fondo Ride",
        EBib: "5001",
        price: "150000",
        idEvent: "brr",
        stsFlag: "Y",
        stsFlag2: "Y",
      },
      {
        participantCd: "BRR-1122-0012",
        email: "sshalihuddin77@gmail.com",
        nmParticipant: "Sultan Shalihuddin AlAyubi",
        city: "Kabupaten Kediri",
        phone: "87750604010",
        emergPhone: "89639480706",
        jerseySize: "S",
        gender: "M",
        category: "Ride",
        brr: "Fondo Ride",
        EBib: "5001",
        price: "150000",
        idEvent: "brr",
        stsFlag: "Y",
        stsFlag2: "Y",
      },
      {
        participantCd: "BRR-1122-0012",
        email: "sshalihuddin77@gmail.com",
        nmParticipant: "Sultan Shalihuddin AlAyubi",
        city: "Kabupaten Kediri",
        phone: "87750604010",
        emergPhone: "89639480706",
        jerseySize: "S",
        gender: "M",
        category: "Ride",
        brr: "Fondo Ride",
        EBib: "5001",
        price: "150000",
        idEvent: "brr",
        stsFlag: "Y",
        stsFlag2: "Y",
      },
    ],
  },
  {
    transNo: "TRX-1122-0012",
    transDate: "2022-10-25 12:59:06",
    pax: "1",
    amount: "100000",
    stsPayment: "NOT-PAID",
    participant: [
      {
        participantCd: "BRR-1122-0012",
        email: "sshalihuddin77@gmail.com",
        nmParticipant: "Sultan Shalihuddin AlAyubi",
        city: "Kabupaten Kediri",
        phone: "87750604010",
        emergPhone: "89639480706",
        jerseySize: "S",
        gender: "M",
        category: "Ride",
        brr: "Fondo Ride",
        EBib: "5001",
        price: "150000",
        idEvent: "brr",
        stsFlag: "Y",
        stsFlag2: "Y",
      },
    ],
  },
];

export default function Transaction({ authData, invoices }) {
  const [openIndex, setOpenIndex] = useState(-1);
  const [submitted, setSubmitted] = useState(false);
  const auth = useContext(AuthContext);

  const detailsOpenHandler = (index) => {
    setOpenIndex(index);
  };

  const detailsCloseHandler = () => {
    setOpenIndex(-1);
  };

  useEffect(() => {
    if (authData) auth.onSetAuthData(authData);
  }, [auth, authData]);

  return (
    <div className={classes.background}>
      <LandingHeader />
      {openIndex != -1 && (
        <TransactionDialog
          data={data[openIndex]}
          open={true}
          onCloseHandler={detailsCloseHandler}
        />
      )}
      <div className="container">
        <div className={"container " + classes.form}>
          <div className="row m-0">
            <label>Daftar Transaksi</label>
          </div>
          <div className={classes["transaction-list"]}>
            {data.map((t, i) => {
              return (
                <div
                  key={i}
                  className={classes["transaction-row"]}
                  onClick={() => detailsOpenHandler(i)}
                >
                  <div className={classes["transaction-header"]}>
                    <label className={classes["transaction-no"]}>
                      {t.transNo}
                    </label>
                    <label
                      className={classes["transaction-sts"]}
                      style={{
                        backgroundColor:
                          t.stsPayment == "PAID" ? "green" : "red",
                      }}
                    >
                      {t.stsPayment}
                    </label>
                    <label className={classes["transaction-date"]}>
                      {t.transDate}
                    </label>
                  </div>
                </div>
              );
            })}
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

  const invoices = await getInvoicesRepo(authData.userid);

  return {
    props: {
      authData,
      invoices,
    },
  };
}
