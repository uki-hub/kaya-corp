import Image from "next/image";

import img1 from "/public/assets/images/shap/home_speaker_memphis1.png";
import img2 from "/public/assets/images/shap/home_speaker_memphis2.png";
import img3 from "/public/assets/images/shap/home_speaker_memphis3.png";
import FormPerserta from "./FormPeserta";
import { useContext, useRef, useState } from "react";
import PesertaContext from "../../../contexts/PesertaContext";

export default function LandingForm(props) {
  const pesertaCtx = useContext(PesertaContext);

<<<<<<< HEAD
  const formsRef = useRef([]);

  const [_s, __s] = useState(0);
  const _f = () => __s(_s + 1);

  const tambahPesertaHandler = () => {
    pesertaCtx.onTambahPeserta();
  };
=======
  if (pesertaCtx.listPeserta.length == 0) {
    return null;
  }
>>>>>>> d07e45caaf0fccd90f8160c3c31bdd4019e787b3

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
        {pesertaCtx.listPeserta.map((_, i) => (
          <FormPerserta
            ref={(e) => (formsRef.current[i] = e)}
            key={i}
            persertaIndex={i}
          />
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
<<<<<<< HEAD
=======
            onClick={pesertaCtx.onPesanTiket}
>>>>>>> d07e45caaf0fccd90f8160c3c31bdd4019e787b3
            style={{ backgroundColor: "yellowgreen", float: "right" }}
            onClick={tambahPesertaHandler}
          >
            TAMBAH PESERTA
          </button>
          <button
            className="btn col"
<<<<<<< HEAD
=======
            onClick={pesertaCtx.onPesanTiket}
>>>>>>> d07e45caaf0fccd90f8160c3c31bdd4019e787b3
            style={{ backgroundColor: "indianred" }}
            // onClick={eventCtx.onBayar}
            onClick={() => {
              _f();
              console.log(formsRef.current);
            }}
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
