import React, { useState } from "react";

const EventContext = React.createContext({
  eventID: null,
  eventData: null,
  onBayar: () => {},
});

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

const _calculatePrice = (brrCategory, listBRR) => {
  let totalPrice = 0;

  listBRR.forEach((d) => {
    const price =
      brrCategory
        .find((c) => c.idBrrCategory == d.categoryCode)
        ?.brr.find((b) => b.idBrr == d.brrCode)?.price ?? 0;

    totalPrice += +price;
  });

  return totalPrice;
};

const _buildPayload = (eventData, listDataPeserta) => {
  const listBRR = listDataPeserta.map((d) => {
    return {
      categoryCode: d.categoryCode,
      brrCode: d.brrCode,
    };
  });

  const result = {
    idEvent: eventData.idEvent,
    bookDate: null,
    pax: listDataPeserta.length,
    amount: _calculatePrice(eventData.brrCategory, listBRR),
    participant: listDataPeserta.map((d) => {
      return {
        email: d.email,
        nmParticipant: d.namaKTP,
        city: d.kota,
        phone: d.noTelepon,
        emergPhone: d.noTeleponDarurat,
        jerseySize: d.jerseySizeCode,
        gender: d.genderCode,
        category: d.categoryCode,
        brr: d.brrCode,
      };
    }),
  };

  return result;
};

export const EventContextProvider = ({ eventID, eventData, children }) => {
  const bayarHandler = (listDataPeserta) => {
    const payload = _buildPayload(eventData, listDataPeserta);

    console.log(payload);
  };

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
