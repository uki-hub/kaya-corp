import React, { createRef, useRef, useState } from "react";
import { signInRepo } from "../repositories/AuthRepository";

const _EMPTY_USER = {
  userid: null,
  password: null,
  fullname: null,
  email: null,
  stsdelete: null,
  lastupdate: null,
};

const UserContext = React.createContext({
  userData: {},
  isSigned: () => {},
  login: () => {},
  logOut: () => {},
});

export const UserContextProvider = (props) => {
  const [userData, setUserData] = useState(_EMPTY_USER);
  const [warning, setWarning] = useState();

  const isSigned = () => userData?.userid != null;

  const login = async (username, password) => {
    const data = await signInRepo({
      username,
      password,
    });

    if (data == null || !data.isSuccess) {
      setWarning(data.data ?? "Terjadi error :(");
      return false;
    }

    setUserData(data.data);
    return true;
  };

  return (
    <PesertaContext.Provider
      value={{
        listPeserta: listPeserta,
        onTambahPeserta: tambahPesertaHandler,
        onKurangPeserta: kurangPesertaHandlelr,
        onHapusPeserta: hapusPesertaHandler,
        onUpdatePeserta: updateDataPeserta,
      }}
    >
      {props.children}
    </PesertaContext.Provider>
  );
};

export default PesertaContext;
