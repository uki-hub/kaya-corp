import React, { useState } from "react";

const EventContext = React.createContext({
  eventID: null,
  eventData: null,
  onBayar: () => {},
});

export const EventContextProvider = ({ eventID, eventData, children }) => {
  const bayarHandler = (listPeserta) => {};

  return (
    <EventContext.Provider
      value={{
        eventID: eventID,
        eventData: eventData,
        onBayar: bayarHandler,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};

export default EventContext;
