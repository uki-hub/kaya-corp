import Image from "next/image";
import {
  TextField,
  Container,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import {
  Email as EmailIcon,
  BadgeRounded as BadgeRoundedIcon,
  Place as PlaceIcon,
  Call as CallIcon,
  SquareFoot as SquareFootIcon,
  Person as PersonIcon,
  GroupAddRounded as GroupAddIcon,
} from "@mui/icons-material";

import img1 from "/public/assets/images/shap/home_speaker_memphis1.png";
import img2 from "/public/assets/images/shap/home_speaker_memphis2.png";
import img3 from "/public/assets/images/shap/home_speaker_memphis3.png";
import FormTextField from "./FormTextField";
import FormTextFieldDouble from "./FormTextFieldDouble";
import DropdownMenu from "./DropdownMenu";
import RadioGroupField from "./RadioGroupField";
import CircleContainer from "./CircleContainer";

export default function LandingForm(props) {
  return (
    <section
      id="ts-speakers"
      className="ts-speakers"
      style={{
        backgroundImage: "url(assets/images/speakers/speaker_bg.png)",
      }}
    >
      <div className="container">
        <h1>Form Registration</h1>
        <br />
        <div
          className="form-control mb-5"
          style={{ position: "relative", padding: "40px" }}
        >
          <div className="row">
            <h3 style={{ color: "darkslategrey" }}>Peserta 1</h3>
          </div>
          <FormTextField label="Email" icon={EmailIcon} />
          <FormTextField label="Nama Sesuai KTP" icon={BadgeRoundedIcon} />
          <FormTextField label="Asal Kota" icon={PlaceIcon} />
          <FormTextFieldDouble
            icon={CallIcon}
            label1="No Telepon"
            label2="No Telepon Darurat"
          />
          <DropdownMenu icon={SquareFootIcon} label="Size Jersey" />
          <RadioGroupField icon={PersonIcon} label="Kelamin" />
          <div
            style={{
              position: "absolute",
              right: "0.5rem",
              bottom: "-1.2rem",
            }}
          >
            <CircleContainer>
              <GroupAddIcon
                style={{ fontSize: "30px", color: "white", margin: "10.5px" }}
              />
            </CircleContainer>
          </div>
        </div>
      </div>

      <div className="speaker-shap">
        <Image className="shap1" src={img1} alt="" />
        <Image className="shap2" src={img2} alt="" />
        <Image className="shap3" src={img3} alt="" />
      </div>
    </section>
  );
}
