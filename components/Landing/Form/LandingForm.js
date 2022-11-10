import Image from "next/image";

import img1 from "/public/assets/images/shap/home_speaker_memphis1.png";
import img2 from "/public/assets/images/shap/home_speaker_memphis2.png";
import img3 from "/public/assets/images/shap/home_speaker_memphis3.png";
import FormPerserta from "./FormPeserta";
import { useContext, useEffect, useRef, useState } from "react";
import PesertaContext from "../../../contexts/PesertaContext";
import EventContext from "../../../contexts/EventContext";

export default function LandingForm(props) {
  const [_s, __s] = useState(0);
  const _f = () => __s(_s + 1);

  const eventCtx = useContext(EventContext);
  const pesertaCtx = useContext(PesertaContext);

  const tambahPesertaHandler = () => {
    // _f();
    pesertaCtx.onTambahPeserta();
  };

  const updateDataPesertaHandler = (indexPeserta, dataPeserta) => {
    pesertaCtx.onUpdatePeserta(indexPeserta, dataPeserta);
  };

  const deletePesertaHandler = (indexPeserta) => {
    // _f();
    pesertaCtx.onHapusPeserta(indexPeserta);
  };

  const bayarHandler = () => {
    // _f();
    eventCtx.onBayar(pesertaCtx.listPeserta);
  };

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
        {pesertaCtx.listPeserta.map((d, i) => (
          <FormPerserta
            key={i}
            indexPeserta={i}
            dataPeserta={d}
            onEditingComplete={(data) => updateDataPesertaHandler(i, data)}
            onDeletePeserta={deletePesertaHandler}
          />
        ))}

        <div className="row m-0">
          <button
            className="btn col-6"
            style={{ backgroundColor: "yellowgreen" }}
            onClick={tambahPesertaHandler}
          >
            TAMBAH PESERTA
          </button>
          <div className="col-6 pr-0">
            <button
              className="btn w-100"
              style={{ backgroundColor: "indianred" }}
              onClick={bayarHandler}
            >
              BAYAR
            </button>
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
