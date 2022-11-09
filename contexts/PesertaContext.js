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
  brr: "" 
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