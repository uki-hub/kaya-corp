import Router from "next/router";

import React from "react";
import { sendPembayaranEvent } from "../repositories/EventRepository";
import { buildPayload, validateDataPeserta } from "./_EventContext";

const EventContext = React.createContext({
  eventID: null,
  eventData: null,
  onBayar: () => {},
  onValidateDataPeserta: (listPeserta) => {},
});

export const EventContextProvider = ({ eventID, eventData, children }) => {
  const validateDataPesertaHandler = (listPeserta) =>
    validateDataPeserta(listPeserta);

  const bayarHandler = async (listDataPeserta) => {
    const payload = buildPayload(eventData, listDataPeserta);

    const data = await sendPembayaranEvent(payload);

    console.log("===================================================");
    console.log(data);

    Router.push({
      pathname: "/thankyou",
      query: { id: JSON.stringify(payload) },
    });
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
