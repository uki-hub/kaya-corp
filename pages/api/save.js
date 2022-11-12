// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }

  const response = await axios.post(
    "https://api.bantengseries.com//api/ticket/save.php",
    req.body
  );

  // console.log(
  //   "====================================================================="
  // );
  // console.log(response);

  res.status(200).json(response.data);
}

// {  "token":"66e4fa55-fdac-4ef9-91b5-733b97d1b862",  "redirect_url":"https://app.sandbox.midtrans.com/snap/v2/vtweb/66e4fa55-fdac-4ef9-91b5-733b97d1b862"}
