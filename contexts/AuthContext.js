import React, { createRef, useEffect, useRef, useState } from "react";
import {
  forgotPasswordRepo,
  registerRepo,
  signInRepo,
} from "../repositories/AuthRepository";
import StorageService from "../services/StorageService";
import jsonwebtoken from "jsonwebtoken";
import CookieService from "../services/CookieService";

const _EMPTY = {
  userid: null,
  password: null,
  fullname: null,
  email: null,
  stsdelete: null,
  lastupdate: null,
};

const AuthContext = React.createContext({
  authData: {},
  isSigned: () => {},
  onLogin: async (username, password) => {},
  onLogout: () => {},
  onRegister: async (payload) => {},
  onForgotPassword: async (email) => {},
  onSetAuthData: (authData) => {},
  warning: null,
});

const AuthContextProvider = (props) => {
  const [authData, setAuthData] = useState(props.authData ?? _EMPTY);
  const [warning, setWarning] = useState([]);

  useEffect(() => {
    // const authData = StorageService.authData();
    // if (authData?.userid) _setAuthData(authData);
  }, []);

  const _setWarning = (value) => {
    setWarning(value ?? "Terjadi error :(");
    return false;
  };

  const isSigned = () => authData?.userid != null;

  const loginHandler = async (username, password) => {
    const data = await signInRepo({
      username,
      password,
    });

    if (data == null || !data.isSuccess) return _setWarning(data.data);

    setAuthData(data.data);

    const token = jsonwebtoken.sign(data.data, "banteng");
    CookieService.setToken(token);

    return true;
  };

  const registerHandler = async (formData) => {
    const data = await registerRepo({
      userid: formData.userid,
      password: formData.password,
      email: formData.email,
      fullname: formData.fullname,
    });

    if (data == null || !data.isSuccess) return _setWarning(data.data);

    return await loginHandler(formData.userid, formData.password);
  };

  const forgotPasswordHandler = async (email) => {
    const data = forgotPasswordRepo(email);

    if (data == null || !data.isSuccess) return _setWarning(data.message);

    return true;
  };

  const logoutHandler = () => {
    CookieService.clearToken();
    setAuthData(_EMPTY);
  };

  const setAuthDataHandler = (authData) => setAuthData(authData);

  return (
    <AuthContext.Provider
      value={{
        authData: authData,
        isSigned: isSigned,
        onLogin: loginHandler,
        onLogout: logoutHandler,
        onRegister: registerHandler,
        onForgotPassword: forgotPasswordHandler,
        onSetAuthData: setAuthDataHandler,
        warnings: warning,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider };
export default AuthContext;
