import Image from "next/image";

import img1 from "/public/assets/images/shap/home_speaker_memphis1.png";
import img2 from "/public/assets/images/shap/home_speaker_memphis2.png";
import img3 from "/public/assets/images/shap/home_speaker_memphis3.png";
import FormPerserta from "./FormPeserta";
import { useContext, useEffect, useRef, useState } from "react";
import PesertaContext from "../../../contexts/PesertaContext";
import EventContext from "../../../contexts/EventContext";
import DaScroll from "../../../lib/DaScroll";

export default function LandingForm(props) {
  const [errorForm, setErrorForm] = useState({
    invalidIndexPeserta: null,
    invalidFieldName: null,
  });

  const actionRef = useRef();

  const eventCtx = useContext(EventContext);
  const pesertaCtx = useContext(PesertaContext);

  const tambahPesertaHandler = () => {
    pesertaCtx.onTambahPeserta();
    DaScroll("ticket-form-actions");
  };

  const updateDataPesertaHandler = (indexPeserta, dataPeserta) =>
    pesertaCtx.onUpdatePeserta(indexPeserta, dataPeserta);

  const deletePesertaHandler = (indexPeserta) =>
    pesertaCtx.onHapusPeserta(indexPeserta);

  const bayarHandler = () => {
    const listPeserta = [...pesertaCtx.listPeserta];

    const invalidForm = eventCtx.onValidateDataPeserta(listPeserta);

    if (!invalidForm) {
      eventCtx.onBayar(listPeserta);
    } else {
      setErrorForm(invalidForm);
    }
  };

  return (
    <section
      id="ts-speakers"
      className="ts-speakers"
      style={{
        backgroundImage: "url(/assets/images/speakers/speaker_bg.png)",
      }}
    >
      <div id="ticket-form-actions" className="container">
        <h1>Form Registration</h1>
        <br />
        {pesertaCtx.listPeserta.map((d, i) => (
          <FormPerserta
            key={i}
            indexPeserta={i}
            dataPeserta={d}
            onEditingComplete={(data) => updateDataPesertaHandler(i, data)}
            onDeletePeserta={() => deletePesertaHandler(i)}
            errorForm={errorForm.invalidIndexPeserta == i && errorForm}
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

      <div ref={actionRef} className="speaker-shap">
        <Image className="shap1" src={img1} alt="" />
        <Image className="shap2" src={img2} alt="" />
        <Image className="shap3" src={img3} alt="" />
      </div>
    </section>
  );
}
