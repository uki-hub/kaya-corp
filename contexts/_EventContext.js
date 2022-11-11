const _validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const validateDataPeserta = (listPeserta) => {
  let isValid = true;
  let invalidIndexPeserta;
  let invalidFieldName;

  for (let i = 0; i < listPeserta.length; i++) {
    const peserta = listPeserta[i];

    const pesertaKeys = Object.keys(peserta);

    for (let j = 0; j < pesertaKeys.length; j++) {
      const key = pesertaKeys[j];

      if (peserta[key] == null || peserta[key]?.toString().trim() == "") {
        isValid = false;
        invalidIndexPeserta = i;
        invalidFieldName = key;
      }

      if (key == "email")
        if (!_validateEmail(peserta[key]?.toString().trim())) {
          isValid = false;
          invalidIndexPeserta = i;
          invalidFieldName = key;
        }

      if (!isValid) break;
    }

    if (!isValid) break;
  }

  console.log(
    "======================================================================="
  );
  console.log({
    invalidIndexPeserta,
    invalidFieldName,
  });

  return isValid
    ? null
    : {
        invalidIndexPeserta,
        invalidFieldName,
      };
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

const buildPayload = (eventData, listDataPeserta) => {
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

export { buildPayload, validateDataPeserta };
