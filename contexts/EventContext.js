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
  // [init.json]
  // {
  //   idEvent: "dolanan",
  //   nmEvent: "Banteng Kediri Ride & Night Run 2022",
  //   descEvent: "Adalah event run and ride terbesar di asia tenggara",
  //   startPeriode: "2022-11-19",
  //   endPeriode: "2022-12-31",
  //   brrCategory: [
  //     {
  //       idBrrCategory: "C01",
  //       nmCategory: "Run",
  //       brr: [
  //         {
  //           idBrr: "B01",
  //           nmBrr: "Run 5K",
  //           price: 100000,
  //         },
  //       ],
  //     },
  //     {
  //       idBrrCategory: "C02",
  //       nmCategory: "Ride",
  //       brr: [
  //         {
  //           idBrr: "B03",
  //           nmBrr: "Fondo Ride",
  //           price: 150000,
  //         },
  //       ],
  //     },
  //   ],
  //   jerseySize: [
  //     {
  //       id: 0,
  //       value: "S",
  //     },
  //   ],
  //   gender: [
  //     {
  //       id: 0,
  //       value: "Man",
  //     },
  //   ],
  // }
  //[listDataPeserta.json]
  // {
  //   email: emailRef.current.value,
  //   namaKTP: namaKTPRef.current.value,
  //   kota: kotaRef.current.value,
  //   noTelepon: noTeleponRef.current.value1,
  //   noTeleponDarurat: noTeleponRef.current.value2,
  //   jerseySizeCode: jerseySizeRef.current.value,
  //   genderCode: genderRef.current.value,
  //   categoryCode: categoryRef.current.value,
  //   brrCode: brrRef.current.value,
  // }
  // [payload.json]
  //   {
  //     "idEvent" : "dolanan",
  //     "bookDate" : "2022-11-19",
  //     "pax" : "2",
  //     "amount" : 200000,
  //     "participant":[
  //         {
  //             "email" : "dummy@gmail.com",
  //             "nmParticipant" : "Guntur",
  //             "city" : "Jakarta",
  //             "phone" :  "081215454545",
  //             "emergPhone": "02153436654",
  //             "jerseySize" : "S",
  //             "gender" : "M",
  //             "category": "Run",
  //             "brr" : "Run 5K"
  //         },
  //         {
  //             "email" : "dummy@yahoo.com",
  //             "nmParticipant" : "Deka",
  //             "city" : "Jakarta",
  //             "phone" :  "085656255544",
  //             "emergPhone": "0855444666",
  //             "jerseySize" : "XL",
  //             "gender" : "M",
  //             "category": "Run",
  //             "brr" : "Run 10K"
  //         }
  //     ]
  // }

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
    console.log(eventData)
    console.log(listDataPeserta)

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
