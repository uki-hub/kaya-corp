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
  const response = await axios.post(
    "https://api.bantengseries.com//api/ticket/save.php",
    payload
  );

  return response.data;
};

export { getEventInitializeData, sendPembayaranEvent };
