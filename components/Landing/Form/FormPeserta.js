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
import { scrollTo } from "../../../lib/DaScroll";

const FormPerserta = ({
  indexPeserta,
  dataPeserta,
  onEditingComplete,
  onDeletePeserta,
  errorForm,
}) => {
  const [_s, __s] = useState(0);
  const _f = () => __s(_s + 1);

  const [selectedCategoryCode, setSelectedCategoryCode] = useState();

  const eventData = useContext(EventContext).eventData;

  const refs = {
    email: useRef(),
    namaKTP: useRef(),
    kota: useRef(),
    noTelepon: useRef(),
    jerseySizeCode: useRef(),
    genderCode: useRef(),
    brrCode: useRef(),
  };

  // const emailRef = useRef();
  // const namaKTPRef = useRef();
  // const kotaRef = useRef();
  // const noTeleponRef = useRef();
  // const jerseySizeRef = useRef();
  // const genderRef = useRef();
  // // const categoryRef = useRef();
  // // const brrRef = useRef();
  // const brrCategoryRef = useRef();

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

  // const formBlurHandler = () =>
  //   onEditingComplete({
  //     email: emailRef.current.value,
  //     namaKTP: namaKTPRef.current.value,
  //     kota: kotaRef.current.value,
  //     noTelepon: noTeleponRef.current.value1,
  //     noTeleponDarurat: noTeleponRef.current.value2,
  //     jerseySizeCode: jerseySizeRef.current.value,
  //     genderCode: genderRef.current.value,
  //     categoryCode: brrCategoryRef.current.value1,
  //     brrCode: brrCategoryRef.current.value2,
  //   });

  const formBlurHandler = () =>
    onEditingComplete({
      email: refs.email.current.value,
      namaKTP: refs.namaKTP.current.value,
      kota: refs.kota.current.value,
      noTelepon: refs.noTelepon.current.value1,
      noTeleponDarurat: refs.noTelepon.current.value2,
      jerseySizeCode: refs.jerseySizeCode.current.value,
      genderCode: refs.genderCode.current.value,
      categoryCode: refs.brrCode.current.value1,
      brrCode: refs.brrCode.current.value2,
    });

  const categoryChangeHandler = (value) => setSelectedCategoryCode(value);

  useEffect(() => {
    if (errorForm) {
      refs[errorForm.invalidFieldName].current.focus();
    }
  }, [refs, errorForm]);

  return (
    <div
      className="form-control mb-5"
      style={{ position: "relative", padding: "40px" }}
      onBlur={formBlurHandler}
    >
      <div className="row">
        <h3 style={{ color: "darkslategrey" }}>Peserta {indexPeserta + 1}</h3>
      </div>
      <FormTextField
        // ref={emailRef}
        ref={refs.email}
        type="email"
        label="Email"
        icon={EmailIcon}
        initializeValue={dataPeserta.email}
      />
      <FormTextField
        // ref={namaKTPRef}
        ref={refs.namaKTP}
        label="Nama Sesuai KTPs"
        icon={BadgeRoundedIcon}
        initializeValue={dataPeserta.namaKTP}
      />
      <FormTextField
        // ref={kotaRef}
        ref={refs.kota}
        label="Asal Kota"
        icon={PlaceIcon}
        initializeValue={dataPeserta.kota}
      />
      <FormTextFieldDouble
        // ref={noTeleponRef}
        ref={refs.noTelepon}
        icon={CallIcon}
        label1="No Telepon"
        label2="No Telepon Darurat"
        initializeValue1={dataPeserta.noTelepon}
        initializeValue2={dataPeserta.noTeleponDarurat}
      />
      <DropdownMenuField
        // ref={jerseySizeRef}
        ref={refs.jerseySizeCode}
        data={eventData.jerseySize}
        icon={SquareFootIcon}
        label="Size Jersey"
        initializeValue={dataPeserta.jerseySizeCode}
      />
      <RadioGroupField
        // ref={genderRef}
        ref={refs.genderCode}
        data={eventData.gender}
        icon={PersonIcon}
        label="Kelamin"
        initializeValue={eventData.gender[0].id}
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
        // ref={brrCategoryRef}
        ref={refs.brrCode}
        icon={ConfirmationNumberIcon}
        data1={categories}
        data2={listBRR}
        label1="Category"
        label2="BRR"
        onChange1={categoryChangeHandler}
        onChange2={_f}
        initializeValue1={dataPeserta.categoryCode}
        initializeValue2={dataPeserta.brrCode}
      />

      {indexPeserta == 0 ? null : (
        <div
          style={{
            position: "absolute",
            right: "0.5rem",
            bottom: "-1.4rem",
          }}
          onClick={() => {
            refs.email.current.focus();
          }}
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
};

export default FormPerserta;
