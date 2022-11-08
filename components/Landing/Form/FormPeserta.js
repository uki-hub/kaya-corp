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
} from "@mui/icons-material";

const FormPerserta = ({ persertaIndex }) => {
  return (
    <div
      className="form-control mb-5"
      style={{ position: "relative", padding: "40px" }}
    >
      <div className="row">
        <h3 style={{ color: "darkslategrey" }}>Peserta {persertaIndex + 1}</h3>
      </div>
      <FormTextField label="Email" icon={EmailIcon} />
      <FormTextField label="Nama Sesuai KTP" icon={BadgeRoundedIcon} />
      <FormTextField label="Asal Kota" icon={PlaceIcon} />
      <FormTextFieldDouble
        icon={CallIcon}
        label1="No Telepon"
        label2="No Telepon Darurat"
      />
      <DropdownMenuField icon={SquareFootIcon} label="Size Jersey" />
      <RadioGroupField icon={PersonIcon} label="Kelamin" />
      <div
        style={{
          position: "absolute",
          right: "0.5rem",
          bottom: "-1.2rem",
        }}
      ></div>
    </div>
  );
};

export default FormPerserta;
