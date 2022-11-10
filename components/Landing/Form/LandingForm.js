import Image from "next/image";

import img1 from "/public/assets/images/shap/home_speaker_memphis1.png";
import img2 from "/public/assets/images/shap/home_speaker_memphis2.png";
import img3 from "/public/assets/images/shap/home_speaker_memphis3.png";
import FormPerserta from "./FormPeserta";
import { useContext, useEffect, useRef, useState } from "react";
import PesertaContext from "../../../contexts/PesertaContext";
import EventContext from "../../../contexts/EventContext";

export default function LandingForm(props) {
  const [errorForm, setErrorForm] = useState({
    invalidIndexPeserta: null,
    invalidFieldName: null,
  });

  const eventCtx = useContext(EventContext);
  const pesertaCtx = useContext(PesertaContext);

  const tambahPesertaHandler = () => pesertaCtx.onTambahPeserta();

  const updateDataPesertaHandler = (indexPeserta, dataPeserta) =>
    pesertaCtx.onUpdatePeserta(indexPeserta, dataPeserta);

  const deletePesertaHandler = (indexPeserta) =>
    pesertaCtx.onHapusPeserta(indexPeserta);

  const validateForms = (listPeserta) => {
    let isValid = true;
    let invalidIndexPeserta;
    let invalidFieldName;

    for (let i = 0; i < listPeserta.length; i++) {
      const peserta = listPeserta[i];

      const pesertaKeys = Object.keys(peserta);

      for (let j = 0; j < pesertaKeys.length; j++) {
        const key = pesertaKeys[j];

        if (peserta[key]?.toString().trim() == "") {
          isValid = false;
          invalidIndexPeserta = i;
          invalidFieldName = key;

          console.log("break1");

          break;
        }
      }

      if (!isValid) {
        console.log("break2");
        break;
      }
    }

    return isValid
      ? null
      : {
          invalidIndexPeserta,
          invalidFieldName,
        };
  };

  const bayarHandler = () => {
    const listPeserta = [...pesertaCtx.listPeserta];

    const invalidForm = validateForms(listPeserta);
    console.error(invalidForm);

    if (!invalidForm) {
      eventCtx.onBayar(listPeserta);
    } else {
      setErrorForm (invalidForm);
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

      <div className="speaker-shap">
        <Image className="shap1" src={img1} alt="" />
        <Image className="shap2" src={img2} alt="" />
        <Image className="shap3" src={img3} alt="" />
      </div>
    </section>
  );
}
