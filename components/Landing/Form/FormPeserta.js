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
  ConfirmationNumber as ConfirmationNumberIcon,
} from "@mui/icons-material";
import React, {
  useContext,
  useRef,
  useImperativeHandle,
  useState,
  useEffect,
} from "react";
import EventContext from "../../../contexts/EventContext";
import DropdownMenuFieldDouble from "../../UI/DropdownMenuFieldDouble";
import PesertaContext from "../../../contexts/PesertaContext";

const FormPerserta = React.forwardRef(function _(
  { persertaIndex, onDeletePeserta },
  ref
) {
  const [_s, __s] = useState(0);
  const _f = () => __s(_s + 1);

  const [selectedCategoryCode, setSelectedCategoryCode] = useState();

  const eventData = useContext(EventContext).eventData;

  const emailRef = useRef("uki");
  const namaKTPRef = useRef();
  const kotaRef = useRef();
  const noTeleponRef = useRef();
  const jerseySizeRef = useRef();
  const genderRef = useRef();
  // const categoryRef = useRef();
  // const brrRef = useRef();
  const brrCategoryRef = useRef();

  const categories = eventData.brrCategory.map((d) => {
    return { id: d.idBrrCategory, value: d.nmCategory, brr: d.brr };
  });

  const listBRR = eventData.brrCategory
    .find((b) => b.idBrrCategory == selectedCategoryCode)
    ?.brr?.map((b) => {
      return {
        id: b.idBrr,
        value: b.nmBrr,
      };
    });

  useImperativeHandle(ref, () => {
    return {
      email: emailRef.current.value,
      namaKTP: namaKTPRef.current.value,
      kota: kotaRef.current.value,
      noTelepon: noTeleponRef.current.value1,
      noTeleponDarurat: noTeleponRef.current.value2,
      jerseySizeCode: jerseySizeRef.current.value,
      genderCode: genderRef.current.value,
      // categoryCode: categoryRef.current.value,
      // brrCode: brrRef.current.value,
      categoryCode: brrCategoryRef.current.value1,
      brrCode: brrCategoryRef.current.value2,
    };
  });

  const categoryChangeHandler = (value) => setSelectedCategoryCode(value);

  return (
    <div
      className="form-control mb-5"
      style={{ position: "relative", padding: "40px" }}
    >
      <div className="row">
        <h3 style={{ color: "darkslategrey" }}>Peserta {persertaIndex + 1}</h3>
      </div>
      <FormTextField
        ref={emailRef}
        type="email"
        label="Email"
        icon={EmailIcon}
      />
      <FormTextField
        ref={namaKTPRef}
        label="Nama Sesuai KTPs"
        icon={BadgeRoundedIcon}
      />
      <FormTextField ref={kotaRef} label="Asal Kota" icon={PlaceIcon} />
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
      />
      <RadioGroupField
        ref={genderRef}
        data={eventData.gender}
        icon={PersonIcon}
        label="Kelamin"
        defaultValue={eventData.gender[0].id}
      />
      {/* <DropdownMenuField
        ref={categoryRef}
        data={categories}
        icon={ConfirmationNumberIcon}
        label="Category"
        onChange={categoryChangeHandler}
      />
      <DropdownMenuField
        ref={brrRef}
        data={listBRR}
        icon={SquareFootIcon}
        label="BRR"
        onChange={_f}
      /> */}
      <DropdownMenuFieldDouble
        ref={brrCategoryRef}
        data1={categories}
        data2={listBRR}
        label1="Category"
        label2="BRR"
        onChange1={categoryChangeHandler}
        onChange2={_f}
        icon={ConfirmationNumberIcon}
      />

      {persertaIndex == 0 ? null : (
        <div
          style={{
            position: "absolute",
            right: "0.5rem",
            bottom: "-1.4rem",
          }}
          onClick={onDeletePeserta}
        >
          <DeleteForeverIcon
            style={{
              color: "red",
              fontSize: "35px",
            }}
          />
        </div>
      )}
    </div>
  );
});

export default FormPerserta;
