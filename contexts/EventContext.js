import Router from "next/router";

import React from "react";
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

  const bayarHandler = (listDataPeserta) => {
    const payload = buildPayload(eventData, listDataPeserta);

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
