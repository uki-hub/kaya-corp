import FormTextField from "../../UI/FormTextField";
import FormTextFieldDouble from "../../UI/FormTextFieldDouble";
import DropdownMenuField from "../../UI/DropdownMenuField";
import RadioGroupField from "../../UI/RadioGroupField";

import {
  Email as EmailIcon,
  BadgeRounded as BadgeRoundedIcon,
  Place as PlaceIcon,
  Call as CallIcon,
  SquareFoot as SquareFootIcon,
  Person as PersonIcon,
  DeleteForever as DeleteForeverIcon
} from "@mui/icons-material";
import PesertaContext from "../../../contexts/PesertaContext";
import { useContext, useRef } from "react";

const FormPerserta = ({ persertaIndex }) => {
  const pesertaCtx = useContext(PesertaContext);
  const refs = pesertaCtx.listPeserta[persertaIndex]._refs;
  refs['email'] = useRef();
  refs['namaKTP'] = useRef();
  refs['asalKota'] = useRef();
  refs['noTelepon'] = useRef();
  refs['noTeleponDarurat'] = useRef();
  refs['jerseySizeCode'] = useRef();
  refs['kelaminCode'] = useRef();

  const emailRef = useRef();

  return (
    <div
      className="form-control mb-5"
      style={{ position: "relative", padding: "40px" }}
    >
      <div className="row">
        <h3 style={{ color: "darkslategrey" }}>Peserta {persertaIndex + 1}</h3>
      </div>
      <FormTextField ref={refs['email']} label="Email" icon={EmailIcon} />
      <FormTextField ref={refs['namaKTP']} label="Nama Sesuai KTP" icon={BadgeRoundedIcon} />
      <FormTextField ref={refs['asalKota']} label="Asal Kota" icon={PlaceIcon} />
      <FormTextFieldDouble
        icon={CallIcon}
        label1="No Telepon"
        label2="No Telepon Darurat"
      />
      <DropdownMenuField icon={SquareFootIcon} label="Size Jersey" />
      <RadioGroupField icon={PersonIcon} label="Kelamin" />
      <DropdownMenuField icon={SquareFootIcon} label="Category" />
      <DropdownMenuField icon={SquareFootIcon} label="BRR" />
      <div
        style={{
          
          position: "absolute",
          right: "0.5rem",
          bottom: "-1.4rem",
        }}
        onClick={() => {
          console.log(refs['email'].current.value);
        }}
      ><DeleteForeverIcon style={{
        color: 'red',
        fontSize: '35px',
      }}/></div>
    </div>
  );
};

export default FormPerserta;
