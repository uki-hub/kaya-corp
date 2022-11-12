import axios from "axios";

const getEventInitializeData = async (eventId) => {
  const response = await axios.post(
    "https://api.bantengseries.com//api/ticket/initialize.php",
    {
      idevent: eventId,
    }
  );

  return response.data;
};

const sendPembayaranEvent = async (payload) => {
  const response = await axios.post("/api/save", payload);

  // console.log(
  //   "================================================================"
  // );
  // console.log(response);

  return response.data;
};

export { getEventInitializeData, sendPembayaranEvent };
