// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";
import { sendPembayaranEvent } from "../../repositories/EventRepository";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }

  const response = await axios.post(
    "https://api.bantengseries.com//api/ticket/initialize.php",
    req.body
  );

  //   console.log(
  //     "====================================================================="
  //   );
  //   console.log(response.data);

  res.status(200).json(req.body);
}

// {
//   idEvent: 'brr',
//   nmEvent: 'nmEvent',
//   descEvent: 'Banteng series 2022',
//   startPeriode: '2022-11-26',
//   endPeriode: '2022-11-27',
//   brrCategory: [
//     { idBrrCategory: '1', nmCategory: 'Run', brr: [Array] },
//     { idBrrCategory: '2', nmCategory: 'Ride', brr: [Array] }
//   ],
//   jerseySize: [
//     { id: 0, value: 'S' },
//     { id: 1, value: 'M' },
//     { id: 2, value: 'L' },
//     { id: 3, value: 'XL' },
//     { id: 4, value: 'XXL' }
//   ],
//   gender: [ { id: 0, value: 'Man' }, { id: 1, value: 'Woman' } ]
// }
