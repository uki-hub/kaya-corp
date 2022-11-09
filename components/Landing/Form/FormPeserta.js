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
import React, {
  useContext,
  useRef,
  useImperativeHandle,
  useState,
} from "react";
import EventContext from "../../../contexts/EventContext";

const FormPerserta = React.forwardRef(function _({ persertaIndex }, ref) {
  const eventData = useContext(EventContext).eventData;

  const emailRef = useRef();
  const namaKTPRef = useRef();
  const asalKotaRef = useRef();
  const noTeleponRef = useRef();
  const jerseySizeRef = useRef();
  const genderRef = useRef();
  const categoryRef = useRef();
  const brrRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      email: emailRef.current.value,
      namaKTP: namaKTPRef.current.value,
      asalKota: asalKotaRef.current.value,
      noTelepon: noTeleponRef.current.value1,
      noTeleponDarurat: noTeleponRef.current.value2,
      jerseySizeCode: jerseySizeRef.current.value,
      genderCode: genderRef.current.value,
      categoryCode: categoryRef.current.value,
      brryCode: brrRef.current.value,
    };
  });

  return (
    <div
      className="form-control mb-5"
      style={{ position: "relative", padding: "40px" }}
    >
      <div className="row">
        <h3 style={{ color: "darkslategrey" }}>Peserta {persertaIndex + 1}</h3>
      </div>
      <FormTextField ref={emailRef} label="Email" icon={EmailIcon} />
      <FormTextField
        ref={namaKTPRef}
        label="Nama Sesuai KTPs"
        icon={BadgeRoundedIcon}
      />
      <FormTextField ref={asalKotaRef} label="Asal Kota" icon={PlaceIcon} />
      <FormTextFieldDouble
        ref={noTeleponRef}
        icon={CallIcon}
        label1="No Telepon"
        label2="No Telepon Darurat"
      />
      <DropdownMenuField
        ref={jerseySizeRef}
        data={eventData.jerseySize}
        icon={SquareFootIcon}
        label="Size Jersey"
        defaultSelectedValue={eventData.jerseySize[0].id}
      />
      <RadioGroupField
        ref={genderRef}
        data={eventData.gender}
        icon={PersonIcon}
        label="Kelamin"
      />
      <DropdownMenuField
        ref={categoryRef}
        data={categories}
        icon={SquareFootIcon}
        label="Category"
      />
      <DropdownMenuField ref={brrRef} icon={SquareFootIcon} label="BRR" />

      <div
        style={{
          
          position: "absolute",
          right: "0.5rem",
          bottom: "-1.4rem",
        }}
        onClick={() => {
          console.log(emailRef.current?.value);
        }}
      ><DeleteForeverIcon style={{
        color: 'red',
        fontSize: '35px',
      }}/></div>
    </div>
  );
});

export default FormPerserta;
