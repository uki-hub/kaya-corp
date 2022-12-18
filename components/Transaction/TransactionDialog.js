import LabelForm from "../UI/LabelForm";
import Dialog from "@mui/material/Dialog";
import classes from "./TransactionDialog.module.css";

const TransactionDialog = ({ data, open, onCloseHandler }) => {
  const LabelForm30 = ({ label, text, isOdd }) => (
    <LabelForm
      label={label}
      text={text}
      labelWidth="35%"
      //   style={{
      //     padding: "0 10px",
      //     backgroundColor: isOdd ?  "#cfcfcf" : "#DCDCDC",
      //   }}
    />
  );

  return (
    <Dialog fullWidth maxWidth="xl" open={open} onClose={onCloseHandler}>
      <div className={classes["transaction-dialog"]}>
        <label className={classes["dialog-label"]}>Transaction Details</label>
        <div>
          <LabelForm
            label="Transaction No"
            text={data.transNo}
            labelWidth="10%"
          />
          <LabelForm
            label="Status Payment"
            text={data.stsPayment}
            labelWidth="10%"
          />
          <LabelForm
            label="Transaction Date"
            text={data.transDate}
            labelWidth="10%"
          />
          <LabelForm label="Pax" text={data.pax} labelWidth="10%" />
          <LabelForm
            label="Daftar Peserta"
            text=""
            labelWidth="10%"
            style={{ marginTop: "10px" }}
          />
          <div className={classes["participant-list"]}>
            {data.participant.map((p, j) => (
              <div key={j} className={classes["participant-details"]}>
                <label>Peserta {j + 1}</label>
                <div className={classes["participant-info"]}>
                  <LabelForm30
                    label="Participant Code"
                    text={p.participantCd}
                    isOdd={true}
                  />
                  <LabelForm30
                    label="Nama"
                    text={p.nmParticipant}
                    isOdd={false}
                  />
                  <LabelForm30 label="Email" text={p.email} isOdd={true} />
                  <LabelForm30 label="Kota" text={p.city} isOdd={false} />
                  <LabelForm30 label="No Hp" text={p.phone} isOdd={true} />
                  <LabelForm30
                    label="No Hp Darurat"
                    text={p.emergPhone}
                    isOdd={false}
                  />
                  <LabelForm30 label="Kelamin" text={p.gender} isOdd={true} />
                  <LabelForm30
                    label="Ukuran Jersey"
                    text={p.jerseySize}
                    isOdd={false}
                  />
                </div>
                <div className={classes["participant-event-info"]}>
                  <LabelForm30 label="EBIB" text={p.EBib} />
                  <LabelForm30 label="Category" text={p.category} />
                  <LabelForm30 label="BRR" text={p.brr} />
                  <LabelForm30 label="Harga" text={p.price} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default TransactionDialog;
