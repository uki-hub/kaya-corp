// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  res.status(200).json({
    idEvent: "dolanan",
    nmEvent: "Banteng Kediri Ride & Night Run 2022",
    descEvent: "Adalah event run and ride terbesar di asia tenggara",
    startPeriode: "2022-11-19",
    endPeriode: "2022-12-31",
    brrCategory: [
      {
        idBrrCategory: "C01",
        nmCategory: "Run",
        brr: [
          {
            idBrr: "B01",
            nmBrr: "Run 5K",
            price: 1,
          },
          {
            idBrr: "B02",
            nmBrr: "Run 10K",
            price: 2,
          },
        ],
      },
      {
        idBrrCategory: "C02",
        nmCategory: "Ride",
        brr: [
          {
            idBrr: "B03",
            nmBrr: "Fondo Ride",
            price: 3,
          },
          {
            idBrr: "B04",
            nmBrr: "Fun Ride",
            price: 4,
          },
        ],
      },
    ],
    jerseySize: [
      {
        id: 0,
        value: "S",
      },
      {
        id: 1,
        value: "M",
      },
      {
        id: 2,
        value: "L",
      },
      {
        id: 3,
        value: "XL",
      },
      {
        id: 4,
        value: "XXL",
      },
    ],
    gender: [
      {
        id: 0,
        value: "Man",
      },
      {
        id: 2,
        value: "Woman",
      },
    ],
  });
}