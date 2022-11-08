import { Button, ButtonGroup } from "@mui/material";
import {
  PeopleAlt as PeopleAltIcon,
  Add as AddIcon,
  Remove as RemoveIcon,
} from "@mui/icons-material";

const EventRegistration = () => {
  return (
    <div className="col-sm-4">
      <h2 className="column-title">
        <span>Jadi salah satu bagian dari event kami!</span>
        Daftar sekarang juga gais
      </h2>
      <div className="row m-0 mb-2 align-items-end ">
        <PeopleAltIcon style={{ color: "grey", fontSize: "35px" }} />
        &nbsp;
        <span>Jumlah pendaftar</span>
      </div>

      <ButtonGroup
        fullWidth
        variant="outlined"
        aria-label="outlined button group"
      >
        <Button
          style={{
            color: "white",
            backgroundColor: "palevioletred",
            padding: 0,
            fontSize: "20px",
          }}
        >
          -
        </Button>
        <Button style={{ pointerEvents: "none" }}>0</Button>
        <Button
          style={{
            color: "white",
            backgroundColor: "indianred",
            padding: 0,
            fontSize: "20px",
          }}
        >
          +
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default EventRegistration;
