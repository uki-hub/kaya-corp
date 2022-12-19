import Router from "next/router";

import React, { useContext, useState } from "react";
import { sendPembayaranEventRepo } from "../repositories/EventRepository";
import AuthContext from "./AuthContext";
import { buildPayload, validateDataPeserta } from "./_EventContext";

const EventContext = React.createContext({
  eventID: null,
  eventData: null,
  onBayar: () => {},
  onValidateDataPeserta: (listPeserta) => {},
});

export const EventContextProvider = ({
  eventID,
  eventData,
  onSubmitted,
  children,
}) => {
  const auth = useContext(AuthContext);

  const validateDataPesertaHandler = (listPeserta) =>
    validateDataPeserta(listPeserta);

  const bayarHandler = async (listDataPeserta) => {
    onSubmitted();

    const payload = buildPayload(auth.authData, eventData, listDataPeserta);

    console.log(payload);
    // const data = await sendPembayaranEventRepo(payload);

    window.location = data.redirect_url;
  };

  return (
    <EventContext.Provider
      value={{
        eventID: eventID,
        eventData: eventData,
        onBayar: bayarHandler,
        onValidateDataPeserta: validateDataPesertaHandler,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};

export default EventContext;
