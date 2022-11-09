import Image from "next/image";

import img1 from "/public/assets/images/shap/home_speaker_memphis1.png";
import img2 from "/public/assets/images/shap/home_speaker_memphis2.png";
import img3 from "/public/assets/images/shap/home_speaker_memphis3.png";
import FormPerserta from "./FormPeserta";
import { useContext } from "react";
import PesertaContext from "../../../contexts/PesertaContext";

export default function LandingForm(props) {
  const pesertaCtx = useContext(PesertaContext);

  if (pesertaCtx.listPeserta.length == 0) {
    return null;
  }

  return (
    <section
      id="ts-speakers"
      className="ts-speakers"
      style={{
        backgroundImage: "url(/assets/images/speakers/speaker_bg.png)",
      }}
    >
      <div className="container">
        <h1>Form Registration</h1>
        <br />
        {/* <ButtonGro */}
        {pesertaCtx.listPeserta.map((_, i) => (
          <FormPerserta key={i} persertaIndex={i} />
        ))}
        {/* <button
          className="btn mb-3"
          onClick={pesertaCtx.onPesanTiket}
          style={{ backgroundColor: "yellowgreen", float: "right" }}
        >
          TAMBAH PESERTA
        </button>
        <br />
        <button
          className="btn col mb-3"
          onClick={pesertaCtx.onPesanTiket}
          style={{ backgroundColor: "indianred" }}
        >
          BAYAR
        </button> */}
        <div className="row col-12 ">
          <button
            className="btn col mb-3 mr-1"
            onClick={pesertaCtx.onPesanTiket}
            style={{ backgroundColor: "yellowgreen", float: "right" }}
          >
            TAMBAH PESERTA
          </button>
          <button
            className="btn col"
            onClick={pesertaCtx.onPesanTiket}
            style={{ backgroundColor: "indianred" }}
          >
            BAYAR
          </button>
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
