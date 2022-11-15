import axios from "axios";

const getEventInitializeData = async (eventId) => {
  const response = await axios.post(
    "https://api.bantengseries.com//api/ticket/initialize.php",
    {
      idevent: eventId,
    },
    {
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "Axios 0.21.1",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );

  return response.data;
};

const sendPembayaranEvent = async (payload) => {
  const response = await axios.post("/api/save", payload, {
    headers: {
      "Content-Type": "application/json",
      "User-Agent": "Axios 0.21.1",
      "Access-Control-Allow-Origin": "*",
    },
  });

  // console.log(
  //   "================================================================"
  // );
  // console.log(response);

  return response.data;
};

// const getConfirmation = async (transactionId) => {
//   const response = await axios.post(
//     "https://api.bantengseries.com/api/ticket/confirmation.php",
//     {
//       transactionId: transactionId,
//     }
//   );

//   console.log(
//     "================================================================"
//   );
//   console.log(response);

//   return response.data;
// };

export { getEventInitializeData, sendPembayaranEvent };
