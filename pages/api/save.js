// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).send();
    return;
  }

  if(req.body['apiKey'] == null || req.body['apiKey'] != process.env['api-key']) {
    res.status(400).send();
    return;
  }

  const response = await axios.post(
    "https://api.bantengseries.com//api/ticket/save.php",
    req.body,
    {
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "Axios 0.21.1",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );

  // console.log(
  //   "====================================================================="
  // );
  // console.log(response);

  res.status(200).json(response.data);
}

// {  "token":"66e4fa55-fdac-4ef9-91b5-733b97d1b862",  "redirect_url":"https://app.sandbox.midtrans.com/snap/v2/vtweb/66e4fa55-fdac-4ef9-91b5-733b97d1b862"}
