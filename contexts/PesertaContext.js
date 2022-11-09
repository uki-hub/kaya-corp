import React, { createRef, useRef, useState } from "react";

const _persertaObject = {
  eventCode: "",
  email: "",
  namaKTP: "",
  asalKota: "",
  noTelepon: "",
  noTeleponDarurat: "",
  jerseySizeCode: "",
  genderCode: "",
  category: "",
  brr: "",
  _refs: {
    email: null,
    namaKTP: null,
    asalKota: null,
    noTelepon: null,
    noTeleponDarurat: null,
    jerseySizeCode: null,
    genderCode: null,
    category: null,
    brr: null,
  },
};

const _isDataPesertaNotEmpty = (peserta) => {
  let isNotEmpty = false;
  const keys = Object.keys(peserta);

  for (let i = 0; i < keys.length; i++) {
    const data = peserta[keys[i]].trim();

    if (data != "") {
      isNotEmpty = true;
      break;
    }
  }

  return isNotEmpty;
};

const PesertaContext = React.createContext({
  listPeserta: [],
  onTambahPeserta: () => {},
  onKurangPeserta: () => {},
  onHapusPeserta: (indexPeserta) => {},
});

export const PesertaContextProvider = (props) => {
  const [listPeserta, setListPeserta] = useState([_persertaObject]);

  const tambahPesertaHandler = () => {
    const updatedList = [...listPeserta];
    updatedList.push(_persertaObject);

    setListPeserta(updatedList);
  };

  const kurangPesertaHandlelr = () => {
    const updatedList = [...listPeserta];
    const removedPeserta = updatedList.at(-1);

    // if (removedPeserta && _isDataPesertaNotEmpty(removedPeserta)) {
    //   //not empty pls confirm
    // } else {
    //   updatedList.pop();
    // }

    updatedList.pop();

    setListPeserta(updatedList);
  };

  const hapusPesertaHandler = (indexPeserta) => {
    const updatedList = [...listPeserta];
    updatedList.splice(indexPeserta, 1);

    setListPeserta(updatedList);
  };

  return (
    <PesertaContext.Provider
      value={{
        listPeserta: listPeserta,
        onTambahPeserta: tambahPesertaHandler,
        onKurangPeserta: kurangPesertaHandlelr,
        onHapusPeserta: hapusPesertaHandler,
      }}
    >
      {props.children}
    </PesertaContext.Provider>
  );
};

export default PesertaContext;