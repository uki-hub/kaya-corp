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
  DeleteForever as DeleteForeverIcon,
} from "@mui/icons-material";
import PesertaContext from "../../../contexts/PesertaContext";
import { useContext, useEffect, useRef } from "react";
import EventContext from "../../../contexts/EventContext";

const FormPerserta = ({ persertaIndex }) => {
  const eventData = useContext(EventContext).eventData;
  const pesertaCtx = useContext(PesertaContext);

  console.log(pesertaCtx.listPeserta[persertaIndex]._refs);

  const refs = pesertaCtx.listPeserta[persertaIndex]._refs;
  // refs["email"] = createRef();
  // refs["namaKTP"] = createRef();
  // refs["asalKota"] = createRef();
  // refs["noTelepon"] = createRef();
  // refs["noTeleponDarurat"] = createRef();
  // refs["jerseySizeCode"] = createRef();
  // refs["genderCode"] = createRef();
  // refs["category"] = createRef();
  // refs["brr"] = createRef();

  const categories = eventData.brrCategory.map((d) => {
    return { id: d.idBrrCategory, value: d.nmCategory, brr: d.brr };
  });

  return (
    <div
      className="form-control mb-5"
      style={{ position: "relative", padding: "40px" }}
    >
      <div className="row">
        <h3 style={{ color: "darkslategrey" }}>Peserta {persertaIndex + 1}</h3>
      </div>
      <FormTextField ref={refs["email"]} label="Email" icon={EmailIcon} />
      <FormTextField
        ref={refs["namaKTP"]}
        label="Nama Sesuai KTP"
        icon={BadgeRoundedIcon}
      />
      <FormTextField
        ref={refs["asalKota"]}
        label="Asal Kota"
        icon={PlaceIcon}
      />
      <FormTextFieldDouble
        icon={CallIcon}
        label1="No Telepon"
        label2="No Telepon Darurat"
      />
      <DropdownMenuField
        ref={refs["jerseySizeCode"]}
        data={eventData.jerseySize}
        icon={SquareFootIcon}
        label="Size Jersey"
      />
      <RadioGroupField
        data={eventData.gender}
        icon={PersonIcon}
        label="Kelamin"
      />
      <DropdownMenuField
        data={categories}
        icon={SquareFootIcon}
        label="Category"
      />
      <DropdownMenuField icon={SquareFootIcon} label="BRR" />
      <div
        style={{
          position: "absolute",
          right: "0.5rem",
          bottom: "-1.4rem",
        }}
        onClick={() => {
           console.log(refs["jerseySizeCode"].current?.value);
        }}
      >
        <DeleteForeverIcon
          style={{
            color: "red",
            fontSize: "35px",
          }}
        />
      </div>
    </div>
  );
};

export default FormPerserta;
